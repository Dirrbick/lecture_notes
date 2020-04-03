'use strict';


const Validator = require('./Validator.js');
const notesSchema = require('./note-schema.js');

class Notes {
  constructor(noteBody) {
    this.validator = new this.validator(notesSchema);
    this.body = noteBody;
    this.id = Math.random();
  }

  valid() {
    return this.validator.validate({id: this.id, note: this.body});
  }
};


// index.js

const Note = require('.Note.js');
const Input = require('.Input.js');

//capture all the command line content
//"node index.js -a 'my test note'"

let importantStuff = process.argv.slice(2);

let formattedInput = new Input(importantStuff);

let note = new Note
