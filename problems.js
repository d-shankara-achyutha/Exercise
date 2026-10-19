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

function printNumbers(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += i + " ";
    }
    console.log(result.trim());
}

printNumbers(5);



//Problem 4
//Even or Odd

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(14));



//Problem 5
//Largest of the Three

function largest(a, b, c) {
    if (a >= b && a >= c) {
        return `Largest: ${a}`;
    } else if (b >= a && b >= c) {
        return `Largest: ${b}`;
    } else {
        return `Largest: ${c}`;
    }
}

console.log(largest(12, 27, 19));



//Problem 6
//Sum of "n" numbers

function sumNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + 1;
    }
    return sum;
}

console.log(sumNumbers(10));


//Problem 6
//Multiplication table

let tableNum = 3;

for (let j = 1; j <= 10; j++) {
    console.log(`${tableNum} * ${j} = ${tableNum * j}`);
}



//Problem 7
//Counting the Digits
function countDigits(num) {
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(5082));



//Problem 8
//Reversing the digits

function reverseNumber(num) {
    let rev = 0;

    while(num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumber(12040));



//Problem 9
//Check a palindrome

function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while(num > 0) {
        rev = rev*10 +(num %10);
        num = Math.floor(num/10);
    }

    return original === rev ? "Palindrome" : "Not Palindrome"
}

console.log(isPalindrome(1221));



//Problem 10
//Factorial of a Number

function factorial(num) {
    let fact = 1;
    
    for(let i=1; i <= num; i++) {
        fact = fact*i;
    } 

    return fact;
}

console.log(factorial(5));



//Problem 11
//Fibonacci Sequence

function fibonacci(num) {
    let a =0, b = 1, result = "";

    for(let i = 1; i <= num; i++) {
        result += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }

    console.log(result.trim());
}

fibonacci(7);



//Problem 12
//Check Prime Numbers

function isPrime(num) {
    if (num < 2) {
        return "Not Prime";
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}

console.log(isPrime(17));



//Prolem 13
//Printing all Prime Numbers in a Range

function isPrime(num) {
    if (num < 2) {
        return "Not Prime";
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}

function printPrimes(start, end) {
    let result = "";

    for (let num = start; num <= end; num++) {
        if(isPrime(num)) {
            result += num + " ";
        }
    }
    console.log(result.trim());
}

printPrimes(10, 20);

//Problem 14
//Greatest Common Divisor

function findGCD(a, b) {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(findGCD(18, 24));

//Problem 15
//Check Armstrong Number

function isArmstrong(num) {
    let original = num;
    let temp = num;
    let count = 0;
    let sum = 0;

    do {
        count++;
        temp = Math.floor(temp/10);
    } while (temp > 0);

        temp = num;

        while(temp >0) {
            let digit = temp % 10;
            sum += digit ** count;
            temp = Math.floor(temp/10);
        }

        return sum === original ? "Armstrong Number" : "Not Armstrong Number"   
}

console.log(isArmstrong(153));



//Problem 16
//Counting Vowels in a String(Ignoring Vowels)

function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if("aeiou".includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("JavaScript is fun - Only when learnt Properly"));



//Prolem 17
//Reversing a String

function reverseString(str) {
    let rev = "";

    for(let i=str,length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev;
}

console.log(reverseString("Hello World"));