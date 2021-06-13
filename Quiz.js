class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340,50);
    text("----------------------------",320,65);

    Contestant.getPlayerInfo();

    if(allContestants !== undefined)
    {
      var display_Answers = 230;

      fill("blue");
      textSize(20);
      text("*Note: Contestants who anwered corret are highlighted in green colour",130,230);

      for(var plr in allContestants)
      {
        var correctAns="2";
        if(correctAns === allContestants[plr].answer)

        fill("green")

        else

        fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_Answers);


      }

    }


    /*if (allContestants !== undefined)
    {
      for(var plr in allContestants)
    {
      var correctAns = "2";

      if(correctAns === allContestants[plr].answer)
      
        fill("green")

        else

        fill("red");

        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_position);
      
    textSize(30);
    text("Result of the Quiz");

    Contestant.getContestantInfo();

      fill("Blue");
      textSize(20);
      text("*Note: Contestants who answered correct are highlighted in green color",130,230);
    }

    //write code to highlight contest who answered correctly
    
  }*/
  }
}
