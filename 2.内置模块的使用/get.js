const http = require('http')
const https = require('https')
const url = require('url')

http.createServer((req, res) => {
    let urlM = 'https://i.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=10&optimus_uuid=EF78DE70E98911EC94C8BBCA8F5A2BAF81F09E444EBF4F4DB8B5A92361905780&optimus_risk_level=71&optimus_code=10'
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        "access-control-allow-origin": '*'
    })
    if (req.url === '/favicon.ico') {
        return
    }
    dataGet(urlM,res)
}).listen(5000,()=>console.log("端口5000正在监听中......"))

function dataGet(url,response) {
    let data = ''
    https.get(url, res => {
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            response.end(data)
        })
    })
}