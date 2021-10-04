const users = [
  {
    image: "./image/circle-cropped(1).png",
    name: "Johanna Strauss",
    position: "UI/UX designer",
    location: "Berlin, Germany",
  },
  {
    image: "./image/circle-cropped.png",
    name: "Freya Olmo",
    position: "People Manager",
    location: "Malmo, Sweden",
  },
  {
    image: "./image/circle-cropped(2).png",
    name: "Khan Jo",
    position: "Front end developer",
    location: "Syndey, Australia",
  },
  {
    image: "./image/screen_lornas.jpg",
    name: "Sashi Paravani",
    position: "Junior DevOp",
    location: "Singapur, India",
  },
  {
    image: "./image/burn_lorna.jpeg",
    name: "Rachel Gray",
    position: "Back end developer",
    location: "London, UK",
  },
   {
    image: "./image/cyberpunk.jpeg",
    name: "Nika Vidkovic",
    position: "graphic designer",
    location: "Beograd, Serbia",
  },
  {
    image: "./image/nintendo.jpeg",
    name: "Jeff Gregory",
    position: "SEO specialist",
    location: "Tallin, Estonia",
  },
  {
    image: "./image/circle-cropped(3).png",
    name: "Monica Gerarro",
    position: "Project Manager",
    location: "Verona, Italy",
  },
]

const userDisplay = document.querySelector(".search__content");

const searchInput = document.querySelector("input");

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  // createUserFeed(users);

  users.forEach(user => {

    createElement(user);
  });
});



function createElement(user) {

  counter++;

  const divisor = document.createElement("div");

  divisor.className = "search__users"

  divisor.innerHTML = `<img src=${user.image} alt="" class="user__img" />
  <div class="user__information">
    <h2 class="user__name">0${counter}>> ${user.name}</h2>
    <p class="user__position">${user.position}</p>
    <p class="user__location">${user.location}</p>
  </div>`

  userDisplay.appendChild(divisor);
}




// variation - method 2 of displaying content dynamicaly
// function createUserFeed(items) {

//   let counter = 0;

//   let userElements = items.map(item => {

//     counter++;

//     // console.log(item);
//     // console.log(item.name);

    // return `
    //   <div class="search__users">
    //     <img src=${item.image} alt="" class="user__img" />
    //     <div class="user__information">
    //       <h2 class="user__name">0${counter}>> ${item.name}</h2>
    //       <p class="user__position">${item.position}</p>
    //       <p class="user__location">${item.location}</p>
    //     </div>
    //   </div>
    // `;
//   });

//   userElements = userElements.join("");

//   userDisplay.innerHTML = userElements;
// }