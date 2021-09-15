const btns = document.querySelectorAll(".btn--large");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    // calculate where in viewport we click
    const viewportPositionTop = e.clientY;
    const viewportPositionLeft = e.clientX;

    //calculate exact position of button relative to viewport
    const btnPositionTop = btn.offsetTop;
    const btnPositionLeft = btn.offsetLeft;

    // console.log(btnPositionTop);
    // console.log(viewportPositionTop - btnPositionTop);

    let clickPosition = getPosition(viewportPositionTop, viewportPositionLeft, btnPositionTop, btnPositionLeft); //function returns array [top-y position, left-x position]

    //console.log(clickPosition);
    let test = createCircleEffect(clickPosition[0], clickPosition[1]);
    //console.log(test);
    
    //append circle effect to btn.
    e.target.appendChild(test);
  });
});


function getPosition(clientTop, clientLeft, btnTop, btnLeft) {
  /**
 * 
 * @param {number} y position of mouse click reletive to viewport
 * @param {number} x position of mouse click relative to viewport
 * @param {number} y position of button (from top)
 * @param {number} x position of button (from left)
 * @return {array} x and y position of a mouse click relative to button (inside button element).
 */

  // calculate position of mouse click relative to button (inside the button)
  let clickPositionTop = clientTop - btnTop;
  let clickPositionLeft = clientLeft - btnLeft;

  return [clickPositionTop, clickPositionLeft];
}


function createCircleEffect(positionTop, positionLeft) {
  /** 
  // Returns html element with class and it's position.
  //
  // @param {number}:  mouse click position on y axis
  // @param {number}: mouse click position on x axis
  // @return {element}: html element 
  */

  const circle = document.createElement("span");
  circle.classList.add("btn__effect--ripple");
  circle.style.top = `${positionTop}px`;
  circle.style.left = `${positionLeft}px`;

  return circle;
}