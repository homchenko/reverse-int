module.exports = function reverse (n) {
    let num = Math.abs(n);
    let nnn = num.toString().split('');
    let arr = [];
    for(let i = nnn.length-1; i >= 0; i--){
      arr.push(nnn[i]);
    } 
    let str = Number(arr.join(''));
    return (str);
}
