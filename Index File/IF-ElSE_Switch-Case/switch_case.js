const http = require('http');


const fs = require('fs');




const server = http.createServer((req,res)=>{
    console.log('server Created');

    // // switch case
    switch (req.url) {
        case '/html' :
            res.setHeader('Content-Type','text/html');
            res.end('<h1> Hello </h1>');
            break;

        case '/json' :
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(readData));
            break;
    
        default:
            res.end('Byy Byy');
            break;
    }

});


server.listen(1090);
