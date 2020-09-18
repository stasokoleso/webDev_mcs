alert("Blinks calc welcomes you!");

let totalCash = parseInt(prompt("Yo, nigga, how much cash you have?"));
let watchesCount = parseInt(prompt("How many watches you gonna buy?"));
let earringsCount = parseInt(prompt("How many earrings you gonna buy?"));

let watchesSum =
  watchesCount * parseInt(prompt("What's the price for watches? (per unit)"));
let earringsSum =
  earringsCount * parseInt(prompt("What's the price for earrings? (per unit)"));

let payCheck = watchesSum + earringsSum;

function decision() {
  if (totalCash > payCheck) {
    return (document.body.innerHTML = "Thank you for purchase!");
  } else {
    return (document.body.innerHTML = "Get more cash, nigga, and come back!");
  }
}

decision();
