const getTitle = document.querySelector('#title');
const createHeading = document.createElement('p')
createHeading.innerHTML = "hellll"
const where = document.querySelector('#root')

where.prepend(createHeading)