// // Append File;


const fs = require('fs');


// // Read File.
        
fs.readFile('One.txt','utf-8',(err,data)=>{
    if(err)
        console. log(err) ;
        console. log("Rename File Succesfully");

        console. log(data);
})


//  ANS =>
    // Rename File Succesfully
    // This is a Node JS Language Learning....
