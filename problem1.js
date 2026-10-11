//Problem 1
//Cricket Strike Rate

function strikeRate (runs, balls) {
    return (runs/balls)*100
};

function playerType (runs, balls) {
    if (runs === undefined || balls === undefined) {
        return "Missing Arguments" ;
    }
    if (runs < 0 || balls <= 0) {
        return "Invalid Output"
    }
}

const rate = strikeRate(runs, balls);
if(rate >= 150) {
    return "Power Hitter"
} else if(rate >= 100) {
    return "Steady Batter"
} else {
    return "Slow Batter"
}

console.log(playerType(60,30));
console.log(playerType(20,40));
console.log(playerType(10,0));
console.log(playerType());