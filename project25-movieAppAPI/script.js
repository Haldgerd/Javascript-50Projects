// YOLO!

let a = true;
let shop = 1;

//this promise or more accurate executor code between curly braces is A LINK between executor code and consuming functions which recive result from the promise - can be an error.
let promise = new Promise((resolve, reject) => {
  // Promise constructor - promise is an object => resolve and reject as arguments are callback functions - they do something
  if (!a) {
    reject(new Error("This is an error"));// creates error object which consists of message : This is an error.
  } else {
    resolve("Open");
  }
});


//this are the "fans" waiting on a promise :)
// consuming functions => taking results from promise constructor are registered using .then, .catch, .finally methods (functions!).
promise.then(
  result => console.log(`This is the ${result}.`),
  error => console.log(error.message) // error refers to error object
).then( // both last .then and .finally run imediatly, while upper .then takes it's time to resolve the task - if it took less to time to complete then lower .then => then it's result would have been displayed first.
  console.log("This is messy AF")
)
.finally( // runs prior to returning result from either resolve or reject.
  console.log("This runs anyway.")
);




// without assignment and  without separate "consumers" call. It's all wrapped together.
new Promise((resolve, reject) => {
  // Promise constructor - promise is an object => resolve and reject as arguments are callback functions - they do something
  setTimeout( () => {
    if (shop !== 1) {
    reject(new Error("Shop is CLOSED!"));// creates error object which consists of message : This is an error. We're passing in a message!
  } else {
    resolve(2);
  }}, 2000)
}) 
  .then(
    result => console.log(result)
  )
  .catch(
    error => console.log(error.message))
  .finally (() => console.log("IS THIS A JOKE"));

// THIRD method is to place promise inside a function a return it => return new Promise ...
// calling results from promise in this case is equal to the first methos in this file.





// console.log("----------------------------");
// // testing from https://javascript.info/promise-chaining first chaining example.
// The whole thing WORKS, because every call to a .then returns a new promise, so that we can call the next .then on it.

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)  

// }).then((result) => { // (**)  // YOU NEED TO PLACE RESULT as an ARGUMENT INSIDE A CALLBACK FUNCTION!!!!!

//   console.log(result); // 1
//   return result * 2;

// }).then((result) => { // (***)

//   console.log(result); // 2
//   return result * 2;

// }).then((result) => {

//   console.log(result); // 4
//   return result * 2;

// }).catch (
//   error => console.log(error.name, error.message)
// );