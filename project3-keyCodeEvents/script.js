const keyEventWindows = document.querySelectorAll(".key__event__window");

// console.log(keyEventWindows);

window.addEventListener("keydown", (e) => {

  let key = e.key;

  let uniCode = e.keyCode;

  let code = e.code;

  let keyValues = [key, uniCode, code]
  // console.log(key);
  // console.log(uniCode);
  // console.log(code);

  keyEventWindows.forEach((keyWindow, index) => {

    keyWindow.innerHTML = keyValues[index];
  });
});
  
  