let result= document.querySelector('#output')
let computer= Math.floor(Math.random()*3)+1
let hasWon= false
let hasLost= false
let playerScore=document.querySelector('#player-score')
let computerScore=document.querySelector('#computer-score')
let start= Number(prompt('How many Games would you like to play?'))
let pScore=0
let cScore=0
let scoreEl= document.querySelector('#scores')
let scores=''

function game(){
    let player= prompt('Choose your hand')
    if(player.match(/rock/ig)){
        switch(computer){
            case 1:
                result.textContent= 'You tied!'
                hasWon=false
                hasLost=false
            case 2:
                hasWon=false  
                hasLost=true              
                result.textContent= 'Paper beats Rock. You lose!'
            case 3:
                hasWon=true
                hasLost=false
                result.textContent= 'Rock beats Scissors. You win!'

        }
    }else if(player.match(/paper/ig)){
        switch(computer){
            case 2:
                hasWon=false
                hasLost=false
                result.textContent= 'You tied!'
            case 1:
                hasWon=true
                hasLost=false
                result.textContent= 'Paper beats Rock. You Win!'
            case 3:
                hasWon=false
                hasLost=true
                result.textContent= 'Scissors beats Paper. You Lose!'

        }
    }else if(player.match(/scissors/ig)){
        switch(computer){
            case 3:
                hasWon=false
                hasLost=false
                result.textContent= 'You Tied!'
            case 1:
                hasWon=false
                hasLost=true
                result.textContent= 'Rock beats Scissors. You Lose!'
            case 2:
                hasWon=true
                hasLost=false
                result.textContent= 'Scissors beats Paper. You Win!'

        }
    }else{
        result.textContent='Wrong spelling. Play again'
    }

    if(hasWon==true){
        pScore++
    }else if(hasLost==true){
        cScore++
    }
    playerScore.textContent=pScore
    computerScore.textContent=cScore


}

function noOfGames(number){
    for(let i=0; i<number; i++){
    game(computer)
}
finalScore(pScore, cScore)
}
noOfGames(start)
function finalScore(p, c){
    if(p>c){
        scores='You Win'
    }else if(p<c){
        scores='You Lose'
    }else{
        scores="draw"
    }

    scoreEl.textContent=scores
}