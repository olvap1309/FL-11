function Fighter(fighter) {
    const name = fighter.name;

    const totalHp = fighter.hp;

    let damage = fighter.damage;

    let agility = fighter.agility;

    let hp = fighter.hp;

    let win = 0;

    let loss = 0;

    const getName = () => name;

    const getDamage = () => damage;

    const getAgility = () => agility;

    const getHealth = () => hp;

    const attack = function (defender) {
        const maxProbability = 100;
        const probability = maxProbability - defender.getAgility();
        if (Math.floor(Math.random() * maxProbability + 1) <= probability) {
            defender.dealDamage(this.getDamage());
            console.log(
                `${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`
            );
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    };

    const logCombatHistory = () =>
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`);

    const heal = function (heal) {
        hp = this.getHealth() + heal >= totalHp ? totalHp : this.getHealth() + heal;
    };

    const dealDamage = function (heal) {
        hp = this.getHealth() - heal <= 0 ? 0 : this.getHealth() - heal;
    };

    const addWin = () => win++;

    const addLoss = () => loss++;

    return {
        getName: getName,
        getDamage: getDamage,
        getAgility: getAgility,
        getHealth: getHealth,
        attack: attack,
        logCombatHistory: logCombatHistory,
        heal: heal,
        dealDamage: dealDamage,
        addWin: addWin,
        addLoss: addLoss
    };
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        fighter1.getHealth() === 0
            ? console.log(`${fighter1.getName()} is dead and can't fight.`)
            : console.log(`${fighter2.getName()} is dead and can't fight.`);
    } else {
        let i = 0;
        let j = 1;
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            arguments[i].attack(arguments[j]);
            i = (i + 1) % arguments.length;
            j = (j + 1) % arguments.length;
        }
        if (fighter1.getHealth() === 0) {
            fighter1.addLoss();
            fighter2.addWin();
        } else {
            fighter2.addLoss();
            fighter1.addWin();
        }
    }
}
