const dragableImage = document.querySelector(".image__container--active");

const imageContainers = document.querySelectorAll(".image__container");


imageContainers.forEach(container => {

  container.addEventListener("drag", ()=> {
    dragableImage.style.opacity = "0.4";
    dragableImage.style.border = "3px solid white";
  });

  container.addEventListener("dragend", ()=> {
    dragableImage.style.opacity = "1";
    dragableImage.style.border = "";
  });

  container.addEventListener("dragenter", (e) => {

  // highlight potential drop target when the draggable element enters it
    e.currentTarget.classList.add("hover--active");
  }); 

  container.addEventListener("dragleave", (e) => {

    // reset background of potential drop target when the draggable element leaves itt
      e.currentTarget.classList.remove("hover--active");
    }); 


  container.addEventListener("drop", (e) => {
  // prevent default action (open as link for some elements)
    e.preventDefault();

    dragableImage.parentNode.removeChild(dragableImage);
    e.currentTarget.appendChild(dragableImage);
  });
  
});