// 1.http的使用
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return
    }
    console.log(req.url)
    console.log(url.parse(req.url, true))
    res.writeHead(statusCode(req.url), { "Content-Type": "text/html;charset=utf-8" })
    res.write(renderHtml(req.url))
    res.end()
}).listen(5000, () => {
    console.log("正在监听5000端口...")
})
function renderHtml(url) {
    let html = ''
    switch (url) {
        case '/home':
            html = `<div style="text-align:center;font-size:20px;font-weight:700">我是Home页面</div>`
            break;
        case '/page':
            html = `<div style="text-align:center;font-size:20px;font-weight:700;color:blue">我是Page页面</div>`;
            break;
        default:
            html = `<div style="text-align:center;font-size:40px;font-weight:700;margin-top:200px">404</div>`
            break;
    }
    return html
}
function statusCode(url) {
    let urls = ['/home','/page']
    if (urls.includes(url)) {
        return 200
    } else {
        return 404
    }
}