const Hero = function(name, health, favfood){
  this.name = name;
  this.health = health;
  this.favfood = favfood;
}

Hero.prototype.introduce = function () {
  return (`Hey, I'm ${this.name}!`);
};
module.exports = Hero;
