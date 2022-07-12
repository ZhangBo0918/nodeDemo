const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/login/:id', (req, res) => {
    res.send('<span>用户名:</span><input name="user" />');
});
app.get(/.*sex$/, (req, res) => {
    res.send('<h1 style="text-align:center;">最喜欢色色了</h1>')
});
app.get('/home', (req, res, next) => {
    console.log('验证token');
    next();
}, (req, res) => {
    res.send({ list: [1, 2, 3] });
});
const fun1 = (req, res, next) => {
    console.log('验证token')
    const isValid = true;
    if (isValid) {
        next();
    } else {
        res.send('<h1 style="color:red;">error</h1>');
    }
};
const fun2 = (req, res) => {
    res.send({ list: [1, 2, 3, 4] });
}
app.get('/page', [fun1, fun2]);
app.listen(3000, () => {
    console.log('3000端口被监听了......');
});