const RPS= ["Rock", "Paper", "Scissors"];
//The Result for every combination of Input
const wintable= [[0,2,1],
                 [1,0,2],
                 [2,1,0]];

//Computer Input
function computerPlay(){
    const choice = Math.floor((Math.random()*3)); 
    //console.log(`Computer: ${RPS[choice]}`);   //Error Handling
    return choice;
}

//Player Input
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

//Decision making
function playRound(computerChoice, playerChoice){
    const result = wintable[playerChoice][computerChoice];
    return result;
}

function game(){
    let result=0;
    let playerScore=0;
    let computerScore=0
    let winner=0;
    while(playerScore !== 5 && computerScore !== 5){
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        result = playRound(computerChoice,playerChoice);
        switch(result){
            case 0:console.log(`Its a Draw`);
                    break;
            case 1:console.log(`${RPS[playerChoice]} beats ${RPS[computerChoice]} Player Wins`);
                    playerScore++;
                    break;
            case 2:console.log(`${RPS[computerChoice]} beats ${RPS[playerChoice]} Computer Wins`);
                    computerScore++;
                    break;
        }
    }

    if(playerScore===5)
        console.log('Player Wins')
    else if(computerScore===5)
        console.log('Computer Wins');
    else
        console.log('Its a Draw');
}
game();