let a, b, c;

do {
    a = Number(prompt('Give me a first valid side of triangle:'));
} while (!a || a < 0);

do {
    b = Number(prompt('Give me a second valid side of triangle:'));
} while (!b || b < 0);

do {
    c = Number(prompt('Give me a third valid side of triangle:'));
} while (!c || c < 0);

if (a + b >= c && a + c >= b && c + b >= a) {
    if (a === b || b === c) {
        if (a === c) {
            console.log('Equivalent triangle');            
        } else {
            console.log('Isosceles triangle');
        }
    } else if (a === c) {
        console.log('Isosceles triangle');        
    } else {
        console.log('Normal triangle');        
    }
} else {
    console.log('Triangle doesn’t exist');    
}