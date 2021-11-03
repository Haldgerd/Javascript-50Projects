import fetch from "node-fetch"; // raised an error

// fetching from API using promises ERROR!
// node does not implement fetch API natively, you need to INSTALL FETCH package it in your Node application like this

// npm install node-fetch

// then put the line below at the top of the files where you are using the fetch API:

// import fetch from "node-fetch";
// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// For importing it to other files or app.js even, you can also change the extension from .js to mjs that will tell nodejs to treat as a esmodule.


// SOLUTION: Fetch 3.0 is designed for using esmodules instead of commonjs. Therefore you have to make sure you import it into a module.

// For example: to import it to app.js : Add "type":"module" in your package.json and then import it. Otherwise downgrade fetch to use an older version that supports commonjs like 2.something.


// method one: fetch inside a regular function.
const apiURL = "https://api.jokes.one/jod";

// const getData = () => fetch(apiURL);

// // fetch method one
// getData()
//   .then(response => response.json())
//   .then(data => console.log(data.contents.jokes[0].category))
//   .catch(error => console.log(error.name, error.message));


// async function using await keyword. Using fetch.
// NOTE: unhandled rejections will be depricated and node will exit program with 0 code - promises must handle rejections!!! else error occurs.
async function jokes(url) {

  let response = await fetch(url); // the response keyword is very important , it musr be used when checking status, status code ok, and for parsing the response as JSON.

  if (response.ok) {
    let data = await response.json(); //parsed response is stored in data variable.

    console.log(data);

  } else {
    throw new Error("Something went wrong.");
  }
}

//calling jokes, catching errors.
jokes(apiURL)
  .catch(error => console.log(error.name, error.message));

console.log("Will this run first?");

// fetch() is modern and versitile method NOT supported by old browsers.
// basic syntax is let promise = fetch(url, [options]);
// options: optional parameters: headers, methods etc. Without this, fetch is a simple GET request.


// Await and fetch used outside of async function - WORKS!

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

console.log(commits[0].author.login);