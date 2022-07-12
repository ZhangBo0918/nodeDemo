const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h4 style="text-align:center;">首页</h4>');
})

router.get('/home', (req, res) => {
    console.log(req.query)
    res.send('<h4 style="text-align:center;">Home</h4>');
})

router.get('/index', (req, res) => {
    console.log(req.query)
    res.send('<h3>Index</h3>')
})

module.exports = router