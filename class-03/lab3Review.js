'use strict';

// index.js
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
// connect to database

const dbURL = 'link to database';
//anything after a "?" is a url query, you do not need those "options"
//get link from atlas or localhost
mongoose.connect(dbURL, {
  /*use options from paragraphs*/
});


// node index.js -a "my note" -c school
let cli = process.argv.slice(2)

let myInput = new Input(cli);
let myHandler = new NOteActionHandler(myInput.command)



mongoose.disconnect();


// input.js

//npm install minimist
const minimist = require('mnimist')

class Input {
  constructor(cliArgs) {
    //cliArgs >> {action, payload}
    this.command = {};


    let formatted = minimist(cliArgs);
    // {_: '', a: ''...}

    let keys =Object.keys(formatted);
    keys.forEach(val => {
      //key, val = formatted[key];
      // console.log(key);
      switch(key) {
        case 'a':
        case 'add':
          this.command = { action: 'add', payload: formatted[key]}
          break;
        //lab 2
        case 'c':
        case 'category':
          this.command.category = formatted[keys];
          break;
        //lab 3
        case 'l':
        case 'list':
          this.command = {action: 'list', payload: formatted[key] };
          // other option
          //break
          return;
        case 'd':
        case 'delete':
          this.command = {action: 'delete', payload: formatted[key]};
          return;
        default:
          break;
      }
    })
    console.log(this.command);
  }


}

module.exports = Input;

//note-action-handler.js

const NotesModel = require('./notes-schema.js');

class NOteActionHandler {
  constructor(command) {
    if (command && command.action) this.execute(command);
    else console.error('Incorrect ');
  }
    execute(command) {
      switch (command.action ){
        case 'add':
          this.add(command.payload, command.category);
          break;
        case 'list':
          this.list(command.payload, command.category);
          break;
        case 'delete':
          this.delete(command.payload);
        default: break;
      }
    }
    
    async add(noteText, category){
      try {
        let newNote = new NotesModel({ test: noteText, category: category ? category : ''});
        await newNote.save();
      } catch (e) {}

    }
    // always check to see if async await is there
    async list(category){
      const allNotes = NotesModel.find();

      allNotes.forEach(val => {
        if (category)
          if (val.category === category) {
            console.log('---------');
            console.log(val.text);    
          } else {

            console.log('---------');
            console.log(val.text);
          }
      })
  }
    delete(noteId){}
}

module.Exports = NOteActionHandler

// notes-schema.js

const mongoose = require('mongoose');

let schema = mongoose.Schema({
  // _id does not need to be included in schema
  text: {required: true, type: String},
  category: {required: false, type: String},
});

const model = mongoose.model('notes', schema);

module.exports = model;
