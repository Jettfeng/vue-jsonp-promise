import jsonp from './jsonp'

export function getData() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'
  const data = {
    g_tk:5381,
    loginUin:0,
    hostUin:0,
    format:'jsonp',
    inCharset:'utf8',
    outCharset:'GB2312',
    notice:0,
    platform:'yqq',
    needNewCode:0,
    cmd:'shoubo',
    lan:'all',
    }
  const options = {
    param:'jsonpCallback',
    name:'recom9751137453135932'
  }
  return jsonp(url,data,options)
}
