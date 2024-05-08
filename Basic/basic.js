exports.sum = (a,b)=>{
    return a + b;
}

console.log(sum(2,6));              // 8





const man =(a,b)=>{
    return a + b;
}

console.log(man(10,8));             // 18





function dif (a,b){
    return a-b;
}
console.log(dif(3,8));              // -5





function mul(a,b){
    return a*b;
}
console.log(mul(7*7));             // 49





exports.sum = sum;

export {mul,dif};