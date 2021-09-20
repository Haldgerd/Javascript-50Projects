const crew = [
  {
    image: "./images/ash.jpg",
    name: "Ash",
    description: " I admire its purity. A survivor. Unclouded by conscience, remorse, or delusions of morality.  You still don't understand what you're dealing with do you? Perfect organism. It's structural perfection is matched only by its hostility.",
    registration: "(23199 (609))"
  },
  {
    image: "./images/ripley.jpeg",
    name: "Ripley",
    description: "Final report, the commercial star-ship Nostromo. Third officer reporting. The other members of the crew—Kane, Lambert, Parker, Brett, Ash, and Captain Dallas—are dead. Cargo and ship destroyed. I should reach the frontier within six weeks. With a little luck the network will pick me up.",
    registration: "(38403 (555))"
  },
  {
    image: "./images/dallas.jpg",
    name: "Dallas",
    description: "I went out five times with another science officer. They replaced him two days before we left Thedus with Ash. Hm? Well, I don't trust anybody. ",
    registration: "(08677 (756))"
  },
  {
    image: "./images/lambert.jpg",
    name: "Lambert",
    description: " What? And end up like the others? Oh, no. You're out of your mind! Yes! I say that we abandon this ship! We get the shuttle and just get the hell out of here! We take our chances and... just hope that somebody will pick us up! ",
    registration: "(89099 (432))"
  },
]

const image = document.querySelector("img");

const paragraphs = document.querySelectorAll("p");

const loader = document.querySelector(".progress__bar__container");

let timeout = 5000; //1000ms or 1s;

let start = 0;

console.log(paragraphs);

window.addEventListener("DOMContentLoaded", getNewReview);

function getNewReview () {
  
  if (start === crew.length) {
    start = 0;
  }

  if (start < crew.length) {

    image.src = crew[start].image;

    paragraphs[0].innerHTML = "DESCRIPTION:<br>" + crew[start].description;

    paragraphs[1].innerHTML = "NAME: " + crew[start].name;

    paragraphs[2].innerHTML = "REG: " + crew[start].registration;

    start++;
    setTimeout(getNewReview, timeout);
    clearTimeout(getNewReview);
  }
}