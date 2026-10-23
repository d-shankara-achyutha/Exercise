/*
Rough work — original drafts kept for reference (not executed).

function space() {
    console.log("");
}

// Problem 1: Cricket Strike Rate
function strikeRate(runs, balls) {
    return (runs / balls) * 100;
}

function playerType(runs, balls) {
    if (runs === undefined || balls === undefined) return "Missing Arguments";
    if (runs < 0 || balls <= 0) return "Invalid Output";
    const rate = strikeRate(runs, balls);
    if (rate >= 150) return "Power Hitter";
    if (rate >= 100) return "Steady Batter";
    return "Slow Batter";
}

// Problem 2: Game Battle
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
    if (remainingHealth === 0) return "Player Defeated";
    if (remainingHealth <= 30) return "Low Health";
    return "Still Fighting";
}

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

// Problem 3
//
function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) result += i + " ";
    console.log(result.trim());
}
printNumbers(5);

//Problem 4
//
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(14));

//Problem 5
//
function largest(a, b, c) {
    if (a >= b && a >= c) return `Largest: ${a}`;
    if (b >= a && b >= c) return `Largest: ${b}`;
    return `Largest: ${c}`;
}
console.log(largest(12, 27, 19));

//Problem 6
//
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum = sum + 1;
    return sum;
}
console.log(sumNumbers(10));

Problem 7
//
let tableNum = 3;
for (let j = 1; j <= 10; j++) {
    console.log(`${tableNum} * ${j} = ${tableNum * j}`);
}

//Problem 8
//
function countDigits(num) {
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}
console.log(countDigits(5082));

//Problem 9
//
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNumber(12040));

//Problem 10
//
function isPalindrome(num) {
    const original = num;
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return original === rev ? "Palindrome" : "Not Palindrome";
}
console.log(isPalindrome(1221));

//Problem 11
//
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact = fact * i;
    return fact;
}
console.log(factorial(5));

//Problem 12
//
function fibonacci(num) {
    let a = 0, b = 1, result = "";
    for (let i = 1; i <= num; i++) {
        result += a + " ";
        const c = a + b;
        a = b;
        b = c;
    }
    console.log(result.trim());
}
fibonacci(7);

//Problem 13
//
function isPrime(num) {
    if (num < 2) return "Not Prime";
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return "Not Prime";
    }
    return "Prime";
}
console.log(isPrime(17));

//Problem 14
//
function printPrimes(start, end) {
    let result = "";
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) result += num + " ";
    }
    console.log(result.trim());
}
printPrimes(10, 20);

//Problem 15
//
function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(findGCD(18, 24));

//Problem 16
//
function isArmstrong(num) {
    const original = num;
    let temp = num;
    let count = 0;
    let sum = 0;
    do {
        count++;
        temp = Math.floor(temp / 10);
    } while (temp > 0);
    temp = num;
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** count;
        temp = Math.floor(temp / 10);
    }
    return sum === original ? "Armstrong Number" : "Not Armstrong Number";
}
console.log(isArmstrong(153));

//Problem 17
//
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) count++;
    }
    return count;
}
console.log(countVowels("JavaScript is fun - Only when learnt Properly"));

//Problem 18
//
function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    return rev;
}
console.log(reverseString("Hello World"));

function isStringPalindrome(str) {
    str = str.toLowerCase().replaceAll("", "");
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    return str === rev ? "Palindrome" : "Not Palindrome";
}
console.log(isStringPalindrome("Neveroddoreven"));

//Problem 19
//
function largestElement(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log(largestElement[5, 4, 19, 2, 3, 7]);

//Problem 20
//
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([7, 4, 2, 4, 5, 2, 7, 5]));

//Problem 21
//
function charfrequency(str) {
    const freq = {};
    for (const char of str) freq[char] = (freq[char] || 0) + 1;
    console.log(freq);
}
charfrequency("banana");
*/




function strikeRate(runs, balls) {
    return (runs / balls) * 100;
}

function playerType(runs, balls) {
    if (runs < 0 || balls <= 0) {
        return "Invalid input";
    }

    const rate = strikeRate(runs, balls);
    if (rate >= 150) return "Power hitter";
    if (rate >= 100) return "Steady batter";
    return "Slow batter";
}

function damage(attack, shield) {
    return Math.max(attack - shield, 0);
}

function healthLeft(health, attack, shield) {
    return Math.max(health - damage(attack, shield), 0);
}

function battleResult(health, attack, shield) {
    const remainingHealth = healthLeft(health, attack, shield);
    if (remainingHealth === 0) return "Player defeated";
    if (remainingHealth <= 30) return "Low health";
    return "Still fighting";
}

function printNumbers(n) {
    return Array.from({ length: n }, (_, index) => index + 1).join(", ") || "No numbers";
}

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function largest(a, b, c) {
    return `Largest: ${Math.max(a, b, c)}`;
}

function sumNumbers(n) {
    return n * (n + 1) / 2;
}

function multiplicationTable(num) {
    return Array.from({ length: 10 }, (_, index) => `${num} × ${index + 1} = ${num * (index + 1)}`).join("\n");
}

