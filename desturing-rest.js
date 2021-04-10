const objA = {
  abc: 1,
  b: 2,
  c: 3
}

const objB = {
  t: 1,
  y: 2
}


const combineObj = { ...objA, ...objB};

console.log(combineObj)