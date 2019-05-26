// @flow
import type { Device, Interface } from 'types'

/*
** Custom prefixes for useragent
*/
const IOS_PHONE_PREFIX = 'iphone'
const IOS_TABLET_PREFIX = 'ipad'
const ANDROID_PHONE_PREFIX = 'android-smartphone'
const ANDROID_TABLET_PREFIX = 'android-tablet'
const ALL_WEBVIEW_PREFIX = [
  IOS_PHONE_PREFIX,
  IOS_TABLET_PREFIX,
  ANDROID_PHONE_PREFIX,
  ANDROID_TABLET_PREFIX
]

const INTERFACE_ANDROID_PHONE = 'Smartphone Android app'
const INTERFACE_ANDROID_TABLET = 'Tablette Android app'
const INTERFACE_IOS_PHONE = 'Iphone app'
const INTERFACE_IOS_TABLET = 'Ipad app'
const INTERFACE_WEBSITE = 'Website' // desktop website
const INTERFACE_WEBAPP = 'Webapp' // mobile website

const INTERFACES = {
  [IOS_PHONE_PREFIX]: INTERFACE_IOS_PHONE,
  [IOS_TABLET_PREFIX]: INTERFACE_IOS_TABLET,
  [ANDROID_PHONE_PREFIX]: INTERFACE_ANDROID_PHONE,
  [ANDROID_TABLET_PREFIX]: INTERFACE_ANDROID_TABLET
}

const MAX_SMALL_VIEWPORT = 640

/* eslint-disable */

/*
** iOS webview regex user agent detecting rules:
**  - iOS webview will be the same as safari but missing 'Safari'
*/
const iPhoneWebviewRule = '(iPhone|iPod)(?!.*Safari)'
const iPadWebviewRule = 'iPad(?!.*Safari)'
const iOSWebviewRule = '(iPhone|iPod|iPad)(?!.*Safari)'

/*
** Android webview regex user agent detecting rules:
**  - Android Lollipop and above: webview will be the same as native but it will contain 'wv'
**  - Android KitKat to lollipop webview will put {version}.0.0.0
**  - There is also an old rule just for old chrome
*/
const newAndroidWebviewRule = 'Android.*(wv|\.0\.0\.0)'
const oldAndroidWebviewRule = 'Linux; U; Android'
const androidWebviewRule = `(${newAndroidWebviewRule}|${oldAndroidWebviewRule})`

/* eslint-enable */

const webviewRules = [
  'WebView', // if it says it's a webview, let's go with that
  ...ALL_WEBVIEW_PREFIX,
  iOSWebviewRule,
  newAndroidWebviewRule,
  oldAndroidWebviewRule
]

const webviewRegExp = new RegExp(`(${webviewRules.join('|')})`, 'ig')
const androidWebviewRegExp = new RegExp(`(${ANDROID_PHONE_PREFIX}|${ANDROID_TABLET_PREFIX}|${androidWebviewRule})`, 'ig')
const iOSWebviewRegExp = new RegExp(`(${IOS_PHONE_PREFIX}|${IOS_TABLET_PREFIX}|${iOSWebviewRule})`, 'ig')
const othersWebviewRegExp = new RegExp(`(${ALL_WEBVIEW_PREFIX.join('|')})`, 'ig')

type IsWebview = (string) => boolean
const isWebview: IsWebview = (ua = window.navigator.userAgent) => Boolean(ua.match(webviewRegExp))
const isAndroidWebview: IsWebview = (ua = window.navigator.userAgent) => Boolean(ua.match(androidWebviewRegExp))
const isIOSWebview: IsWebview = (ua = window.navigator.userAgent) => Boolean(ua.match(iOSWebviewRegExp))

type GetInterface = (string) => Interface
const getInterface: GetInterface = (
  ua = window.navigator.userAgent
) => {
  const webviewPrefix = ua.match(othersWebviewRegExp)

  if (webviewPrefix) { return INTERFACES[webviewPrefix[0]] }

  const clientWidth = document.documentElement.clientWidth

  if (isWebview(ua)) {
    if (isAndroidWebview(ua)) {
      return clientWidth <= MAX_SMALL_VIEWPORT
        ? INTERFACE_ANDROID_PHONE
        : INTERFACE_ANDROID_TABLET
    }

    if (isIOSWebview(ua)) {
      return ua.match(new RegExp(iPadWebviewRule, 'ig'))
        ? INTERFACE_IOS_TABLET
        : INTERFACE_IOS_PHONE
    }

    return INTERFACE_ANDROID_PHONE // in doubt returns the most likely option
  }

  return clientWidth <= MAX_SMALL_VIEWPORT
    ? INTERFACE_WEBAPP
    : INTERFACE_WEBSITE
}

type GetDeviceInfo = (?string) => Device
export const getDeviceInfo: GetDeviceInfo = (ua = window.navigator.userAgent) => ({
  webview: isWebview(ua),
  webviewAndroid: isAndroidWebview(ua),
  webviewIOS: isIOSWebview(ua),
  interface: getInterface(ua)
})
