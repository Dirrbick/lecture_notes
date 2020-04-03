'use strict';

function Animal(name) {
  this.name = name;

  // is it adopted or not (init is unadopted)
  this.state = 'unadopted';
  // how many people have requested to adopt (init is 0)
  this.request = 0;

}

Animal.prototype.speak = function() {
  console.log(this.name, ' says hi to you!');
};

Animal.prototype.sleep = function() {
  console.log(this.name, ' is sleeping soundly');
};

Animal.prototype.pet = function() {
  console.log('You give ', this.name, " a nice pet");
};
;

Animal.prototype.addRequest = function() {
  this.request++;
  console.log(this.name, 'has', this.request, ' requests for adoption!')
}
module.exports = Animal;
