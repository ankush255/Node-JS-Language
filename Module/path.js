const path = require('path');


// console.log(path.basename('D:/user/hello.txt'));             // hello.txt
// console.log(path.basename(__dirname));                          // Module
// console.log(path.basename(__filename));                         // path.js


// console.log(path.join(__dirname , 'public' , 'hello.txt'));
// //   =>   C:\ankush\Node JS Language\Node JS\Module\public\hello.txt


// console.log(path.resolve("D:/user/hello.txt"));                           // D:/user/hello.txt


// console.log(path.dirname('D:/user/hello.txt'));                             // D:/user


console.log(path.relative(__dirname));


// console.log(path.extname('D:/user/hello.txt'));                             // .txt


console.log(path.format(__filename));


// console.log(path.isAbsolute('D:/user/hello.txt'));                            // true


// console.log(path.normalize('D:/user/hello.txt'));                              // D:/user/hello.txt


// console.log(path.parse('D:/user/hello.txt'));
// {
//     root: 'D:/',
//     dir: 'D:/user',
//     base: 'hello.txt',
//     ext: '.txt',
//     name: 'hello'
//   }


console.log(path.relative('D:/user/hello.txt'));


// console.log(path.toNamespacedPath('D:/user/hello.txt'));            // \\?\D:\user\hello.txt





