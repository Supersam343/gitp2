// deck of cards including suits and rank

class Deck{
    constructor() {
        this.deck = [];
        this.rank = [
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'jack',
            'queen',
            'king',
        ];
        this.suits = [
            "Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"
        ];
    }


// loop to iterate through a fresh deck of cards and select a new card to push to the deck 

 createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let o = 0; o < this.rank.length; o++) {
                let card = {
                    name: `${this.rank[o]} of ${this.suits[i]}` ,
                    value: o + 1
                    }
                 this.deck.push(card)
            }     
        }
   }

// shuffles the deck by starting at the end of the array and moving backwards, then it picks a random index from  
// "o" then swapping them with the the value at the current i index.

 shuffleDeck() {
    for(let i = this.deck.length - 1; i > 0; i--) {
        let o = Math.floor(Math.random()* (i + 1));

        [this.deck[i], this.deck[o]] = [this.deck[o], this.deck[i]];
    }
   }

// gives each player their respective deck in theory   
 dealDeck(players, shuffledDeck) {
    let hand1 = shuffledDeck.splice(0,26);
    for (let i = 0; i < hand1.length; i++){
        players[0].hands.push(hand1[i]);
    }

    let hand2 = shuffledDeck.splice(0,26);
    for(let i = 0; i < hand2.length;i++){
        players[1].hands.push(hand2[i]);
    }
 }

}










const deck = new Deck
deck.createDeck()
deck.shuffleDeck()
deck.dealDeck()
console.log(deck.deck)