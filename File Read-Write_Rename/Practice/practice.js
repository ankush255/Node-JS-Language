const fs = require('fs');



const data = "This IS a NODE JS Language Learning....";
fs.writeFile('one.txt',data).readFile('one.txt','utf-8',(err,data)=>{
    if(err)
        console.log(err);
    console.log(data);
})

