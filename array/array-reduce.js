const array = [1,2,3,4,5]

array.reduce(function(acc, curr, currentIndex, array) {

  console.log('acc', acc, curr) //number {} []

}, [])

// 1 + 2 = 3 (accmulator)
// 3 + 4 = 7  (4: currentValue)
