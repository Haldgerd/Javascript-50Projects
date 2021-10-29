import fetch from "node-fetch"; // raised an error
// SOLUTION: Fetch 3.0 is designed for using esmodules instead of commonjs. Therefore you have to make sure you import it into a module.

// For example: to import it to app.js : Add "type":"module" in your package.json and then import it. Otherwise downgrade fetch to use an older version that supports commonjs like 2.something.

// For importing it to other files or app.js even, you can also change the extension from .js to mjs that will tell nodejs to treat as a esmodule.



// fetching from API using promises
// node does not implement fetch API natively, you need to INSTALL FETCH package it in your Node application like this

// npm install node-fetch

// then put the line below at the top of the files where you are using the fetch API:

// import fetch from "node-fetch";
// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined


const apiURL = "https://api.jokes.one/jod";

const getData = () => fetch(apiURL);

// fetch method one
getData()
  .then(response => response.json())
  .then(data => console.log(data.contents.jokes[0].category))
  .catch(error => console.log(error.name, error.message));