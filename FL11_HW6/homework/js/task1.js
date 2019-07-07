let aX, aY, bX, bY, cX, cY;
const axes = 2;

do {
    aX = Number(prompt('Give me valid x-coordinate of A:'));
} while (!aX && aX !== 0);

do {
    aY = Number(prompt('Give me valid y-coordinate of A:'));
} while (!aY && aY !== 0);

do {
    bX = Number(prompt('Give me valid x-coordinate of B:'));
} while (!bX && bX !== 0);

do {
    bY = Number(prompt('Give me valid y-coordinate of B:'));
} while (!bY && bY !== 0);

do {
    cX = Number(prompt('Give me valid x-coordinate of C:'));
} while (!cX && cX !== 0);

do {
    cY = Number(prompt('Give me valid y-coordinate of C:'));
} while (!cY && cY !== 0);

if (aX === bX && aY === bY) {
    console.log(false);
} else {
    if ((aX + bX) / axes === cX && (aY + bY) / axes === cY) {
        console.log(true);
    } else {
        console.log(false);
    }
}    