let humanAge = document.getElementById('humanAge');
let dogAge = document.getElementById('dogAge');

function solve() {
    const myAge = humanAge.value;
    var earlyYears = 2;
    earlyYears *= 10.5;
    myAge -= 2;
    var laterYears = myAge - 2;
    laterYears *= 4;
    dogAge.textContent = Math.floor((earlyYears + laterYears) * 45 / 9);
}
