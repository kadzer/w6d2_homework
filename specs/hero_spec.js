const assert = require('assert')
const Hero = require('../hero.js')


// + A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('The Chosen One', 100);
  });
  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'The Chosen One')
  });
  it('should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, 100)
  })
})
