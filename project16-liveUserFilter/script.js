const labels = document.querySelectorAll("label");

console.log(labels);

labels.forEach(label => {
  console.log(label.innerText.split(""));
});