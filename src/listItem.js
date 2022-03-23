export default class ListItem {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  upOne() {
    this.index += 1;
  }

  downOne() {
    this.index -= 1;
  }

  complete() {
    this.completed = true;
  }

  incomplete() {
    this.completed = false;
  }

  edit(task) {
    this.description = task;
  }
}