function countDigits(num) {
    return String(Math.abs(num)).length;
}

function reverseNumber(num) {
    const sign = Math.sign(num);
    const reversed = Number(String(Math.abs(num)).split("").reverse().join(""));
    return sign * reversed;
}

function isPalindrome(num) {
    const digits = String(num);
    return digits === Array.from(digits).reverse().join("") ? "Palindrome" : "Not palindrome";
}

function factorial(num) {
    let result = 1;
    for (let factor = 2; factor <= num; factor++) {
        result *= factor;
    }
    return result;
}

function fibonacci(num) {
    const sequence = [];
    let current = 0;
    let next = 1;

    for (let index = 0; index < num; index++) {
        sequence.push(current);
        [current, next] = [next, current + next];
    }

    return sequence.join(", ") || "No terms";
}

function isPrimeNumber(num) {
    if (num < 2) return false;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) return false;
    }
    return true;
}

function isPrime(num) {
    return isPrimeNumber(num) ? "Prime" : "Not prime";
}

function printPrimes(start, end) {
    const primes = [];
    for (let num = Math.max(2, start); num <= end; num++) {
        if (isPrimeNumber(num)) primes.push(num);
    }
    return primes.join(", ") || "No primes in this range";
}

function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function isArmstrong(num) {
    const digits = String(num).split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + digit ** power, 0);
    return sum === num ? "Armstrong number" : "Not an Armstrong number";
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

function reverseString(str) {
    return Array.from(str).reverse().join("");
}

function isStringPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === Array.from(normalized).reverse().join("") ? "Palindrome" : "Not palindrome";
}

function parseNumberList(value) {
    const items = value.split(",").map((item) => item.trim());
    if (items.some((item) => item === "" || !Number.isFinite(Number(item)))) {
        throw new Error("Enter a comma-separated list of numbers.");
    }
    return items.map(Number);
}

