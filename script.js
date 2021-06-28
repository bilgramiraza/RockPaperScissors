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
