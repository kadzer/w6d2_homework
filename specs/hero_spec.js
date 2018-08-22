const assert = require('assert')
const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Leeroy Jenkins', 100, 'chicken');
    food = new Food('chicken', 20);
    listenToPlans = new Task('easy', 'low', 'intelligence +1', 0);
    waitForTeammates = new Task('medium', 'medium', 'defense +5', 0);
    shoutBattleCry = new Task('easy', 'high', 'initiative +10', 1);
    findChicken = new Task('hard', 'high', 'health +30', 1);
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
    assert.strictEqual(actual, 130)
  });
  it('should be able to sort tasks by properties', function(){
    hero.tasks.push(listenToPlans);
    hero.tasks.push(waitForTeammates);
    hero.tasks.push(shoutBattleCry);
    hero.tasks.push(findChicken);
    hero.sortTasksByDifficulty();
    const actual = //array sorted
    assert.deepStrictEqual(actual, //array sorted)
  });
})
