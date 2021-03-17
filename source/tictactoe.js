//Write variables for player 1/2

//write functions to hold data




const moves = new Array(9)

const squares = document.querySelectorAll('#gridItemContainer > div')
let turnCount = 0
let turn = 'X'

function checkForWin() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        removeClickEventCallback()
        alert('winner in the first row ' + turn)
    } else {
        console.log('no winner yet')
    }
}

function removeClickEventCallback() {
    squares.forEach(square =>
        square.removeEventListener('click', handleClickEventCallback)
    )
}

function handleClickEventCallback(event) {
    moves[event.target.id] = turn
    checkForWin()
    event.target.innerText = turn
    turn = (turnCount % 2 === 0) ? "O" : "X";
    turnCount++
}

squares.forEach((square, index) => {
    square.setAttribute('id', `${index}`)
    square.addEventListener('click', handleClickEventCallback, {once: true})
})



// squares.forEach( square=>
// {
//     square.addEventListener('click', (event)=>{
//         event.target.setAttribute('style', 'background-color:red')
//         console.log('its been pressed',event.target)
//     })
// })


//function for mouseover
// var gridcolorChange=document.querySelector('.item_one')
//
// gridcolorChange.addEventListener('click',func)
// gridcolorChange.addEventListener('click',func1)
//
// function func()
// {
//
//     gridcolorChange.style.backgroundColor= 'blue'
//     console.log(gridcolorChange)
// }
//
// function func1()
// {
//     gridcolorChange.setAttribute('style', 'background-color:white')
// }
