import { toDoList, editButtons } from "./index.js";
import createList from "./index.js";
import remove from './delete.svg';

const trash = new Image();
trash.src = remove;
export default function editItems(toDo) {
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', () => {
      editButtons[i].parentElement.classList.add('color');
      editButtons[i].parentElement.innerHTML = `
        <input type="checkbox">
        <input class="edit" type="text" value="${toDo.list[i].description}">
        <img class="trash" src=${remove}>
      `;

      const input = document.querySelector('.edit');
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          toDo.list[i].description = input.value;
          toDo.store();
          createList(toDo);
        }
      });
    });
  }
}