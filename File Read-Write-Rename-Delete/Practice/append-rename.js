const fs = require("fs");

const data = "\n My name is Ankush..";

fs.writeFile("demo.txt", data, (err, data) => {
  if (err) console.log(err);
}),
  fs.readFile("append.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Read Succesfully....");
    console.log(data);
}),
    fs.appendFile("demo.txt", data, (err, data) => {
      if (err) console.log(err);
      console.log("Append File Succesfully....");

    }),
      fs.rename("demo.txt", "append.txt", (err, data) => {
        if (err) console.log(err);
        console.log("Rename Succes....");
      });


      // ANS => 
//         Rename Succes....
//         Append File Succesfully....
//         Read Succesfully....
//         My name is Ankush..
//         My name is Ankush..