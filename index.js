const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('server Created');
    res.end('<h1> Hello </h1>');
})

server.listen(9090);