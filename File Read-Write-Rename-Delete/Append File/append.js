const fs = require('fs');


const data = " \n\nThis is Demo Of Append Sync File.";
fs.appendFile('One.txt', data, (err, data)=>{
    if(err)
        console. log(err);
        console. log('Append File SuccesFully');
         })
        
        fs.appendFileSync('One.txt',data);


// ANS =>
    // Append File SuccesFully