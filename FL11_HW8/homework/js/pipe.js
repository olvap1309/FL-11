let addOne = x => x + 1;

function pipe(x, ...args) {
    args.forEach(element => {
        x = element(x);
    });
    return x;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne, addOne));