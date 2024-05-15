const http = require("http");

const fs = require("fs");


const read = fs.readFileSync("user.html", "utf-8");


const readUserJsonData = JSON.parse(fs.readFileSync('user.json','utf-8'));

const user = readUserJsonData.users;
console.log(user);


const server = http.createServer((req, res) => {
    console.log("server Created");


    if(req.url.startsWith("/user"))
        {
        console.log(req.url.split("/")[2]);
    
        const id2 = req.url.split("/")[2];
        const user1 = user.find((u) => u.id === (+id2));
        // console.log(user1);
    
        const modifydata1 = read
          .replace("**age**", user1.age)
          .replace("**firstName**", user1.firstName)
          .replace("**image**", user1.image);
        console.log(modifydata1);
        res.end(modifydata1);
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