const http = require('http');


const fs = require('fs');


//   //  => HTML Read
// const readData = fs.readFileSync('index.html','utf-8')


//   //  => JSON Read
const readData = fs.readFileSync('product.json','utf-8')





// const data = {
//     age :20
// }


const server = http.createServer((req,res)=>{
    console.log('server Created');

    //  // HTML
    // res.setHeader('Content-Type','text/html');
    // res.end('<h1> Hello </h1>');


    //  // JSON
    // res.setHeader('Content-Type','application/json');
    // res.end(JSON.stringify(data));



    res.end(readData);

})

server.listen(9090);