// Create a count counter that takes X amount of money($4.99) and determines the exact amount of change needed in quarters, dimes, and pennies

// Recursive coincounter:

const changeCounter = (money) => {
  if (isNaN(money)){
    return "Enter digits, dummy.";
  }
  if(money >= .25) {
    quarters = Math.floor(money / .25);
    console.log(quarters);
    return (`Quarters: ${quarters}, ` + changeCounter(money - (0.25 * quarters)));
  }
  if(money >= .10) {
    dimes = Math.floor(money / .10);
    console.log(dimes);
    return (`Dimes: ${dimes}, ` + changeCounter(money - (0.10 * dimes)));
  }
  if(money >= .05) {
    nickels = Math.floor(money / .05);
    console.log(nickels);
    return (`Nickels: ${nickels}, ` + changeCounter(money - (0.05 * nickels)));
  }
  else if (money > 0) {
    pennies = Math.round(money / 0.01);
    console.log(pennies);
    return (`Pennies: ${pennies}`);
  }
}

// changeCounter(2.05);


// Closure coinCounter:

function closureCounter(cValue){
  let coin = cValue;
  return function(inputMoney) {
    return Math.floor(inputMoney / coin)
  }
}

const quarterCount = closureCounter(.25);
const dimeCount = closureCounter(.10);
const nickelCount = closureCounter(.05);
const pennyCount = closureCounter(.01);

// Remy's UI Logic

window.onload = () => {
  let form = document.querySelector("form");
  

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const moneyz = document.querySelector("input#totalAmt").value;
    // let theSolution = new Solution(moneyz); 
    // theSolution.moneyz();
  
    document.querySelector("span#solution").innerHTML = changeCounter(moneyz);
  });
}