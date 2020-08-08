export type Interface =
    'Smartphone Android app'
  | 'Tablette Android app'
  | 'Iphone app'
  | 'Ipad app'
  | 'Website'
  | 'Webapp'

export interface Device {
  interface: string|null,
  webview: boolean|null,
  webviewAndroid: boolean|null,
  webviewIOS: boolean|null
}
