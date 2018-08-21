const assert = require('assert')
const Hero = require('../hero.js')


// + A Hero has a name
// + A Hero has health
// + A Hero has a favourite food
// + A Hero can talk saying their name
// A Hero has a collection of tasks to complete

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Leeroy Jenkins', 100, 'chicken');
  });
  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'Leeroy Jenkins')
  });
  it('should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, 100)
  });
  it('should have favourite food', function(){
    const actual = hero.favfood;
    assert.strictEqual(actual, 'chicken')
  });
  it('should itroduce themselves', function(){
    const actual = hero.introduce();
    assert.strictEqual(actual, 'Hey, I\'m Leeroy Jenkins!')
  });
  it('should have a collection of tasks', function(){
    hero.tasks.push("gather food")
    const actual = hero.tasks.length;
    assert.strictEqual(actual, 1)
  });
})
