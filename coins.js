/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (dolars) {

    var dolarsToPennies = (dolars * 100);

    // Initialize a JavaScript object to hold the coins
    var coinPurse = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    while(dolarsToPennies >= 1){//While there are pennies left, sort them out into the coin purse.
        if(dolarsToPennies >= 25){
            coinPurse.quarters ++;
            dolarsToPennies -= 25;
        } else if(dolarsToPennies >= 10){
            coinPurse.dimes ++;
            dolarsToPennies -= 10;
        } else if(dolarsToPennies >= 5){
            coinPurse.nickels ++;
            dolarsToPennies -= 5;
        } else if(dolarsToPennies >= 1){
            coinPurse.pennies ++;
            dolarsToPennies -= 1;
        } 
    }

    return coinPurse;
  }

  var dolarAmount = prompt("Enter a dollar amount to convert:");
  while(isNaN(dolarAmount)){
      dolarAmount = prompt("Enter a dollar amount to convert:");
  }
  
  var coins = coinCounter(dolarAmount);
  console.log("Quarters: " + coins.quarters + " Dimes: " + coins.dimes + " Nickels: " + coins.nickels + " Pennies: " + coins.pennies);