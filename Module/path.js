const path = require('path');


// console.log(path.basename('D:/user/hello.txt'));             // hello.txt
// console.log(path.basename(__dirname));                          // Module
// console.log(path.basename(__filename));                         // path.js


// console.log(path.join(__dirname , 'public' , 'hello.txt'));
// //   =>   C:\ankush\Node JS Language\Node JS\Module\public\hello.txt


// console.log(path.resolve("D:/user/hello.txt"));                           // D:/user/hello.txt


// console.log(path.dirname('D:/user/hello.txt'));                             // D:/user


console.log(path.relative(__filename,"./path.js"));


// console.log(path.extname('D:/user/hello.txt'));                             // .txt


// console.log(path.format({
//     root: 'D:/',
//     dir: 'D:/user',
//     base: 'hello.txt',
//     ext: '.txt',
//     name: 'hello'
//   }));                                                                          //  D:/user\hello.txt


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



// console.log(path.toNamespacedPath('D:/user/hello.txt'));            // \\?\D:\user\hello.txt
// console.log(path.toNamespacedPath(__dirname));                      // \\?\C:\ankush\Node JS Language\Node JS\Module
// console.log(path.toNamespacedPath(__filename));                     // \\?\C:\ankush\Node JS Language\Node JS\Module\path.js




