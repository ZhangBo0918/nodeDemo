const url = require('url')
let a = url.resolve('/1/2/3/', '4')
let b = url.resolve('https://www.baidu.com/', '/s=vae')
let c = url.resolve('http://www.bilibili.com/singer/', 'vae')
console.log(a)
console.log(b);
console.log(c);