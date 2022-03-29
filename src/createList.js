function display(index, toDo) {
  return `
    <input class="checkbox" type="checkbox" name="checkbox">
    <label class="task" for="checkbox">${toDo.list[index].description}</label>
    <img class="dots" src='./more.svg'>
  `;
}
function createList(element, list) {
  element.innerHTML = '';
  list.sort();
  let itemsAdded = 0;
  for (let i = 0; i < list.list.length; i += 1) {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.innerHTML = display(i, list);
    element.appendChild(newElement);
    itemsAdded += 1;
  }
  return itemsAdded;
}

module.exports = createList;