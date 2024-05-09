const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');


fs.rename('one.txt','Demo.txt',(err,data)=>{
        if(err)
            console.log(err);
        console.log("Rename File Succesfully..");
})



//   ANS =>
    // Rename File Succesfully..