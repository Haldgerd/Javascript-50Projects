const checkboxes = document.querySelectorAll("input[type=checkbox]");

const passwordLength = document.querySelector("input[type=number]");

const passwordOutput = document.querySelector(".password__generator--output");

const clipboard = document.querySelector(".password__icon--clipboard");

const generatePassword = document.querySelector(".password__generator--btn");

const allFunctions = [getRandomLowercase, getRandomUppercase, getRandomSymbol, getRandomNumber];

let password = [];



generatePassword.addEventListener("click", () => {

  if (passwordOutput.innerHTML) {

    passwordOutput.innerHTML = "";
    password = [];
  }

  console.log("generating password!");

  getCheckboxes();

  if (passwordLength.value){

    for (let initial = 0; initial < passwordLength.value; initial++) {

      let symbol = allFunctions[Math.floor(Math.random() * allFunctions.length)]();

      password.push(symbol);
    }

    password = password.join(""); 

  } else if (typeof passwordLength !== "number" || !passwordLength){

    alert("Please enter a valid integer value.");
  }

  // console.log(password);

  passwordOutput.textContent = password;

});


clipboard.addEventListener("click", () => {

  alert("Copied to clipboard.");

 navigator.clipboard.writeText(passwordOutput.innerHTML);
// //  this doesn't work on IE. Might need to find some fallback code for this.
// https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
});



// functions
function getCheckboxes () {

  checkboxes.forEach(checkbox => {

    if (checkbox.checked) {

      console.log(checkbox.classList);
      // console.log("checked");
    }
  });
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

