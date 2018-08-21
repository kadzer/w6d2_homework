const assert = require('assert')
const Task = require('../task.js')

// +A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

describe('Task', function(){
  beforeEach(function(){
    task = new Task('easy');
  });
  it('should have a difficulty level', function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, 'easy')
  });
})
