'use strict';

const messages = require('./Messages.js');

describe('my first test suite', () => {
  it('check if welcome function works', () => {
    expect(messages.welcomeMessage('Kory')).toBe('Welcome Kory!');
  });
});

