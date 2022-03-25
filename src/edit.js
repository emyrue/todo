import { createList } from './add.js';
import remove from './delete.svg';

const trash = new Image();
trash.src = remove;
export default function editItems(toDo) {
  const editButtons = document.querySelectorAll('.dots');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', () => {
      editButtons[i].parentElement.classList.add('color');
      editButtons[i].parentElement.innerHTML = `
        <input class="checkbox" type="checkbox">
        <input class="edit task" type="text" value="${toDo.list[i].description}">
        <img class="dots" src=${remove}>
      `;

      const input = document.querySelectorAll('.task');
      input[i].focus();
      for (let j = 0; j < input.length; j += 1) {  
        input[j].addEventListener('keypress', (e) => {
          if ((e.key === 'Enter') && input.value) {
            toDo.list[i].description = input.value;
            toDo.store();
            createList(toDo);
          }
        });
      }

      const trashCan = document.querySelectorAll('.dots');
      let clicked = false;
      const editTask = document.querySelector('.edit');
      editTask.addEventListener('focusout', () => {
        trashCan[i].addEventListener('click', () => {
          toDo.remove(i);
          toDo.fixIndex();
          toDo.store();
          clicked = true;
          window.location.reload();
        });
        document.addEventListener('click', () => {
          window.location.reload();
        });
      });
    });
  }
}