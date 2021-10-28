let a = false;

let promise = new Promise((resolve, reject) => {
  // Promise constructor - promise is an object => resolve and reject as arguments are callback functions - they do something
  if (!a) {
    reject(new Error("This is an error"));// creates error object which consists of message : This is an error.
  } else {
    resolve("Open");
  }
});

promise.then(
  result => console.log(`This is the ${result}.`),
  error => console.log(error.message) // error refers to error object
).finally( // runs prior to returning result from either resolve or reject.
  console.log("This runs anyway.")
);
