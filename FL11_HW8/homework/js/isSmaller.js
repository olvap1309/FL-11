let isBigger = (x,y) => x > y;

let isSmaller = (x, y) => x === y ? false : !isBigger(x, y);

console.log(isSmaller(4,0));