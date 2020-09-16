const arr = [1, "", 3, 4, 5, 2]

console.log(arr.indexOf(7))
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce((acc, curr) => {
 if (acc.indexOf(curr) === -1) { // checking value is present is acc. indexOf -1 returns when item is not present
  acc.push(curr)
 }
 return acc
}, [])

console.log(myOrderedArray)