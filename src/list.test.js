/*
* @jest-environment jsdom
*/

const List = require('./list.js');

const testList = new List();

describe('add and delete', () => {
  test('check storage', () => {
    expect(testList.checkStorage()).toBeNull();
  });
});