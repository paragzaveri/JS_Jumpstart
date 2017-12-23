



/*
Fullstack Jack Card Game


Steve and Josh are bored and want to play something. They don't want to think too much, so they come up with a simple game:

Write a function called **fullstackJack** and figure out who is going to win.

FullstackJack Rules:

- Each player is dealt the same number of cards
- They flip the card at the top of the deck
- The card with the highest value wins the round and the winning player receives a point
- The two cards used are discarded
- The players continue playing until there are no remaining cards
- The player with the most points at the end wins

Example

***Representing Cards:*** A players hand is stored in an array. Each index is a card value.  The card rank is as follows (from lowest to highest):`'2','3','4','5','6','7','8','9','T','J','Q','K','A'`.  Player hands are passed to the `fullstackJack` function as arguments, as in the examples below:


```
// player1Hand = ['A', '7', '8'];
// player2Hand = ['K', '5', '9'];
fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// --> returns "Player 1 wins 2 to 1!"

- Player1 is dealt ['A','7','8']
- Player2 is dealt  ['K','5','9']
- In first round, Ace beats King and Player1 gets one point.
- In second round, 7 beats 5 and Player1 gets his second point.
- In third round, 9 beats 8 and Player2 gets one point.
- You should return "Player1 wins 2 to 1!"

```

```
fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// --> returns "Tie!"
```



*/


// Write Code Below

function convertDeck(deck){
	for (var i = 0; i < deck.length; i++){
		if (deck[i] === 'J'){
			deck[i] = 11;
		} else if (deck[i] === 'Q') {
			deck[i] = 12;
		} else if (deck[i] === 'K') {
			deck[i] = 13;
		} else if (deck[i] === 'A') {
			deck[i] = 14;
		}
	}
	return deck;
}

function fullstackJack(deck1, deck2){
	var playerScore1 = 0, playerScore2 = 0;
	convertDeck(deck1);
	convertDeck(deck2);
	for (var i = 0; i < deck1.length; i++){
		if (deck1[i] > deck2[i]) {
			playerScore1++;
		} else if (deck1[1] < deck2[i]){
			playerScore2++;
		}
	}
	if (playerScore1 > playerScore2){
		return "Player 1 wins " + playerScore1 + " to " + playerScore2 + "!";
	} else if (playerScore2 > playerScore1){
		return "Player 2 wins " + playerScore2 + " to " + playerScore1 + "!";
	} else {
		return "Tie!";
	}
}


console.log(fullstackJack(['A', '7', '8'], ['K', '5', '9']));

console.log(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']));






















































































































































































// describe('fullstackJack', function(){
// 	it('stackJack is a function', function(){
// 		expect(typeof fullstackJack).toEqual('function');
// 	});

// 	it('stackJack returns a string value', function(){
// 		expect(typeof fullstackJack(["A"], ["K"]) === 'string').toEqual(true);
// 	});

// 	it('stackJack indicates which player wins', function(){
// 		expect(fullstackJack(['A', '7'], ['K', '5'])).toEqual('Player 1 wins 2 to 0!');
//     expect(fullstackJack(['K', '5'], ['A', '7'])).toEqual('Player 2 wins 2 to 0!');
// 	});

// 	it('stackJack indicates when both players "tie"', function(){
// 		expect(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])).toEqual("Tie!");	
// 	});

// });