// I want to be able to creat cats in a shelter
// Maybe some shelter have other animals that aren't cats, they should be able to add those as well

'use strict';

const Animal = require('./animal.js');

let watson = new Animal('Watson');
let henry = new Animal('Henry');

watson.speak();

henry.sleep();

watson.pet();
