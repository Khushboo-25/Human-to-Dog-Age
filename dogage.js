let humanAge = document.getElementById('humanAge');
let dogAge = document.getElementById('dogAge');

function solve() {

    let myAge = humanAge.value;

    // The value saved to this variable will change...
    let earlyYears = 2;
    
    earlyYears *= 10.5;
    
    let laterYears = myAge - 2;
    
    // Number of dog years accounted for by your later years...
    laterYears *= 4;
    
    // console.log(earlyYears)
    // console.log(laterYears)
    
    // This really needs to be explained?
    let myAgeInDogYears = earlyYears + laterYears;
    dogAge.textContent = Math.floor(myAgeInDogYears);
}

