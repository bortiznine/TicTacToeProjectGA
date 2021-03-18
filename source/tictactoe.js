//Write variables for player 1/2


const moves = new Array(9)

const squares = document.querySelectorAll('#gridItemContainer > div')
let turnCount = 0
let turn = 'X'

function checkForWin() {
    //NEED TO FIX IF FORMATS
        //checks 1,2,3
    if(moves[0] !=null && moves[1] !=null && moves[2] != null) {
        if (moves[0] === moves[1] && moves[1] === moves[2]) {
            removeClickEventCallback()
        console.log((moves))
            console.log('winner in the first row ' + turn)
        }

        console.log('whatever')
    }

    //checks 4,5,6
    else if(moves[3] !=null && moves[4] !=null && moves[5] != null) {
        if (moves[3] === moves[4] && moves[4] === moves[5]) {
           removeClickEventCallback()
           console.log('winner in the second row ' + turn)
         }
     }
        //checks 7,8,9
    if(moves[6] !=null && moves[7] !=null && moves[8] != null) {
        if (moves[6] === moves[7] && moves[7] === moves[8]) {
            // removeClickEventCallback()
            console.log('winner in the third row ' + turn)
        }
    }
            //checks 1,4,7
    if(moves[0] !=null && moves[3] !=null && moves[6] != null) {
        if (moves[0] === moves[3] && moves[3] === moves[6]) {
            //removeClickEventCallback()
            console.log('winner in the first column ' + turn)
        }
    }
            //checks 2,5,8
    if(moves[1] !=null && moves[4] !=null && moves[7] != null) {
        if (moves[1] === moves[4] && moves[4] === moves[7]) {
            //removeClickEventCallback()
            console.log('winner in the second column ' + turn)
        }
    }
        //checks 3,6,9
    if(moves[2] !=null && moves[5] !=null && moves[8] != null) {
        if (moves[2] === moves[5] && moves[5] === moves[8]) {
            //removeClickEventCallback()
            console.log('winner in the third column ' + turn)
        }
    }
        //checks 1,5,9
    if(moves[0] !=null && moves[4] !=null && moves[8] != null) {
        if (moves[0] === moves[4] && moves[4] === moves[8]) {
            //removeClickEventCallback()
            console.log('winner in the diagonals 1,5,9 ' + turn)
        }
    }
        //checks 3,5,7
    if(moves[2] !=null && moves[4] !=null && moves[6] != null) {
        if (moves[2] === moves[4] && moves[4] === moves[6]) {
            //removeClickEventCallback()
            console.log('winner in the diagonals 3,5,7 ' + turn)
        }
    }
    else {
        console.log('no winner yet')
    }
}

function removeClickEventCallback() {
    squares.forEach(square =>
        square.removeEventListener('click', handleClickEventCallback)
    )
}
//write functions to hold data
function handleClickEventCallback(event) {
    //if (turnCount < 1) {squares.classList.add('rotate')}
    moves[event.target.id] = turn
    checkForWin()
    event.target.innerText = turn
    turn = (turnCount % 2 === 0) ? "O" : "X";

    //NEED To set up if statements for X and O

    // if(turn=true){
    //     event.target.setAttribute('style','background-color:blue')
    // }
    // else {
    console.log(moves)
     event.target.setAttribute('style', 'background-color:red')
    // }
        turnCount++

}

squares.forEach((square,index) => {
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
