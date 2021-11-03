// syntax that allows us to work with prmises in a more elegant fashion.

let url = "http://something-unknown.si";


// async keyword placed in front of a function means: FUNCTION ALWAYS RETURNS A PROMISE.
async function testing () {

  const value = true;

  if (value) {
    return "This is async function.";
  } 

  throw Error("There is something wrong with value.");
  // return new Error("This is a false answer."); doesn't exactly work as I thought
  
} 

testing()
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.name));

