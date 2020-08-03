import xhr2 from 'xhr2'
import { ajax } from 'rxjs/ajax'

const isJSDOM = navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')
const XHR = isJSDOM ? xhr2 : XMLHttpRequest

export const request = (url, params?) => (
  ajax({
    url,
    body: params || null,
    method: (params ? 'POST' : 'GET'),
    withCredentials: false,
    responseType: 'json',
    createXHR: () => new XHR(),
    crossDomain: true
  })
)
