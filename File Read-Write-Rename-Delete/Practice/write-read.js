const fs = require('fs');



const data = "This is a NODE JS Language Learning....";
fs.writeFile('one.txt',data,(err,data)=>{
    if(err)
        console.log(err);

    fs.readFile('one.txt','utf-8',(err,data)=>{
            if(err)
                console.log(err);
            console.log(data);
    })
})



// ANS => 
    // This is a NODE JS Language Learning....