const person = [{
    name: 'John',
    salary: 2000,
  },
  {
    name: 'ohn',
    salary: 7000,
  },
  {
    name: 'Mohn',
    salary: 5000,
  },
  {
    name: 'Hohn',
    salary: 2343,
  },
]

const totalSalary = person.reduce((acc, currentVal) => {
  acc += currentVal.salary
  return acc
}, 0)
console.log(totalSalary)

// Bonding arrays contained in an array of objects using the spread operator and initialValue
// friends - an array of objects 
// where object field "books" is a list of favorite books 
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
let allbooks = friends.reduce(function (accumulator, currentValue) {
  return [...accumulator, ...currentValue.books]
}, ['Alphabet'])
console.log(allbooks)
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

// flatten an array of array
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(
  function (accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]