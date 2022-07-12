const url = require('url')
const websiteUrl = 'https://www.baidu.com/s?wd=%E5%94%90%E5%B1%B1%E8%A6%81%E6%B1%82%E4%B8%8D%E6%BC%8F%E4%B8%80%E4%BA%BA%E4%B8%80%E6%A1%88%E5%BD%BB%E6%9F%A5%E4%B8%A5%E6%83%A9&sa=fyb_hp_news&rsv_dl=fyb_hp_news'
const parseUrl = url.parse(websiteUrl)
console.log(parseUrl); 