const containers = document.querySelectorAll(".container");

// console.log(containers[2]);
// console.log(containers[3].getBoundingClientRect().top);
// console.log(window.innerHeight);


window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes () {
  const windowHeight = window.innerHeight / 5 * 4;

  containers.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < windowHeight) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
}


// window.addEventListener("scroll", () => {
//   const windowHeight = window.innerHeight / 5 * 4;

//   containers.forEach(container => {
//     const containerTop = container.getBoundingClientRect().top;

//     console.log(containerTop);

//     if (containerTop < windowHeight) {
//       container.classList.add("show");
//     } else {
//       container.classList.remove("show");
//     }
//   });

// });

