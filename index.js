const http = require('http');


const fs = require('fs');


//   //  => HTML Read
// const readData = fs.readFileSync('index.html','utf-8')


//   //  => JSON Read
// const readData = fs.readFileSync('product.json','utf-8')

// const readData = fs.readFileSync('user.json','utf-8')


const readData = require("./product.json");



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



    // res.end(readData);


    if(req.url.startsWith("/html"))
    {
        res.setHeader('Content-Type','text/html');
        res.end('<h1> Hello </h1>');
    }
        else if (req.url.startsWith("/demo"))
        {
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(readData));
        }
        else {
            res.end('Byy Byy');
        }

})




server.listen(1090);







// //  Second Server Created

// //    1

// const serve = http.createServer();

// serve.on('request',(req,res)=>{
//     res.end('<h1> Ankush </h1>');
// })

// serve.listen(2555,()=>{
//     console.log('server created')
// });




// // //   2

// const sever = http.createServer();

// sever.on('request',(req,res)=>{
//     res.end('<h1> Thummar </h1>');
// })

// sever.listen(1234,()=>{
//     console.log('server created')
// });




// // //   3

// const se = http.createServer();

// se.on('request',(req,res)=>{
//     res.end('<h1> Patel </h1>');
// })

// se.listen(1111,()=>{
//     console.log('server created')
// });




// // //   4

// const ever = http.createServer();

// ever.on('request',(req,res)=>{
//     res.end('<h1> Big </h1>');
// })

// ever.listen(4567,()=>{
//     console.log('server created')
// });




// // //   5

// const sevr = http.createServer();

// sevr.on('request',(req,res)=>{
//     res.end('<h1> Small </h1>');
// })

// sevr.listen(8989,()=>{
//     console.log('server created')
// });
