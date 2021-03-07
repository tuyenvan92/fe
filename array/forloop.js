const array = [7, 223, 561, 62, 92, 163, 2];

// create a array contains 10 item
// const array = [];
// for(let i = 0; i < 10; i++) {
//   array.push(i);
// }
const newArrayDivine3 = [];
for (let i = 0; i < array.length; i++) {
  const ele = array[i];
  if(ele % 3 === 0) {
    newArrayDivine3.push(ele)
  }
  // console.log('forLoop: ', ele, i) 
}
// 0: array[0], index: 0
// 1: array[1], index: 1
console.log(newArrayDivine3)