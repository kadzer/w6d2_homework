const assert = require('assert')
const Task = require('../task.js')


describe('Task', function(){
  beforeEach(function(){
    task = new Task('easy','low','three fiddy', 1);
  });
  it('should have a difficulty level', function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, 'easy')
  });
  it('should have an urgency level', function(){
    const actual = task.urgency;
    assert.strictEqual(actual, 'low')
  });
  it('should have a reward', function(){
    const actual = task.reward;
    assert.strictEqual(actual, 'three fiddy')
  });
  it('should have a completion status', function(){
    const actual = task.completed;
    assert.strictEqual(actual, 1)
  });
})
