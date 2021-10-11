const dragableImage = document.querySelector(".image__container--active");

const imageContainers = document.querySelectorAll(".image__container");


// event listeners for dragable target
dragableImage.addEventListener("dragstart", (e)=> {
  // actions on drag target
  dragableImage.style.opacity = "0.6";
  dragableImage.style.border = "3px solid white";

  setTimeout(() => dragableImage.className = "invisible", 0); 
});

dragableImage.addEventListener("dragend", ()=> {
  dragableImage.style.opacity = "";
  dragableImage.style.border = "";
  // setTimeout(() => dragableImage.classList.remove("drag--active"), 10);
  dragableImage.classList.add("image__container--active");
});



imageContainers.forEach(container => {
  // event listeners for dropzones.

  container.addEventListener("dragenter", (e) => {
  // e.preventDefault();

  // highlight potential drop target when the draggable element enters it
    e.currentTarget.classList.add("hover--active");
  }); 


  /* events fired on the drop targets */
  container.addEventListener("dragover", (e) => {
  // prevent default (default doesn't allow drop) to allow drop
    e.preventDefault();
  });

  container.addEventListener("dragleave", (e) => { 
    e.preventDefault();

    // reset background of potential drop target when the draggable element leaves itt
      e.currentTarget.classList.remove("hover--active");
    }); 


  container.addEventListener("drop", (e) => {
  // prevent default action (open as link for some elements)
    e.preventDefault;
   
    e.currentTarget.appendChild(dragableImage);

    e.currentTarget.classList.remove("hover--active");
  });

});