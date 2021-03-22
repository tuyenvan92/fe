function callbackFuntion(params) {
  // params: 12, number
  // params: tuyen, string
  // params: Function

  if (typeof params !== 'number' || typeof params !== 'string') {
    const abc = params(3); // 12(3)
    console.log('is function: ', abc)
  }
  console.log('callbackFuntion: ', params, typeof params)
}

function something(value) {
  return value * 2
}

callbackFuntion(something)


