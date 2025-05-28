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
  const deck = this.deck;
  for (let i = deck.length - 1; i > 0; i--) {
    const o = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[o]] = [deck[o], deck[i]];
  }
}

}

// class for the game 

class Game {
    constructor() {
        this.player1 = {
            name: 'player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'player 2',
            score: 0,
            hand: []
        }
    }
    
 playGame() {
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

     while(deck.deck.length !== 0) {

        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
     }

     for (let i= 0; i < this.player1.hand.length; i++) {
        if(this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score ++
            console.log(`
            Player1 card: ${this.player1.hand[i].name}
            Player2 card: ${this.player2.hand[i].name}
            player one experiences a win!
            score: 
            Player1: ${this.player1.score} player2: ${this.player2.score}`)
     } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player1.score ++
            console.log(`
            Player1 card: ${this.player1.hand[i].name}
            Player2 card: ${this.player2.hand[i].name}
            player two experiences a win!
            score: 
            Player1: ${this.player1.score} player2: ${this.player2.score}`)
     } else {
         console.log(`
            Player1 card: ${this.player1.hand[i].name}
            Player2 card: ${this.player2.hand[i].name}
            tie no one experiences a win, womp womp womp
            score: 
            Player1: ${this.player1.score} player2: ${this.player2.score}`)
      }
    } 
     if (this.player1.score > this.player2.score) {
        console.log('player1 wins the chicken dinner!!!')
     } else if (this.player2.score > this.player1.score) {
        console.log('player2 wins the chicken dinner!!!')
     } else {
        console.log('wow a fluke! it was a tie!')
     }
  }


}


const game = new Game
game.playGame()

// console.log(deck.deck)