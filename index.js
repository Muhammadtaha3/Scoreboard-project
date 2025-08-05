let numOne = document.getElementById('num1') 
let numTwo = document.getElementById('num2')


let countHome = 0
let countGuest = 0

function add1HomePoint () { 
    countHome += 1
    numOne.innerText = countHome
  }
function add2HomePoint () { 
    countHome += 2
    numOne.innerText = countHome
  }
function add3HomePoint () { 
    countHome += 3
    numOne.innerText = countHome
  }
function add1GuestPoint () { 
    countGuest += 1
    numTwo.innerText = countGuest
  }
function add2GuestPoint () { 
    countGuest += 2
    numTwo.innerText = countGuest
  }
function add3GuestPoint () { 
    countGuest += 3
    numTwo.innerText = countGuest
  }