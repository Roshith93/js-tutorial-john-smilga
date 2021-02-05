const mainDiv = document.querySelector('#main')
const buttonDiv = mainDiv.querySelector('.buttons')
const allButtons = buttonDiv.querySelectorAll('.btn')

// const allButton = allButtons.forEach((btn) =>
//   btn.addEventListener('click', function(e) {
//     e.target.style.color = "green"
//   })
// )
const allButton = allButtons.forEach((btn) =>
  btn.addEventListener('click', function(e) {
    e.currentTarget.style.color = "green"
  })
)
