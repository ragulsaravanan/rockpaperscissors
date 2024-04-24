let score=JSON.parse(localStorage.getItem('score'));

    if(score ===null){
      score={
        wins:0,
        losses:0,
        ties:0
      };
    }
   
    let result='';
    
    function playermove(move){

      let computermove=pickcomputermove();
      
      if(move==='rock'){
        if(computermove==='rock'){
          result='Tie';
        }
        else if(computermove==='paper'){
          result='you lose';
        }
        else if(computermove==='scissors'){
          result='you win';
        }
      }
      else if(move==='paper'){
        if(computermove==='rock'){
          result='you win';
        }
        else if(computermove==='paper'){
          result='Tie';
        }
        else if(computermove==='scissors'){
          result='you lose';
        }
      }
      else if(move==='scissors'){
        if(computermove==='rock'){
          result='you lose';
        }
        else if(computermove==='paper'){
          result='you win';
        }
        else if(computermove==='scissors'){
          result='Tie';
        }
      }

      if(result==="you win"){
        score.wins+=1;
      }
      else if(result==="you lose"){
        score.losses+=1;
      }
      else if(result==="Tie"){
        score.ties+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));

      updatescore();
      
      document.querySelector('.result').innerHTML=result;
     document.querySelector('.move').innerHTML=`you
            <img class="icon" src="${move}-emoji.png" alt="">
          <img class="icon" src="${computermove}-emoji.png" alt="">
          computer`;

        
    }

    function updatescore(){  
      document.querySelector('.scorecard').innerHTML=`wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
    }
    
    function pickcomputermove(){
      
      const randomNumber=Math.random(); 
      let computermove=''; 
        if(randomNumber>=0 && randomNumber<1/3){
        computermove='rock';
        }
        else if(randomNumber >=1/3 && randomNumber<2/3){
        computermove='paper';
        }
        else{
        computermove='scissors';
        }

        return computermove;
          }