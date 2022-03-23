import ListItem from './listItem.js';
import enterKey from './return.svg';
import more from './more.svg';

export const toDoList = document.querySelector('.list');
const enter = new Image();
enter.src = enterKey;
const moreDots = new Image();
moreDots.src = more;

function display(index, toDo) {
  return `
    <input class="checkbox" type="checkbox" name="checkbox">
    <label for="checkbox">${toDo.list[index].description}</label>
    <img class="dots" src=${moreDots.src}>
  `;
}

export function createList(element, list) {
  element.innerHTML = '';
  list.sort();
  for (let i = 0; i < list.list.length; i += 1) {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.innerHTML = display(i, list);
    element.appendChild(newElement);
  }
}

export default function makeNew(newListItem, toDo) {
  newListItem.addEventListener('keypress', (e) => {
    if ((e.key === 'Enter') && (newListItem.value)) {
      const toDoItem = new ListItem(newListItem.value, false, toDo.list.length);
      toDo.add(toDoItem);
      toDo.store();
    }
  });

  enter.addEventListener('click', () => {
    if (newListItem.value) {
      const toDoItem = new ListItem(newListItem.value, false, toDo.list.length);
      toDo.add(toDoItem);
      toDo.store();
      createList(toDoList, toDo);
      newListItem.value = '';
    }
  });
}