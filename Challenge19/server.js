const http = require('http')
const fs = require('fs')
const content = fs.readFileSync('test.html', 'utf-8')

console.log(__dirname)

http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/html"})
    res.end(content)
}).listen(3000)