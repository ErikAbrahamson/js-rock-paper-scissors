/*
- Rock > scissors
- Scissors > paper
- Paper > rock
- There can be a draw
*/

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(choice) {
  this.choice = choice;
};

Game.prototype.winner = function() {
  switch(true) {
    case this.player1.choice === 'rock' && this.player2.choice === 'scissors':
      return this.player1;
    case this.player1.choice === 'rock' && this.player2.choice === 'paper':
      return this.player2;
    case this.player1.choice === 'paper' && this.player2.choice === 'rock':
      return this.player1;
    case this.player1.choice === 'paper' && this.player2.choice === 'scissors':
      return this.player2;
    case this.player1.choice === 'scissors' && this.player2.choice === 'paper':
      return this.player1;
    case this.player1.chice === 'scissors' && this.player2.choice === 'rock':
      return this.player2;
    }
    if (this.player1.choice === this.player2.choice) {
      return null;
    }
  };

  module.exports = {
    Game: Game,
    Player: Player
  };