function largestElement(arr) {
    return arr.reduce((largest, value) => Math.max(largest, value));
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function charfrequency(str) {
    const frequencies = new Map();
    for (const character of str) {
        frequencies.set(character, (frequencies.get(character) || 0) + 1);
    }
    return Object.fromEntries(frequencies);
}

const exercises = [
    {
        title: "Cricket strike rate",
        description: "Categorize a batter from runs and balls faced.",
        fields: [
            { key: "runs", label: "Runs", placeholder: "60", min: 0 },
            { key: "balls", label: "Balls", placeholder: "30", min: 1 }
        ],
        run: ({ runs, balls }) => `${playerType(runs, balls)} — strike rate: ${strikeRate(runs, balls).toFixed(1)}`
    },
    {
        title: "Battle results",
        description: "Calculate remaining health after an attack and shield.",
        fields: [
            { key: "health", label: "Health", placeholder: "100", min: 0 },
            { key: "attack", label: "Attack", placeholder: "50", min: 0 },
            { key: "shield", label: "Shield", placeholder: "20", min: 0 }
        ],
        run: ({ health, attack, shield }) => `${battleResult(health, attack, shield)} — ${healthLeft(health, attack, shield)} health left`
    },
    {
        title: "Print numbers",
        description: "List every number from 1 up to n.",
        fields: [{ key: "n", label: "n", placeholder: "5", min: 0, max: 1000 }],
        run: ({ n }) => printNumbers(n)
    },
    {
        title: "Even or odd",
        description: "Check whether an integer is even or odd.",
        fields: [{ key: "num", label: "Number", placeholder: "14" }],
        run: ({ num }) => checkEvenOdd(num)
    },
    {
        title: "Largest of three",
        description: "Compare three numbers and return the largest.",
        fields: [
            { key: "a", label: "A", placeholder: "12" },
            { key: "b", label: "B", placeholder: "27" },
            { key: "c", label: "C", placeholder: "19" }
        ],
        run: ({ a, b, c }) => largest(a, b, c)
    },
    {
        title: "Sum from 1 to n",
        description: "Add all integers from 1 through n.",
        fields: [{ key: "n", label: "n", placeholder: "10", min: 0, max: 1000000 }],
        run: ({ n }) => `Sum: ${sumNumbers(n)}`
    },
    {
        title: "Multiplication table",
        description: "Show the first ten multiples of a number.",
        fields: [{ key: "num", label: "Number", placeholder: "3" }],
        run: ({ num }) => multiplicationTable(num)
    },
    {
        title: "Count digits",
        description: "Count the digits in an integer.",
        fields: [{ key: "num", label: "Number", placeholder: "5082" }],
        run: ({ num }) => `Digits: ${countDigits(num)}`
    },
    {
        title: "Reverse a number",
        description: "Reverse the digits of an integer.",
        fields: [{ key: "num", label: "Number", placeholder: "12040" }],
        run: ({ num }) => `Reversed: ${reverseNumber(num)}`
    },
    {
        title: "Number palindrome",
        description: "Check whether the digits read the same backward.",
        fields: [{ key: "num", label: "Number", placeholder: "1221", min: 0 }],
        run: ({ num }) => isPalindrome(num)
    },
    {
        title: "Factorial",
        description: "Multiply every integer from 1 through n.",
        fields: [{ key: "num", label: "n (0–170)", placeholder: "5", min: 0, max: 170 }],
        run: ({ num }) => `${num}! = ${factorial(num)}`
    },
    {
        title: "Fibonacci sequence",
        description: "Show the first n terms, starting at zero.",
        fields: [{ key: "num", label: "Terms", placeholder: "7", min: 0, max: 100 }],
        run: ({ num }) => fibonacci(num)
    },
    {
        title: "Prime check",
        description: "Check whether an integer is prime.",
        fields: [{ key: "num", label: "Number", placeholder: "17", min: 0 }],
        run: ({ num }) => isPrime(num)
    },
    {
        title: "Primes in a range",
        description: "List prime numbers between the start and end.",
        fields: [
            { key: "start", label: "Start", placeholder: "10" },
            { key: "end", label: "End", placeholder: "30" }
        ],
        run: ({ start, end }) => printPrimes(start, end)
    },
    {
        title: "Greatest common divisor",
        description: "Find the greatest common divisor of two integers.",
        fields: [
            { key: "a", label: "A", placeholder: "18" },
            { key: "b", label: "B", placeholder: "24" }
        ],
        run: ({ a, b }) => `GCD: ${findGCD(a, b)}`
    },
    {
        title: "Armstrong number",
        description: "Check whether the digits raised to their count sum to the number.",
        fields: [{ key: "num", label: "Number", placeholder: "153", min: 0 }],
        run: ({ num }) => isArmstrong(num)
    },
    {
        title: "Count vowels",
        description: "Count a, e, i, o and u in the text.",
        fields: [{ key: "text", label: "Text", placeholder: "JavaScript is fun", type: "text" }],
        run: ({ text }) => `Vowels: ${countVowels(text)}`
    },
    {
        title: "Reverse a string",
        description: "Read the text from its last character to its first.",
        fields: [{ key: "text", label: "Text", placeholder: "Hello World", type: "text" }],
        run: ({ text }) => reverseString(text)
    },
    {
        title: "String palindrome",
        description: "Check text ignoring spaces, punctuation and letter case.",
        fields: [{ key: "text", label: "Text", placeholder: "Never odd or even", type: "text" }],
        run: ({ text }) => isStringPalindrome(text)
    },
    {
        title: "Largest in a list",
        description: "Enter comma-separated numbers to find the largest.",
        fields: [{ key: "values", label: "Numbers", placeholder: "5, 4, 19, 2", type: "text" }],
        run: ({ values }) => `Largest: ${largestElement(parseNumberList(values))}`
    },
    {
        title: "Remove duplicates",
        description: "Keep the first occurrence of each comma-separated number.",
        fields: [{ key: "values", label: "Numbers", placeholder: "7, 4, 2, 4, 5", type: "text" }],
        run: ({ values }) => removeDuplicates(parseNumberList(values)).join(", ")
    },
    {
        title: "Character frequency",
        description: "Count how many times each character appears.",
        fields: [{ key: "text", label: "Text", placeholder: "banana", type: "text" }],
        run: ({ text }) => JSON.stringify(charfrequency(text))
    }
];

function renderExercises() {
    const cards = document.getElementById("exercise-cards");

    exercises.forEach((exercise, index) => {
        const card = document.createElement("article");
        card.className = "example";

        const number = document.createElement("span");
        number.className = "example-number";
        number.textContent = `${String(index + 1).padStart(2, "0")} / JAVASCRIPT`;

        const title = document.createElement("h2");
        title.textContent = exercise.title;
        const description = document.createElement("span");
        description.className = "example-description";
        description.textContent = exercise.description;

        const form = document.createElement("form");
        form.className = "exercise-form";
        form.id = `exercise-form-${index + 1}`;
        const fieldGrid = document.createElement("div");
        fieldGrid.className = "field-grid";

        exercise.fields.forEach((field) => {
            const label = document.createElement("label");
            const inputId = `exercise-${index + 1}-${field.key}`;
            label.htmlFor = inputId;
            label.textContent = field.label;

            const input = document.createElement("input");
            input.id = inputId;
            input.name = field.key;
            input.type = field.type || "number";
            input.placeholder = field.placeholder;
            input.required = true;
            if (input.type === "number") {
                input.step = "1";
                if (field.min !== undefined) input.min = String(field.min);
                if (field.max !== undefined) input.max = String(field.max);
            }
            label.append(input);
            fieldGrid.append(label);
        });

        form.append(fieldGrid);
        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Run exercise";
        form.append(button);

        const result = document.createElement("p");
        result.className = "result";
        result.setAttribute("aria-live", "polite");
        result.textContent = "Enter values to begin.";

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!form.reportValidity()) return;

            const values = {};
            exercise.fields.forEach((field) => {
                const input = form.elements.namedItem(field.key);
                values[field.key] = input.type === "number" ? Number(input.value) : input.value;
            });

            try {
                result.textContent = exercise.run(values);
                result.classList.add("has-result");
            } catch (error) {
                result.textContent = error.message;
                result.classList.remove("has-result");
            }
        });

        card.append(number, title, description, form, result);
        cards.append(card);
    });
}

renderExercises();
