console.log(getMin(3,0,-3,5,17,-20));

function getMin(...args) {
    let min = 0;
    args.forEach(element => {
        min = element < min ? element : min;
    });
    return min;
}