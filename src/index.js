import './style.css';
import ListItem from './listItem.js';
import List from './list.js';

const toDo = new List();
const toDoItem1 = new ListItem('wash the dishes', false, 0);
const toDoItem2 = new ListItem('complete To Do list project', false, 1);
toDo.add(toDoItem1);
toDo.add(toDoItem2);