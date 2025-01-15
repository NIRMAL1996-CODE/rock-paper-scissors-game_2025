document.addEventListener('DOMContentLoaded',function(){
  const introArea= document.querySelector('.intro-area');
  const gameArea= document.querySelector('.game-area');
  const startButton= document.getElementById('start-button');
  const resetButton= document.getElementById('reset-button');
  const rockButton= document.getElementById('rock');
  const paperButton= document.getElementById('paper');
  const scissorsButton= document.getElementById('scissors');
  const userChoiceText= document.getElementById('user-choice');
  const computerChoiceText= document.getElementById('computer-choice');
  const resultText= document.getElementById('result-text');
  let userchoice='';
  let computerchoice='';

  //first hide game area
  gameArea.style.display ='none';

  //start the game using start button
  startButton.addEventListener('click',function(){
    //hide introArea and show gamearea
    introArea.style.display ='none';
    gameArea.style.display ='block';
  });
//function for election of user choice
  function handleEvent(choice){
    userchoice= choice;
     userChoiceText.textContent=userchoice;
     playgame();
  };

  rockButton.addEventListener('click', function() {
    handleEvent('Rock');
  });
  
  paperButton.addEventListener('click', function() {
    handleEvent('Paper');
  });
  
  scissorsButton.addEventListener('click', function() {
    handleEvent('Scissors');
  });
  
  //function to generate computer choice
  function getcomputerchoice(){
    const choice= ['Rock' ,'Paper' , 'Scissors'];
    const randomchoice= choice[Math.floor(Math.random()*choice.length)];
    return randomchoice;
  }
  //function for game excution
  function playgame(){
    computerchoice = getcomputerchoice();
    computerChoiceText.textContent=computerchoice;
    result='';

    //choice comparison
    if(userchoice===computerchoice){
      result='It\'s a draw';
    }
      else if((userchoice==='Rock' && computerchoice==='Scissors')||
             (userchoice==='Paper' && computerchoice==='Rock')||
             (userchoice==='Scissors' && computerchoice==='Paper')){
              result='You win!';
             }
       else{
        result='You lose!';
       }      
       resultText.textContent= result;
  };
//reset the game using reset button
resetButton.addEventListener('click',function(){
  userchoice='';
  userChoiceText.textContent='None';
  computerchoice='';
  computerChoiceText.textContent='None';
  resultText.textContent='___';

  // Show the intro area and hide the game area
    gameArea.style.display ='none';
    introArea.style.display='block';
});
});