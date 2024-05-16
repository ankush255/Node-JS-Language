const os = require('os');


// console.log(os.tmpdir());               // C:\Users\DELL\AppData\Local\Temp 


// console.log(os.type());              // Windows_NT


// console.log(os.homedir());           //  C:\Users\DELL


// console.log(os.platform());             // win32

  
// console.log(os.hostname());              // 0945


// console.log(os.arch());                   // x64


// console.log(os.availableParallelism());            // 8


// console.log(os.cpus());
// [
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 459265, nice: 0, sys: 328296, idle: 6700187, irq: 35562 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 328578, nice: 0, sys: 190281, idle: 6968328, irq: 8468 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 555546, nice: 0, sys: 261984, idle: 6669656, irq: 5640 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 381625, nice: 0, sys: 172281, idle: 6933281, irq: 3296 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 439500, nice: 0, sys: 230500, idle: 6817187, irq: 6343 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 341625, nice: 0, sys: 174125, idle: 6971453, irq: 3718 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 437375, nice: 0, sys: 213453, idle: 6836359, irq: 4750 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz',
//       speed: 2112,
//       times: { user: 402703, nice: 0, sys: 183437, idle: 6901031, irq: 3125 }
//     }
//   ]


// console.log(os.endianness());                 // LE


// console.log(os.freemem());                       // 2570661888


// console.log(os.getPriority());                     // 0


// console.log(os.loadavg());                        // [ 0, 0, 0 ]


// console.log(os.machine());                          // x86_64


// console.log(os.networkInterfaces());              
// {
//     'Wi-Fi': [
//       {
//         address: 'fe80::8f72:feeb:3732:53ee',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: 'd0:c6:37:74:d3:bc',
//         internal: false,
//         cidr: 'fe80::8f72:feeb:3732:53ee/64',
//         scopeid: 22
//       },
//       {
//         address: '192.168.0.102',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: 'd0:c6:37:74:d3:bc',
//         internal: false,
//         cidr: '192.168.0.102/24'
//       }
//     ],
//     'Loopback Pseudo-Interface 1': [
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       }
//     ]
//   }


// console.log(os.release());                          // 10.0.22631


console.log(os.setPriority());


// console.log(os.totalmem());                           // 8462270464


// console.log(os.uptime());                            // 11156.031


// console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'DELL',
//     homedir: 'C:\\Users\\DELL',
//     shell: null
//   }


// console.log(os.version());                          // Windows 11 Pro

