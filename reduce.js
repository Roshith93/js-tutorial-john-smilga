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