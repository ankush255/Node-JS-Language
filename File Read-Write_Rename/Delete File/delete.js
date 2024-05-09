const fs =  require('fs');


fs.unlink('One.txt',(err,data)=>{
    if(err)
        console.log(err);
    console.log("Delte File Succesfully...");
})


// ANS =>
    // Delte File Succesfully...