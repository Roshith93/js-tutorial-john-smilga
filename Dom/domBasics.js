setInterval(() => {
 let max = 255;
 let min = 1;
 let X = Math.floor(Math.random() * (max - min) + min)
 let Y = Math.floor(Math.random() * (max - min) + min)
 let Z = Math.floor(Math.random() * (max - min) + min)
 document.body.style.backgroundColor = `rgb(${X},${Y},${Z})`
}, 1000)