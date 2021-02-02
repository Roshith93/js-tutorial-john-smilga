const inputType = document.querySelector('input');

inputType.addEventListener('keyup', (e) =>console.log("up", e.target.value))
inputType.addEventListener('keydown', () =>console.log("down"))
inputType.addEventListener('keypress', (e) =>console.log("press", e.target.value))