// 'r' - Open file for reading. An exception occurs if the file does not exist.


const fs = require('fs');


fs.open('one.txt','r+',(err,data)=>{
if(err){
        console. log(err);
    }
    console. log('Open File SuccesFully ...! ',data);
})


//    ANS    =>         Open File SuccesFully ...!  3