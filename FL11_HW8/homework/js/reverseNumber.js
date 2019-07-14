console.log(reverseNumber(-321));
console.log(reverseNumber(654));
console.log(reverseNumber(100000));

function reverseNumber(number) {
    const base = 10;
    let x = Math.abs(number);
    let xReverse = Math.sign(number) === -1 ? '-' : '';
    while(x % base !== x) {
        xReverse = xReverse + x % base;
        x = Math.floor(x / base);
    }
    return parseInt(xReverse + x);
}