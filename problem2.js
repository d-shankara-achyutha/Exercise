//Problem 2
//Game Battle

function damage(attack, shield) {
    const netDamage = attack- shield;
    return netDamage > 0 ? netDamage: 0;
}

function healthLeft(health, attack, shield) {
    const damageTaken = damage(attack, shield);
    const remainingHealth = health - damageTaken;
    return remainingHealth > 0 ? remainingHealth: 0;
}

function battleResult(health, attack, shield) {
    const remainingHealth = healthLeft(health, attack, shield);
    if(remainingHealth === 0) {
        return "Player Defeated"
    } else if (remainingHealth <= 30) {
        return "Low Health:${remainingHealth}";
    } else {
        return "Still Fighting: ${remainingHealth}";
    }
}

console.log(battleResult(100, 50),20);
console.log(battleResult(100, 90,15));
console.log(battleResult(100, 10, 30));