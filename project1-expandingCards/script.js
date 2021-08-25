const expandingCards = document.querySelectorAll(".expanding__card");
//console.log(expandingCards);

// on click expand the card and show it's title.
expandingCards.forEach(expandingCard => {
  expandingCard.addEventListener("click", (e) => {
    let currentCard = e.currentTarget;
    //console.log(currentCard);
    currentCard.classList.add("section--expand");
    let cardTitle = currentCard.querySelector("h1");

    cardTitle.classList.add("h1--visible");

    // inner loop, that regulates closing the already open expanding card so only one card at the time can be expanded.
    expandingCards.forEach(expandingCard => {
      expandingCard.addEventListener("click", (e) => {
        let newCard = e.currentTarget;
        let newCardTitle = newCard.querySelector("h1");

        if (currentCard !== newCard) {
          currentCard.classList.remove("section--expand");
          cardTitle.classList.remove("h1--visible");

          newCard.classList.add("section--expand");
          newCardTitle.classList.add("h1--visible");
        }
      });
    });
  });
});