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

window.addEventListener("DOMContentLoaded", () => {
  createUserFeed(users);
});



function createUserFeed(items) {
  let userElements = items.map(item => {
    console.log(item);
    console.log(item.name);

    return `
      <div class="search__users">
        <img src=${item.image} alt="" class="user__img" />
        <div class="user__information">
          <h2 class="user__name">${item.name}</h2>
          <p class="user__position">${item.position}</p>
          <p class="user__location">${item.location}</p>
        </div>
      </div>
    `;
  });

  userElements = userElements.join("");
  userDisplay.innerHTML = userElements;

}