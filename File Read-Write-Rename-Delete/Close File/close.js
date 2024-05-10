const fs =  require('fs');


fs.close('demo.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("Close File Successfully....");
})