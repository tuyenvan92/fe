// create a array contains 10 item
const array = [];
for(let i = 0; i < 10; i++) {
  array.push(i);
}
array.push(20, 57)
console.log('push array: ', array);
array.pop();
console.log('pop array: ', array);