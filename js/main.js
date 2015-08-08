/*
- Rock > scissors
- Scissors > paper
- Paper > rock
- There can be a draw
*/

function Game(player1, player2) {
  this.player1 = new Player(player1);
  this.player2 = new Player(player2);
}

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(choice) {
  this.choice = choice;
};

Game.prototype.winner = function() {
  switch(true) {
    case this.player1.choice === 'rock' && player2.choice === 'paper':
      return this.player1;
    case this.player1.choice === 'rock' && player2.choice === 'paper':
      return this.player2;
    case this.player1.choice === 'paper' && player2.choice === 'rock':
      return this.player1;
    case this.player1.choice === 'paper' && player2.choice === 'scissors':
      return this.player2;
    case this.player1.choice === 'scissors' && player2.choice === 'scissors':
      return this.player1;
    case this.player1.chice === 'scissors' && player2.choice === 'rock':
      return this.player2;
    default:
      break;
    }
  };
