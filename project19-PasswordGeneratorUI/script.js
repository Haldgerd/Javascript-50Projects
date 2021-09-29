const checkboxes = document.querySelectorAll("input[type=checkbox]");

const passwordLength = document.querySelector("input[type=number]");


// console.log(getRandomLowercase());

// console.log(getRandomSymbol());

console.log(passwordLength.value);

checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    console.log(checkbox.classList);
    console.log("checked");
  }
});



// functions
function getRandomLowercase () {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUppercase() {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber () {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getRandomSymbol () {

  const symbols = "!?*#@-%&_";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

