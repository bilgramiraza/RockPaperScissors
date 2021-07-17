const RPS= ["Rock", "Paper", "Scissors"];
//The Result for every combination of Input
const wintable= [[0,2,1],
                 [1,0,2],
                 [2,1,0]];
const start=document.querySelector('#start');
const go=document.querySelector('#go');
const replay=document.querySelector('#replay');
const input=document.querySelectorAll('.inputWindow>input');
const scoreBoard=document.querySelectorAll('.scoreBoard>img');
const pointBoard=document.querySelectorAll('.scoreTrack>h4');
let playerChoice=-1;
let computerChoice=-1;
let playerScore=0;
let computerScore=0;
let turn=0;

//Computer Input
function computerPlay(){
    const choice = Math.floor((Math.random()*3)); 
    //console.log(`Computer: ${RPS[choice]}`);   //Error Handling
    return choice;
}

//Decision making
function playRound(computerChoice, playerChoice){
    const result = wintable[playerChoice][computerChoice];
    return result;
}

function toggleSelectors(list,target){
    list.forEach((element)=>{
        if(element.dataset.input===target){
            element.dataset.choice=true;
        }
        else{
            element.dataset.choice=false;
        }
    });
}

start.addEventListener('click',()=>{
    hideToggle(start, replay, document.querySelector('.gameLayout'));
    // console.log(input);
})

go.addEventListener('click',()=>{
    try{
        if(playerChoice===-1) throw "No Option Selected";
        computerChoice=computer(); 
        // console.log(playerChoice);
        // console.log(computerChoice);
        let winner = playRound(computerChoice,playerChoice);
        // console.log(winner);
        roundWin(winner);
        turn++;
        if(playerScore===5){
            hideToggle(go, replay);
            winnerDisplay("PLAYER");
        }
        else if(computerScore===5){
            hideToggle(go, replay);
            winnerDisplay("COMPUTER");
        }
    }
    catch(err){
        console.log(err);
        alert("Select an Choice to Proceed");
    }
});

replay.addEventListener('click',()=>{
    location.reload();
});


input.forEach((element)=>{
    element.addEventListener('click',()=>{
        toggleSelectors(input,element.dataset.input);
        playerChoice=RPS.indexOf(element.dataset.input);
        vsUpdater(scoreBoard[0],element.dataset.input);
        // console.log(playerChoice);
    });
});

function hideToggle(...tag){
    tag.forEach((element)=>{
        element.classList.toggle('hide');
    })
}

function computer(){
    let computerChoice=computerPlay();
    const computerList=document.querySelectorAll(".inputWindow>img");
    computerList.forEach((element)=>{
        if(RPS[computerChoice]===element.dataset.input){
            toggleSelectors(computerList,element.dataset.input);
            vsUpdater(scoreBoard[1],element.dataset.input);
        }
    });
    return computerChoice;
}

function vsUpdater(tag, choice){
    switch (choice) {
        case "Rock":tag.src="./img/boulder.svg";
            break;
        case "Paper":tag.src="./img/parchment.svg";
            break;
        case "Scissors":tag.src="./img/shears.svg";
            break;
    }
}

function roundWin(winner){
    let playerFlag=false;
    let computerFlag=false;
    switch (winner) {
        case 1:
            playerScore++;
            // console.log(`player wins ${playerScore}`);
            break;
        case 2:
            computerScore++;
            // console.log(`computer wins ${playerScore}`);
            break;
        // default: console.log("draw");
        //     break;
    }
    winnerBox(winner);
    scoreUpdater();
}

function scoreUpdater(){
    // console.log(pointBoard);
    pointBoard[0].textContent=playerScore;
    pointBoard[1].textContent=computerScore;
}

function winnerBox(winner){
    let playerBorder="red";
    let computerBorder="red";
    if(winner===1)
        playerBorder="green";
    else if(winner===2)
        computerBorder="green";

    scoreBoard[0].style.border=`5px solid ${playerBorder}`;
    scoreBoard[0].style.margin="-5px";
    scoreBoard[1].style.border=`5px solid ${computerBorder}`;
    scoreBoard[1].style.margin="-5px";
}

function winnerDisplay(winner){
    const winnerRow=document.querySelector('.winnerRow>h4');
    const winnerName=document.querySelectorAll('.inputWindow>h2');
    if(winner==="USER"){
        winnerName[0].style.border="5px solid green";
        winnerName[0].style.margin="-5px";
    }
    else{
        winnerName[1].style.border="5px solid green";
        winnerName[1].style.margin="-5px";
    }
    winnerRow.textContent=`${winner} WON IN ${turn} TURNS`;
}