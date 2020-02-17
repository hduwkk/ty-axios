import {AxiosRequestConfig} from './types'
import {transformRequest} from './helpers/data'
import xhr from './xhr'
import { buildURL } from './helpers/url';

function axios(config: AxiosRequestConfig):void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequest(config)
}
function transformUrl(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}
export default axios
