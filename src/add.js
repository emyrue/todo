import ListItem from './listItem.js';
import createList from './index.js';
import { enter, toDoList } from './index.js';

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