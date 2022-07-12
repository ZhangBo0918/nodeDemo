const url = require('url')
const urlObj = {
    protocol: 'https',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    hash: '#tag=110',
    search: '?id=8&name=mouse',
    query: { id: '8', name: 'mouse' },
    pathname: '/ad/index.html?id=8&name=mouse'
}
const parseObj = url.format(urlObj)
console.log(parseObj);