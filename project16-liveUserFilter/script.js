const labels = document.querySelectorAll("label");


labels.forEach(label => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join("");
});

console.log(labels
  );
// const spans = document.querySelectorAll("span");
// console.log(spans);

// spans[0].style.transform = "translateY(-130%)";