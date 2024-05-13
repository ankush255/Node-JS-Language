const http = require('http');


// const fs = require('fs');


//   //  => HTML Read
// const readData = fs.readFileSync('index.html','utf-8')


//   //  => JSON Read
// const readData = fs.readFileSync('product.json','utf-8')

// const readData = fs.readFileSync('user.json','utf-8')






// const data = {
//     age :20
// }


const server = http.createServer((req,res)=>{
    console.log('server Created');

    //  // HTML
    // res.setHeader('Content-Type','text/html');
    res.end('<h1> Hello </h1>');


    //  // JSON
    // res.setHeader('Content-Type','application/json');
    // res.end(JSON.stringify(data));



    // res.end(readData);

})

server.listen(1090);




const serve = http.createServer((req,res)=>{
    console.log('server created')
    res.end('<h1> Ankush </h1>');
})
serve.listen(2555);



const sever = http.createServer((req,res)=>{
    console.log('server created')
    res.end('<h1> Thummar </h1>');
})
sever.listen(1234);




const se = http.createServer((req,res)=>{
    console.log('server created')
    res.end('<h1> Patel </h1>');
})
se.listen(1111);




const ever = http.createServer((req,res)=>{
    console.log('server created')
    res.end('<h1> Mini </h1>');
})
ever.listen(4567);





const sevr = http.createServer((req,res)=>{
    console.log('server created')
    res.end('<h1> Small </h1>');
})
sevr.listen(8989);
