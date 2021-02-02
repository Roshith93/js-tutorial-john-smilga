const position2 = document.querySelector('.root2')
const para = position2.querySelector('p')

const checkColor = () => {
 console.log(para)
 if (para.classList.contains('colorViolet')) para.classList.remove('colorViolet')
 else para.classList.add('colorViolet')
}
para.addEventListener("click", checkColor)
