$(document).ready(function() {


    //Generate a random number between 19 and 120, assign it to variable randomNum
    var randomNum=Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    //Dispaly the randomNumber span ID on the page equal to randomNum
    $("#randomNumber").html("<br>" + (randomNum) + "</b>");
    
    
    //Declare variables for each of the crystals and assign each a random number 1 to 12 
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    
    //Declare variables to track userTotal score, the wins and the losses
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
    //Display the wins and losses to the page
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //Resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function winner(){
  alert("You've won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //adds the losses to the userTotal
  function loser(){
  alert ("You've lost!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == randomNum){
            winner();
          }
          else if ( userTotal > randomNum){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == randomNum){
            winner();
          }
          else if ( userTotal > randomNum){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == randomNum){
            winner();
          }
          else if ( userTotal > randomNum){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == randomNum){
            winner();
          }
          else if ( userTotal > randomNum){
            loser();
          }
    });   
});