const http = require('http');


const fs = require('fs');


const server = http.createServer((req,res)=>{
    console.log('server Created');


    //  // if - else 

    if(req.url.startsWith("/html"))
    {
        res.setHeader('Content-Type','text/html');
        res.end('<h1> Hello </h1>');
    }
        else if (req.url.startsWith("/json"))
        {
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(readData));
        }
        else {
            res.end('Byy Byy');
        }
});


server.listen(1090);
