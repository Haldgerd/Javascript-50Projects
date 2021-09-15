const btns = document.querySelectorAll(".btn--large");


btns.forEach(btn => {

  btn.addEventListener("click", (e) => {


    // calculate where in viewport we click
    const viewportPositionTop = e.clientY;

    const viewportPositionLeft = e.clientX;


    //calculate exact position of button relative to viewport
    const btnPositionTop = btn.offsetTop;
  
    const btnPositionLeft = btn.offsetLeft;

    let clickPosition = getPosition(viewportPositionTop, viewportPositionLeft, btnPositionTop, btnPositionLeft);

    let circle = createCircle(clickPosition[0], clickPosition[1]);
  
    //append circle effect to btn.
    e.target.appendChild(circle);

    // remove circle element
    setTimeout(() => circle.remove(), 500);
  });
});

  /**
  * Return x and y positions of a mouse click relative to button.
 * 
 * @param {number} clientTop y position of mouse click reletive to viewport
 * @param {number} clientLeft x position of mouse click relative to viewport
 * @param {number} btnTop y position of button (from top)
 * @param {number} btnLeft x position of button (from left)
 * @return {array} x and y position of a mouse click relative to button (inside button element).
 */
function getPosition(clientTop, clientLeft, btnTop, btnLeft) {

  // calculate position of mouse click relative to button (inside the button)
  let clickPositionTop = clientTop - btnTop;

  let clickPositionLeft = clientLeft - btnLeft;

  return [clickPositionTop, clickPositionLeft];
}



  /** 
  * Returns html element with class and position.
  * 
  * @param {number} positionTop mouse click position on y axis
  * @param {number} positionLeft mouse click position on x axis
  * @return {element} html element 
  */
function createCircle(positionTop, positionLeft) {

  const circle = document.createElement("span");


  circle.classList.add("btn__effect--ripple");
  circle.style.top = `${positionTop}px`;
  circle.style.left = `${positionLeft}px`;

  return circle;
}
