


console.log(getRandomLowercase());

console.log(getRandomSymbol());


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

