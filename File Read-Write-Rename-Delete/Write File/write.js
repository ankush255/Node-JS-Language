const fs = require('fs');





// Write File

// //     1.    Write File Sync

const r3 = performance.now();

const data = " This is Demo of SYNC";
fs.writeFileSync('Demo.txt',data);

const r4 = performance.now();

const Diffrence1 = r4-r3;
console. log(`Diffrence BetWeen R3 - R4 ${Diffrence1}`);


//     ANS   =>  Diffrence BetWeen R3 - R4 0.9647999999999968



// // 2.          Write File Async

const r1 = performance.now();
fs.writeFile('One.txt', 'This is node js,', (err, data)=>{
    if(err){
        console. log(err);
    }
})

const r2 = performance.now();

const Diffrence = r2-r1;
console. log(`Diffrence BetWeen R1 - R2 ${Diffrence}`);

//     ANS   =>   Diffrence BetWeen R1 - R2 0.8444000000000074