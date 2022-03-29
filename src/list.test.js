/*
 * @jest-environment jsdom
 */

const List = require('./list.js');
const createList = require('./createList.js');

const testList = new List();
const testListElement = document.querySelector('.list');

describe('add and delete', () => {
  test('add item localStorage', () => {
    testList.add({ description: 'Socks', completed: false, index: 0 });
    testList.store();
    expect(testList.checkStorage()).toEqual([
      {
        description: 'Socks',
        completed: false,
        index: 0,
      },
    ]);
  });
  test('remove item localStorage', () => {
    testList.add({ description: 'Socks1', completed: false, index: 1 });
    testList.add({ description: 'Socks2', completed: false, index: 2 });
    testList.remove(0);
    testList.store();
    expect(testList.checkStorage()).toEqual([{ description: 'Socks1', completed: false, index: 1 }, 
    { description: 'Socks2', completed: false, index: 2 }]);
  });
  test('add item html', () => {
    const createTestList = document.createElement('ul')
    testList.fixIndex();
    // createList(createTestList, testList);
    expect(createList(createTestList, testList)).toBe(2);
  });
});
