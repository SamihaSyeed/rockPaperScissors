/* variables for DOM manipulation */
let winEl = document.querySelector('#wins')
let lossEl = documnt.querySelector('#loss')
let drawEl = document.querySelector('#draws')
let gamesEl = documnt.querySelector('#games')
let rockBtn = document.querySelector('#rock')
let paperBtn = documnt.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')
let btnDiv = document.querySelector('#button')

let computerHand = Math.floor(Math.random()*3)+1
let playerHand = null
let wins = 0
let loss = 0
let draws = 0
let games = 0
winEl.textContent=0
lossEl.textContent=loss
drawEl.textContent=draws
gamesEl.textContent=games
const scores= () => {
    if(playerHand == 1){
        if(computerHand == 1){
            draws++
            games++
        }else if(computerHand == 2){
            loss++
            games++
        }else if(computerHand == 3){
            wins++
            games++
        }
    }else if(playerHand == 2){
        if(computerHand == 2){
            draws++
            games++
        }else if(computerHand == 3){
            loss++
            games++
        }else if(computerHand == 1){
            wins++
            games++
        }
    }else if(playerHand == 3){
        if(computerHand == 3){
            draws++
            games++
        }else if(computerHand == 1){
            loss++
            games++
        }else if(computerHand == 2){
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



