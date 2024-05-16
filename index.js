const http = require("http");

const fs = require("fs");

//   //  => HTML Read
const read = fs.readFileSync("index.html", "utf-8");
// const readUserHtmlData = fs.readFileSync("user.html", "utf-8");

//   //  => JSON Read
const readData = JSON.parse(fs.readFileSync("product.json", "utf-8"));
// const readUserJsonData = JSON.parse(fs.readFileSync('user.json','utf-8'));
// const readData = require("./product.json");

//  // JSON Conect

// const products = readData.products[0];
const products = readData.products;
// const user = readUserJsonData.users;
// console.log(user);
// console.log(products);

// const data = {
//     age :20
// }

const server = http.createServer((req, res) => {
  console.log("server Created");

  //  // HTML
  // res.setHeader('Content-Type','text/html');
  // res.end('<h1> Hello </h1>');

  //  // JSON
  // res.setHeader('Content-Type','application/json');
  // res.end(JSON.stringify(data));

//   res.end(readdata);

  //  // if - else

  // if(req.url.startsWith("/html"))
  // {
  // res.setHeader('Content-Type','text/html');
  // res.end('<h1> Hello </h1>');
  // }
  //     else if (req.url.startsWith("/json"))
  //     {
  //         res.setHeader('Content-Type','application/json');
  //         res.end(JSON.stringify(readData));
  //     }
  //     else {
  //         res.end('Byy Byy');
  //     }

  if (req.url.startsWith("/product")) {
    console.log(req.url.split("/")[2]);

    const id1 = req.url.split("/")[2];
    const product1 = products.find((p) => p.id === +id1);
    // console.log(product1);

    res.setHeader("Content-Type", "text/html");
    const modifydata = read
      .replace("**title**", product1.title)
      .replace("**description**", product1.description)
      .replace("**thumbnail**", product1.thumbnail);
    console.log(modifydata);
    res.end(modifydata);

    return;
    
  }
//   else
//  if(req.url.startsWith("/user"))
//     {
//     console.log(req.url.split("/")[2]);

//     const id2 = req.url.split("/")[2];
//     const user1 = user.find((u) => u.id === (+id2));
//     // console.log(user1);

//     const modifydata1 = read
//       .replace("**age**", user1.age)
//       .replace("**firstName**", user1.firstName)
//       .replace("**image**", user1.image);
//     console.log(modifydata1);
//     res.end(modifydata1);
//     return;

//   }

  // // switch case
  switch (req.url) {
    case "/html":
      res.setHeader("Content-Type", "text/html");
      res.end("<h1> Hello </h1>");
      break;

    case "/json":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(readData));
      break;
    // case '/product' :
    //     res.setHeader('Content-Type','text/html');
    //     const modifydata = read.replace('**title**',products.title).replace('**description**',products.description).replace('**thumbnail**',products.thumbnail);
    //     console.log(modifydata);
    //     res.end(modifydata);
    //     break;

    // case '/user' :
    //     res.setHeader('Content-Type','text/html');
    //     const modifydata1 = read.replace("**age**", user.age)
    //       .replace("**firstName**", user.firstName)
    //       .replace("**image**", user.image);
    //     console.log(modifydata1);
    //     res.end(modifydata1);;
    //     break;

    default:
      res.end("Byy Byy");
      break;
  }
});

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
