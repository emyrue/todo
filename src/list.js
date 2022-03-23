export default class List {
  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  remove(index) {
    this.list.splice(index, 1);
  }
}