/*
 * @jest-environment jsdom
 */

const List = require('./list2.js');

const createList = require('./createList.js');

const editItems = require('./editItems.js');

document.body.innerHTML = `
<section class="to-do">
<div class="heading">
    <h1>Today's To Do</h1>
</div>
<form>
    <div class="new-item">
        <input class="new-list-item" type="text" placeholder="Add to your list">
    </div>
    <ul class="list"></ul>
    <button class="clear" type="submit">Clear All Completed</button>
  </form>
</section>
`;
const testListElement = document.querySelector('.list');
let testList = new List();
jest.mock('./index');

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
    expect(testList.checkStorage()).toEqual([
      { description: 'Socks1', completed: false, index: 1 },
      { description: 'Socks2', completed: false, index: 2 },
    ]);
  });
  test('checking list elements', () => {
    testList.fixIndex();
    createList(testListElement, testList);
    const todolist = document.querySelectorAll('.list-item');
    expect(todolist.length).toBe(2);
  });
  test('Adding an item and checking HTML', () => {
    testList.add({ description: 'Socks1', completed: false, index: 2 });
    createList(testListElement, testList);
    const todolist = document.querySelectorAll('.list-item');
    expect(todolist.length).toBe(3);
  });
  test('Removing an item and checking HTML', () => {
    testList.remove(0);
    testList.fixIndex();
    createList(testListElement, testList);
    const todolist = document.querySelectorAll('.list-item');
    expect(todolist.length).toBe(2);
  });
  test('Editing an item', () => {
    editItems(testList);
    document.querySelectorAll('.dots')[0].click();
    document.querySelectorAll('.edit')[0].value = 'Shoes';
    const keyEvent = new KeyboardEvent('keypress', { key: 'Enter' });
    document.querySelectorAll('.edit')[0].focus();
    document.querySelectorAll('.edit')[0].dispatchEvent(keyEvent);
    createList(testListElement, testList);
    expect(testList.list[0].description).toBe('Shoes');
  });
});
