import './style.css';
import renew from './renew.svg';
import enterKey from './return.svg';
import List from './list.js';
import makeNew, { createList, toDoList } from './add.js';
import editItems from './edit.js';
import removeItem from './remove.js';

const heading = document.querySelector('.heading');
const newItem = document.querySelector('.new-item');
const newListItem = document.querySelector('.new-list-item');
const refresh = new Image();
refresh.src = renew;
const enter = new Image();
enter.src = enterKey;
const toDo = new List();
toDo.checkStorage();
heading.appendChild(refresh);
newItem.appendChild(enter);

refresh.addEventListener('click', () => {
  window.location.reload();
});

createList(toDoList, toDo);

/* add new items */

makeNew(newListItem, toDo);

/* remove items */

removeItem(toDo);

/* edit items */

editItems(toDo);