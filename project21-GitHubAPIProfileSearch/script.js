
//  created local server for fun.
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Are you serious');
// could just display a page.
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   console.log("I don't feel smart. Yet.");
// });


// using axios to fetch data from github API
const rootURL = "https://api.github.com/users/";

const userDisplay = document.querySelector(".github__container--right");

const errorText = document.querySelector(".error__text");

const userForm = document.querySelector("form");

const userInput = document.querySelector("input");



userForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  // prevents sending data to a file.

  const user = userInput.value;

  if(user) {
  // function to search and display user
    getUser(user);
    
    userInput.value = "";

  } else {

    errorText.textContent = "No input given!";

    setInterval(() => {
      errorText.innerHTML = "";
    }, 1500);
  }
});


/**
 * Creates a html 'section' that will display relevant user data fetched from github API.
 * 
 * @param {*} user User data retrieved through axios.
 */
function createUserDisplay(user) {
  const userCard = `
  <div class="github__user--display">
    <img
      src="./images/circle-cropped(2).png"
      alt=""
      class="github__user__image"
    />
  <div class="github__user__information">
    <h3 class="github__user__name">Lorna Mally</h3>
    <p class="github__user__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
      repellendus neque perferendis sapiente earum? Odit sint hic ab ut.
    </p>
    <div class="github__user__reputation">
      <p class="githu__user__followers">FOLLOWERS:10</p>
      <p class="github__user__following">FOLLOWING:6</p>
      <p class="github__user__repositiories">REPOSITORIES:10</p>
    </div>
    <div class="repositiories__links">
      <a href="" class="repository">repo2</a
      ><a href="" class="repository">repo3</a
      ><a href="" class="repository">repo4</a>
    </div>
  </div>
  </div>`;


  userDisplay.innerHTML = userCard;
}


/**
 * Uses axios to parse and retrieve gihub user data (using common .then promise).
 * 
 * @param {*} username User input of gihub profile(user name) by choice.
 */
function getUser(username) {

  // make a request to github API to retrieve a username by choice.
  axios.get(rootURL + username)
    // handle success
    .then(res => createUserDisplay(res.data))
    // catch any errors
    .catch(err => console.log(err))
    // function that is always executed
    .then(console.log("you've done it. This executes faster because success handler needs to fetch the data."));
}

// could use async/await with try catch
// async function getUser(username) {
//   try {
//     const {data} = await axios(rootURL + username);

//     console.log(data);
//   } catch(err) {
//     console.log(err);
//   }
// }