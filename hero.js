const Hero = function(name, health, favfood, tasks){
  this.name = name;
  this.health = health;
  this.favfood = favfood;
  this.tasks = [];
}

Hero.prototype.introduce = function () {
  return (`Hey, I'm ${this.name}!`);
};
module.exports = Hero;
