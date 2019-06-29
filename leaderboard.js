class LeaderBoard {
  constructor() {
    this.board = [];
    this.playersMap = {};
    this.scoresIdxMap = {};
  }
  
  add_score = (player_id, score) => {
    // playersMap stores playerID as key and a player object as value
    
    if (!this.playersMap.hasOwnProperty(player_id)) {
      this.playersMap[player_id] = new Player(player_id);
    } 
    
    const currPlayer = this.playersMap[player_id];
    currPlayer.addScore(score);
    this.addScoreToBoard(currPlayer.id);
    
    return currPlayer.average;
  };
  

  top = (num_players) => {
    const tops = [];
    
    for (let i = 0; i < num_players; i++) {
      tops.push(this.board[i][0]);
    }
    
    return tops;
  };
  
  reset = (player_id) => {
    this.playersMap[player_id].resetScores();
    this.addScoreToBoard(player_id);
  };

  addScoreToBoard(playerID) {
    let currPlayer = this.playersMap[playerID];
    let average = currPlayer.average;
    
    // first record
    if (!this.board.length) {
      this.board.push([playerID, average]);
      this.scoresIdxMap[playerID] = 0;
    } else {
      // check if player is on the board already, if yes, remove its record
      if (this.scoresIdxMap.hasOwnProperty(playerID)) {
        this.board.splice(this.scoresIdxMap, 1);
      }
      
      for (let i = 0; i < this.board.length; i++) {
        if (average >= this.board[i][1]) {
          this.board.splice(i, 0, [playerID, average]);
          this.scoresIdxMap[playerID] = i;
          
          return;
        }
      }
      
      // Add the record at the end if its score is smallest
      this.board.push([playerID, average]);
    }
  };

}

class Player {
  constructor(id) {
    this.id = id;
    this.scores = [];
    this.average;
  }
  
  addScore(score) {
    this.scores.push(score);
    this.averageScore();
  }
  
  averageScore() {
    if (!this.scores.length) return 0;
    
    let average = this.scores.reduce((acc, score) => acc + score)
    this.average = average / this.scores.length
  }
  
  resetScores() {
    this.average = 0;
  }
}

// Test code here

function array_equals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var leader_board = new LeaderBoard()

leader_board.add_score(1, 50)
console.log(leader_board.add_score(2, 80) == 80)
console.log(leader_board.add_score(2, 70) == 75)
console.log(leader_board.add_score(2, 60) == 70)
console.log('Add score should return the average. test with 1 score')
console.log(leader_board.add_score(3, 90) == 90)
console.log('Add score should return the average. test with 2 scores')
console.log(leader_board.add_score(3, 85) == 87.5)
console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:')
console.log(array_equals(leader_board.top(3), [3, 2, 1]))
console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:')
console.log(array_equals(leader_board.top(2), [3, 2]))

console.log(leader_board.add_score(4, 10) == 10)
console.log("Smallest number can be added at the end")
console.log(array_equals(leader_board.top(4), [3, 2, 1, 4]))

leader_board.reset(3)
console.log('After reset top 4 [' + leader_board.top(4) + '] should equal [2, 1, 4, 3]')
console.log(array_equals(leader_board.top(4), [2, 1, 4, 3]))

