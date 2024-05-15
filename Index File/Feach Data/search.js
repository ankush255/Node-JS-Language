const http = require("http");

const fs = require("fs");



const read = fs.readFileSync("index.html", "utf-8");



const readData = JSON.parse(fs.readFileSync("product.json", "utf-8"));
const products = readData.products;



const server = http.createServer((req, res) => {
    console.log("server Created");


    if (req.url.startsWith("/product")) {
        console.log(req.url.split("/")[2]);
    
        const id1 = req.url.split("/")[2];
        const product1 = products.find((p) => p.id === +id1);
        // console.log(product);
    
        res.setHeader("Content-Type", "text/html");
        const modifydata = read
          .replace("**title**", product1.title)
          .replace("**description**", product1.description)
          .replace("**thumbnail**", product1.thumbnail);
        console.log(modifydata);
        res.end(modifydata);
    
        return;
      }
    
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
    
        default:
          res.end("Byy Byy");
          break;
      }
    });
    
    server.listen(1090);
    