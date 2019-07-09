let isGame, pocket, guess;
const attempts = 3;
const prizeNumbers = 3;
const rangeUp = 4;

isGame = confirm('Do you want to play a game?');

if (!isGame) {
    alert('You did not become a billionaire, but can.');
}

while (isGame) {
    let prizeWin = 0;
    let range = 8;
    let prize = new Array(prizeNumbers);
    let maxPrize = 100;
    let isContinue = true;
    for (let j = 0, k = 1; j < prize.length; j++, k += k) {
        prize[j] = maxPrize / k;
    }
    while (isContinue){
        pocket = Math.floor(Math.random() * range + 1);        
        for (let i = 0; i < attempts; i++) {
            guess = parseInt(prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${attempts - i}
Total prize: ${prizeWin}$
Possible prize on current attempt: ${prize[i]}$\n`));
            if (guess === pocket) {
                prizeWin += prize[i];
                isContinue = confirm(`Congratulation, you won! Your prize is: ${prizeWin}$. Do you want to continue?`);
                if (isContinue) {
                    range += rangeUp;
                    maxPrize += maxPrize;
                    for (let j = 0, k = 1; j < prize.length; j++, k += k) {
                        prize[j] = maxPrize / k;
                    }
                    break;
                } else {
                    break;
                }
            } else if (i === attempts - 1) {
                isContinue = false;
                prizeWin = 0;
                break;
            }
        }
    }
    alert(`Thank you for your participation. Your prize is: ${prizeWin}$`);
    isGame = confirm(`Do you want to play again?`);
}