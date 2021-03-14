// format object
// {
//   [key]: [value]
// }

// create object
// way 1
// key: name properties
// value: string, array, object, function, boolean.
const objctWay1 = {
  firstname: 'Tuyen',
  lastname: 'cat',
  color: 'red',
  status: false,
}

// way2
const person = new Object();
person.firstname = 'truong'
person.car = 'car';
// add new a property
person.gender = 'male'
console.log('way2 person: ', person, typeof person)
// delete a property
delete person.gender;   // or delete person["gender"];
console.log('way2 after delete object: ', person, typeof person)

// access value in object
// way1
console.log('way 1 access object: ', objctWay1.firstname)
// way2
console.log('way 2 access object: ', objctWay1['lastname'])

// loop in object
// for ... in: just get properties(key) of object
for (let item in objctWay1) {
  console.log('loop object: ', objctWay1[item])
}

// object.assign()
const objectTarget = { a: 1, b: 2}
const objectSource = { c: 3, d: 5}
const newObject = Object.assign(objectTarget, objectSource); // javascript
const newObjectEs6 = { // es6+
  ...objectTarget,
  ...objectSource
}


console.log('object.assign(): ', newObject, newObjectEs6)

Object.keys(objctWay1).forEach(item => {
  console.log('item: object.keys', item)
})

Object.values(objctWay1).forEach(item => {
  console.log('item: object.values', item)
})

Object.entries(objctWay1).forEach(item => {
  console.log('item: object.entries', item)
})