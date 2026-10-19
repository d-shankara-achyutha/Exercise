function space() {
    console.log("");
}

//Problem 1
//Cricket Strike Rate

function strikeRate(runs, balls) {
    return (runs / balls) * 100;
}

function playerType(runs, balls) {
    if (runs === undefined || balls === undefined) {
        return "Missing Arguments";
    }

    if (runs < 0 || balls <= 0) {
        return "Invalid Output";
    }

    const rate = strikeRate(runs, balls);

    if (rate >= 150) {
        return "Power Hitter";
    } else if (rate >= 100) {
        return "Steady Batter";
    } else {
        return "Slow Batter";
    }
}

// console.log(playerType(60, 30));
// console.log(playerType(20, 40));
// console.log(playerType(10, 0));
// console.log(playerType());

document.getElementById("cricket-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const runs = Number(document.getElementById("runs").value);
    const balls = Number(document.getElementById("balls").value);
    const rate = strikeRate(runs, balls);
    const category = playerType(runs, balls);
    const result = `${category} - strike rate: ${rate.toFixed(1)}`;

    document.getElementById("cricket-result").textContent = result;
    console.log(result);
});



space()
//Problem 2
//Game Battle

function damage(attack, shield) {
    const netDamage = attack - shield;
    return netDamage > 0 ? netDamage : 0;
}

function healthLeft(health, attack, shield) {
    const damageTaken = damage(attack, shield);
    const remainingHealth = health - damageTaken;
    return remainingHealth > 0 ? remainingHealth : 0;
}

function battleResult(health, attack, shield) {
    const remainingHealth = healthLeft(health, attack, shield);

    if (remainingHealth === 0) {
        return "Player Defeated";
    } else if (remainingHealth <= 30) {
        return "Low Health";
    } else {
        return "Still Fighting";
    }
}

// console.log(battleResult(100, 50, 20));
// console.log(battleResult(100, 90, 15));
// console.log(battleResult(100, 10, 30));

document.getElementById("battle-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const health = Number(document.getElementById("health").value);
    const attack = Number(document.getElementById("attack").value);
    const shield = Number(document.getElementById("shield").value);
    const result = battleResult(health, attack, shield);

    document.getElementById("battle-result").textContent = result;
    console.log(result);
});

const inputStorageKey = "small-js-scenario-inputs";
let savedInputs = {};

try {
    const storedInputs = localStorage.getItem(inputStorageKey);
    const parsedInputs = storedInputs ? JSON.parse(storedInputs) : {};
    if (parsedInputs && typeof parsedInputs === "object" && !Array.isArray(parsedInputs)) {
        savedInputs = parsedInputs;
    }
} catch {
    savedInputs = {};
}

document.querySelectorAll(".exercise-form input").forEach(function (input) {
    if (Object.prototype.hasOwnProperty.call(savedInputs, input.id)) {
        input.value = savedInputs[input.id];
    }

    function enforceMaximum() {
        if (input.max !== "" && input.value !== "" && input.valueAsNumber > Number(input.max)) {
            input.value = input.max;
        }
    }

    enforceMaximum();
    savedInputs[input.id] = input.value;

    input.addEventListener("input", function () {
        enforceMaximum();
        savedInputs[input.id] = input.value;
        try {
            localStorage.setItem(inputStorageKey, JSON.stringify(savedInputs));
        } catch {
            // Keep the form usable if browser storage is unavailable.
        }
    });
});

try {
    localStorage.setItem(inputStorageKey, JSON.stringify(savedInputs));
} catch {
    // Keep the form usable if browser storage is unavailable.
}



//Rough Work
//Problem 3
// Printing "n" numbers

let testNum = 5;
let result = "";

for (let i = 1; i <= testNum; i++) {
    result += i + " ";
}

console.log(result.trim());



//Problem 4
//Even or Odd

let checkNum = 14;

if (checkNum % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}



//Problem 5
//Largest of the Three

let a = 12; b = 27; c = 19;

if (a >= b && a >= c) {
    console.log(`Largest: ${a}`);
} else if (b >= a && b >= c) {
    console.log(`Largest: ${b}`);
} else {
    console.log(`Largest: ${c}`);
}



//Problem 6
//Sum of "n" numbers

let numSum = 6;
let sum = 0;

for (let i = 1; i <= numSum; i++) {
    sum = sum + i;
}

console.log(sum);



//Problem 6
//Multiplication table

let tableNum = 3;

for (let j = 1; j <= 10; j++) {
    console.log(`${tableNum} * ${j} = ${tableNum * j}`);
}



//Problem 7
//Counting the Digits

 numCount = 5082; count = 0;

if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
}

console.log(count);



//Problem 8
//Reversing the digits

let numReverse = 40350; count 