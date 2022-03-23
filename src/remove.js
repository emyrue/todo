export default function removeItem(toDo) {
  const checkbox = document.querySelectorAll('.checkbox');
  const button = document.querySelector('.clear');

  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        toDo.list[i].completed = true;
      } else {
        toDo.list[i].completed = false;
      }
    });
  }

  button.addEventListener('click', () => {
    toDo.list = toDo.list.filter((el) => !el.completed);
    toDo.fixIndex();
    toDo.store();
    window.location.reload();
  });
}