const Task = function(difficulty, urgency, reward, completed){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed;
}

module.exports = Task;
