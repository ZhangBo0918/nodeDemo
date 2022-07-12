const http = require("http")
const fs = require('fs')
http.createServer((req, res) => {
    const myUrl = new URL(req.url, "http://127.0.0.1")
    console.log(myUrl)
    switch (myUrl.pathname) {
        case '/login':
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.write(fs.readFileSync('./login.html'))
            res.end()
            break
    }
}).listen(3000, () => {
    console.log("port 3000 is listening......")
})