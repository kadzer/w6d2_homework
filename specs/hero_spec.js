const assert = require('assert')
const Hero = require('../hero.js')
const Food = require('../food.js')

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Leeroy Jenkins', 100, 'chicken');
    food = new Food('chicken', 25);
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
  it('should be able to replenish health by eating food', function(){
    hero.eatFood(food);
    const actual = hero.health;
    assert.strictEqual(actual, 125)
  });
})
