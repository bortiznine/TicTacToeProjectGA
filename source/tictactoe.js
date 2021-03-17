//Write variables for player 1/2

//write functions to hold data
 let squares = document.querySelectorAll('.gridItemContainer>div')
// square1.addEventListener('click',(event) =>{
//
   console.log(squares)
squares.forEach( square=>
{
    square.addEventListener('click', (event)=>{
        event.target.setAttribute('style', 'background-color:red')
        console.log('its been pressed',event.target)
    })
})
//     }
// )

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
