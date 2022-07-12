// express的中间件的使用
const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/home', (req, res) => {
    res.send('<h3 style="text-align:center;color:yellow;">Home页面</h3>');
});
app.listen(3000, () => {
    console.log('3000端口正在被监听中......');
});