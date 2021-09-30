const checkboxes = document.querySelectorAll("input[type=checkbox]");

const passwordLength = document.querySelector("input[type=number]");

const lowercaseCheckbox = document.querySelector(".lowercase__checkbox");

const passwordOutput = document.querySelector(".password__generator--output");

const clipboard = document.querySelector(".password__icon--clipboard");

const generatePassword = document.querySelector(".password__generator--btn");

const functionClassBinding = {
  uppercase__checkbox: getRandomUppercase,
  lowercase__checkbox: getRandomLowercase,
  number__checkbox: getRandomNumber,
  symbol__checkbox: getRandomSymbol,
}

let password = [];
// returns array of all the object keys!!! YAY
let objectKeys = Object.keys(functionClassBinding);


// set default value of number input and by default check all the checboxes.
passwordLength.value = "5";
checkboxes.forEach(checkbox => checkbox.checked = true);


// MAIN FUNCTIONALITY
generatePassword.addEventListener("click", () => {

  let arrayOfCheckboxes = getCheckboxes();

  // checking if password is displayed, delete it, reset everything.
  if (passwordOutput.innerHTML) {

    passwordOutput.innerHTML = "";
    password = [];
  }

  //  if there is a value passed to password length input
  if (passwordLength.value){

    for (let initial = 0; initial < passwordLength.value; initial++) {

      createPassword(arrayOfCheckboxes);
     
      // let symbol = functionClassBinding[arrayOfCheckboxes[Math.floor(Math.random() * arrayOfCheckboxes.length)]]();

      // password.push(symbol);
    }
  } else if (typeof passwordLength !== "number" || !passwordLength){
    // if there's no value of invalid value, alert the user.
    alert("Please enter a valid integer value.");
  } 

  //  output the password
  passwordOutput.textContent = password.join("");
});


//CLIPBOARD FUNCTIONALITY
clipboard.addEventListener("click", () => {

  alert("Copied to clipboard.");
  navigator.clipboard.writeText(passwordOutput.innerHTML);
// //  this doesn't work on IE. Might need to find some fallback code for this.
// https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
});



// FUNCTIONS
function createPassword(array) {

   // randomly chose between given functions in range of password length input. Functions return a symbol-single item.
   let symbol = functionClassBinding[array[Math.floor(Math.random() * array.length)]]();
   
   password.push(symbol);
}


function getCheckboxes () {

  let checkedCheckboxes = [];

  checkboxes.forEach(checkbox => {  
    
    if (checkbox.checked) {

      checkedCheckboxes.push(checkbox.classList[1]);
    }
  });

  if (!checkedCheckboxes.length) {
    lowercaseCheckbox.checked = true;
    // lowercaseCheckbox.disabled = true;

    checkedCheckboxes.push(objectKeys[1]);
    console.log(checkedCheckboxes);
  }

  return checkedCheckboxes;
}


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

