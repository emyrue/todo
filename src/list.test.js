/*
 * @jest-environment jsdom
 */

const List = require('./list.js');

const testList = new List();

describe('add and delete', () => {
  test('add item', () => {
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
  test('remove item', () => {
    testList.remove(0);
    testList.store();
    expect(testList.checkStorage()).toEqual([]);
  });
});
