import './style.css';
import renew from './renew.svg';
import enterKey from './return.svg';
import more from './more.svg';
import ListItem from './listItem.js';
import List from './list.js';

const toDoList = document.querySelector('.list');
const heading = document.querySelector('.heading');
const newItem = document.querySelector('.new-item');
const refresh = new Image();
refresh.src = renew;
const enter = new Image();
enter.src = enterKey;
const moreDots = new Image();
moreDots.src = more;
const toDo = new List();
const toDoItem1 = new ListItem('wash the dishes', false, 0);
const toDoItem2 = new ListItem('complete To Do list project', false, 1);
toDo.add(toDoItem1);
toDo.add(toDoItem2);

heading.appendChild(refresh);
newItem.appendChild(enter);

function display(index) {
  return `
    <input type="checkbox" name="listName">
    <label for="listName">${toDo.list[index].description}</label>
    <img class="dots" src=${moreDots.src}>
  `;
}

for (let i = 0; i < toDo.list.length; i += 1) {
  const newElement = document.createElement('li');
  newElement.className = 'list-item';
  for (let j = 0; j < toDo.list.length; j += 1) {
    if (toDo.list[j].index === i) {
      newElement.innerHTML = display(j);
    }
  }
  toDoList.appendChild(newElement);
}