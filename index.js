// Write your code here!

//test 1
const main = document.querySelector("#main").remove()

//test 2, 3, 4
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Jacob is the champion"
document.appendChild(newHeader)
console.log(newHeader)
