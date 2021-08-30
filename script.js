/* variables for DOM manipulation */
let winEl = document.querySelector('#wins')
let lossEl = document.querySelector('#loss')
let drawEl = document.querySelector('#draws')
let gamesEl = document.querySelector('#games')
let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')
let btnDiv = document.querySelector('#button')

let playerHandEl= document.querySelector('#p-hand')
let computerHandEl =document.querySelector('#c-hand')

let playerHand = null
let wins = 0
let loss = 0
let draws = 0
let games = 0

const scores= () => {
    let computerHand = Math.floor(Math.random()*3)+1
       if(playerHand == 1){
        playerHandEl.textContent='rock'
        if(computerHand == 1){
            computerHandEl.textContent='rock'
            draws++
            games++
        }else if(computerHand == 2){
            computerHandEl.textContent='paper'
            loss++
            games++
        }else if(computerHand == 3){
            computerHandEl.textContent='scissors'
            wins++
            games++
        }
    }else if(playerHand == 2){
        playerHandEl.textContent='paper'
        if(computerHand == 2){
            computerHandEl.textContent='paper'
            draws++
            games++
        }else if(computerHand == 3){
            computerHandEl.textContent='scissors'
            loss++
            games++
        }else if(computerHand == 1){
            computerHandEl.textContent='rock'
            wins++
            games++
        }
    }else if(playerHand == 3){
        playerHandEl.textContent='scissors'
        if(computerHand == 3){
            computerHandEl.textContent='scissors'
            draws++
            games++
        }else if(computerHand == 1){
            computerHandEl.textContent='rock'
            loss++
            games++
        }else if(computerHand == 2){
            computerHandEl.textContent='paper'
            wins++
            games++
        }
    }
   

}

let hand = btnDiv.children
let game = ()=>{

for( let i=0; i<hand.length; i++){
    hand[i].addEventListener('click', ()=>{
        playerHand = i+1
        scores()
        winEl.textContent=wins
        lossEl.textContent=loss
        drawEl.textContent=draws
        gamesEl.textContent=games
    })
}

}
game()



