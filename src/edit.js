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
        <input class="edit" type="text" value="${toDo.list[i].description}">
        <img class="dots" src=${remove}>
      `;

      const input = document.querySelector('.edit');
      input.addEventListener('keypress', (e) => {
        if ((e.key === 'Enter') && input.value) {
          toDo.list[i].description = input.value;
          toDo.store();
          createList(toDo);
        }
      });
      const trashCan = document.querySelectorAll('.dots');
      trashCan[i].addEventListener('click', () => {
        toDo.remove(i);
        toDo.fixIndex();
        toDo.store();
        window.location.reload();
      });
    });
  }
}