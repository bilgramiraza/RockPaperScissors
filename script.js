const RPS= ["Rock", "Paper", "Scissors"];
const wintable= [[0,2,1],
                 [1,0,2],
                 [2,1,0]];

function computerPlay(){
    const choice = Math.floor((Math.random()*3)); 
    //console.log(`Computer: ${RPS[choice]}`);   //Error Handling
    return choice;
}

function playerPlay(){
    let input = prompt('Rock, Paper or Scissors?'); 
    //console.log(`Player: ${RPS[input]}`);   //Error Handling
    choice=input.toUpperCase();
    switch(choice){
        case 'ROCK':return 0;
                    break;
        case 'PAPER':return 1;
                    break;
        case 'SCISSORS':return 2;
                    break;
        default: return playerPlay();
    }
}

function playRound(computerChoice, playerChoice){
    const result = wintable[playerChoice][computerChoice];
    return result;
}
function game(){
    let result=0;
    let winner=0;
    for(let i=0;i<5;i++){
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        result = playRound(computerChoice,playerChoice);
        switch(result){
            case 0:console.log(`Its a Draw`);
                    break;
            case 1:console.log(`${RPS[playerChoice]} beats ${RPS[computerChoice]} Player Wins`);
                    winner++;
                    break;
            case 2:console.log(`${RPS[computerChoice]} beats ${RPS[playerChoice]} Computer Wins`);
                    winner--;
                    break;
        }
    }
    if(!winner)
        console.log('Its a Draw');
    else if(winner>0)
        console.log('Player Wins')
    else
        console.log('Computer Wins');
}
game();