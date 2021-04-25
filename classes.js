class Person {
  constructor(url, car = 'honda') {
    this.url = url;
    this.car = car
  }
  setItem() {
    this.car = 'bmw'
    //
  }
  getItem() {
    return this.car
  }
}

const person = new Person('localhost: 4000');
// person.setItem();
console.log('person: ', person.getItem())



new Shape();

class Shape {}