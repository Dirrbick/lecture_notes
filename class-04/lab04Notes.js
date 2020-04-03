'use strict';

const mongoose = require('mongoose');
const dbUrl = ('<DB Link>');


mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const dbOps = async () => {
  let newFoodData = {
    name: 'grapes',
    calories: 100, 
    type: 'fruit',
  }

  await foodModel.create(newFoodData);
  let record = await FoodModel.delete('<id>');
  //console.log('found record', record);

  mongoose.disconnect();
};

console.log('connected!');


dbOps();


// food-model.js

const mongoose = require('mongoose');
const foodMongooseModel = require('food-schema.js');

class Model {
  // schema file
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  // CRUD Operations
  // Always use a try/catch block
  async create(record) {
    let recordToAdd = new this.model(record);
    await recordToAdd.save();
  }

  async read(_id) {
    // first, validate that this is an id
    try {
      if (! typeof _id === mongoose.ObjectId) throw 'err';
      let foundRecords = await this.model.find({_id});
      if (foundRecords.length) return foundRecords(0);
      else throw 'err';
    } catch (e) {
      console.log('Error')
    }

  }

  async readByField(query) {
    try {
      let foundRecords = await this.model.find(query);
      if (foundRecords.length) return foundRecords;
      else throw 'err';
    } catch (e) {
      console.log('Error')
    }

  }

  async update(_id, changedRecord) {

  }

  async delete(_id) {
    // how to delete
    try {
      let delResult = await this.model.deleteOne({ _id });
      console.log(delResult )
      if (delResult.deletedCount === 0 ) throw 'err';
    } catch (e) {
      console.log('Delete error')
      return false;
    }
  }
}

let foodModel = new Model(foodMongooseModel);
let drinksModel = new Model(drinksMongooseModel);

module.exports = foodModel;

// test.js
//__tests__
// food-model.test.js
const supergoose = require('@code-fellows/supergoose');
const FoodModel = require('../lib/models/food-model.js');

beforeAll(async () => {
  await 
  await FoodModel.create({
    name: 'pear',
    calories: 100,
    type: 'FRUIT',
  })
})

describe('Database can create', () => {
  it('for best case', () => {
    let response = await FoodModel.create({
      name: 'grapes',
      calories: 100,
      type: 'fruit',
    });

    expect(response).not.toBe(false);
    // more strict expect
    expect(response.name).toBe('grapes');
  });
});
