class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    if(!cards) return undefined;

    let shuffleCards = [];

    this.cards.forEach((card) => {
      let randomIndex = Math.floor(Math.random() * shuffledCards.length);
      shuffledCards.splice(randomIndex, 0, card);
    });

    this.cards = shuffledCards;
    
    // this.cards.sort(function (a, b) {
    //   return Math.random() - 0.5
    // })
    };
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  checkIfFinished() {
    if(this.pairsGuessed === (this.cards.length / 2)) {
      return true
    }else {
      return false
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;