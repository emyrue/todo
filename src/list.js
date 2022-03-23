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

  sort() {
    let newList = [];
    for (let i = 0; i < this.list.length; i += 1) {
      for (let j = 0; j < this.list.length; j += 1) {
        if (this.list[j].index === i) {
          newList[i] = this.list[j];
        }
      }
    }
    this.list = newList;
  }

  store() {
    window.localStorage.setItem('list', JSON.stringify(this.list));
  }

  checkStorage() {
    if (window.localStorage.getItem('list')) {
      this.list = JSON.parse(window.localStorage.getItem('list'));
    }
  }
}