const checkboxes = document.querySelectorAll(".checkbox__input");


let checkedCheckboxes = [];

// reset checkboxes upon reloading the page (could use html autocomplete="off"  attr). TODO

checkboxes.forEach(checkbox => checkbox.addEventListener("change", (e) => {
  
  //if checkbox is unchecked
  if (!checkbox.checked) {

    console.log("been here");
    const indexOfElement = checkedCheckboxes.indexOf
    (e.currentTarget.id);

    console.log(indexOfElement);

    // 
    checkedCheckboxes.splice(indexOfElement, 1);
    console.log("changed array");
    console.log(checkedCheckboxes);
  } 

  //if checkbox is checked
  if (e.currentTarget.checked) {
    checkedCheckboxes.push(e.currentTarget.id);
  }

  // if there are all three item id's in the array.
  if (checkedCheckboxes.length === 3) {

    console.log("you can't have all three");

    // unchecks the prior to last checked checkbox.
    document.querySelector(`#${checkedCheckboxes[1]}`).checked = false;
    
    //remove prior to last item from array
    checkedCheckboxes.splice(1, 1);
  }

  console.log(checkedCheckboxes);
}));
 
