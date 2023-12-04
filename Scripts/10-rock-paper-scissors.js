let score = JSON.parse(localStorage.getItem('score'))||
{
wins: 0,
loses: 0,
ties: 0
};

updateScoreElement();

/*if(!score){ 
score={
wins: 0,
loses: 0,
ties: 0
};
}
*/
function playGame(playerMove){
   const computerMove= pickcomputerMove();
   let result='';
   if(playerMove==='Scissors'){
   if(computerMove=== 'Rock'){
      result= 'you win';
      }
      else if (computerMove=== 'Paper'){
      result='you lose';
      }
      else if (computerMove=== 'Scissors'){
      result='Tie' ;
      }
   }else if(playerMove==='Paper'){
   if(computerMove=== 'Rock'){
      result= 'You win';
      }
      else if (computerMove=== 'Paper'){
      result='tie';
      }
      else if (computerMove=== 'Scissors'){
      result='you lose' ;
      }
   }else if(playerMove==='Rock'){
   if(computerMove=== 'Rock'){
      result= 'Tie';
      }
      else if (computerMove=== 'Paper'){
      result='you lose';
      }
      else if (computerMove=== 'Scissors'){
      result='you win' ;
      }
  }
      if(result=== 'you win'){
      score.wins+=1;
      }else if(result==='you lose'){
         score.loses+=1;
      }else if(result='Tie'){
      score.ties+=1;
 }
localStorage.setItem('score',JSON.stringify(score));


updateScoreElement();
document.querySelector('.js-results').innerHTML=result;
document.querySelector('.js-move').innerHTML=

`   You
      <img src="rock image/${playerMove}.png" alt="" class="icons">
      <img src="rock image/${computerMove}.png" alt="" class="icons">
      
      Compuer`;


      
} 

 function updateScoreElement(){
   document.querySelector('.js-score')
.innerHTML=`wins: ${score.wins},loses ${score.loses},Ties ${score.ties}`;

 }
    
function pickcomputerMove(){
   const randomNumber= Math.random();//it genarate random numbers between 0 and 1
   let computerMove='';
   if(randomNumber>=0 && randomNumber<1/3){
   computerMove='Rock'
   } 
   else if(randomNumber>=1/3 && randomNumber<2/3){
   computerMove='Paper'
   }
   else if(randomNumber>=2/3 && randomNumber<1){
   computerMove='Scissors'
   }
   return computerMove;  
}