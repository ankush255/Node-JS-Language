const http = require('http');


const fs = require('fs');



const server = http.createServer((req,res)=>{
    console.log('server Created');

    res.end('<h1> Hello </h1>');


});

server.listen(1090);
