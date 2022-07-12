const express = require('express')
const app = express()
const myRouter = require('./myRouter')

app.use((req, res, next) => {
    console.log('验证token');
    next();
})
app.use('/', myRouter);
app.listen(3000, () => {
    console.log('3000端口正在被监听......')
})