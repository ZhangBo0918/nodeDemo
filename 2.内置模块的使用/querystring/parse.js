const querystring = require('querystring')
let qs = 'x=3&y=4'
let parsed = querystring.parse(qs)
console.log(parsed)