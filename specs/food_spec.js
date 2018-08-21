const assert = require('assert')
const Food = require('../food.js')


// Food should have a name
// Food should have a replenishment value

describe('Food', function(){
  beforeEach(function(){
    food = new Food('chicken', 25);
  });
  it('should have a name', function(){
    const actual = food.name;
    assert.strictEqual(actual, 'chicken')
  });
  it('should have replenishment value', function(){
    const actual = food.replenish;
    assert.strictEqual(actual, 25)
  });
})
