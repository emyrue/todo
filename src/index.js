import './style.css';
import renew from './renew.svg';
import enterKey from './return.svg';
import more from './more.svg';
import List from './list.js';
import makeNew from './add.js';
import editItems from './edit.js';

export const toDoList = document.querySelector('.list');
const heading = document.querySelector('.heading');
const newItem = document.querySelector('.new-item');
const newListItem = document.querySelector('.new-list-item');
const refresh = new Image();
refresh.src = renew;
export const enter = new Image();
enter.src = enterKey;
export const moreDots = new Image();
moreDots.src = more;
const toDo = new List();
toDo.checkStorage();
heading.appendChild(refresh);
newItem.appendChild(enter);

function display(index) {
  return `
    <input type="checkbox" name="listName">
    <label for="listName">${toDo.list[index].description}</label>
    <img class="dots" src=${moreDots.src}>
  `;
}

export default function createList(element, list) {
  element.innerHTML = ``;
  list.sort();
  for (let i = 0; i < list.list.length; i += 1) {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.innerHTML = display(i);
    element.appendChild(newElement);
  }
}

createList(toDoList, toDo);

export const editButtons = document.querySelectorAll('.dots');

/* add new items */

makeNew(newListItem, toDo);

/* remove items */

/* edit items */

editItems(toDo);