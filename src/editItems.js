function editItems(toDo) {
  const editButtons = document.querySelectorAll('.dots');
  for (let i = 0; i < toDo.list.length; i += 1) {
    editButtons[i].addEventListener('click', () => {
      editButtons[i].parentElement.classList.add('color');
      editButtons[i].parentElement.innerHTML = `
        <input class="checkbox" type="checkbox">
        <input class="edit task" type="text" value="${toDo.list[i].description}">
        <img class="dots" src='./delete.svg'>
      `;

      const input = document.querySelectorAll('.task');
      input[i].focus();
      for (let j = 0; j < input.length; j += 1) {
        input[j].addEventListener('keypress', (e) => {
          if ((e.key === 'Enter') && input[j].value) {
            toDo.list[i].description = input[j].value;
            toDo.store();
            window.location.reload();
          }
        });
      }

      const trashCan = document.querySelectorAll('.dots');
      const editTask = document.querySelector('.edit');
      editTask.addEventListener('focusout', () => {
        trashCan[i].addEventListener('click', () => {
          toDo.remove(i);
          toDo.fixIndex();
          toDo.store();
          window.location.reload();
        });
        document.addEventListener('click', () => {
          window.location.reload();
        });
      });
    });
  }
}

module.exports = editItems;