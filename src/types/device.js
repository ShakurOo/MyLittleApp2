// @flow
export type Interface =
  'Smartphone Android app'
  | 'Tablette Android app'
  | 'Iphone app'
  | 'Ipad app'
  | 'Website'
  | 'Webapp'

export type Device = {|
  +webview: boolean,
  +webviewPhone: boolean,
  +webviewTablet: boolean,
  +webviewAndroid: boolean,
  +webviewIOS: boolean,
|}
