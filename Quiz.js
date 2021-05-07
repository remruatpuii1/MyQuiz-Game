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
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

    background("pink");

    for(var plr in allContestants)
    {
      var correctAns="2";
      if(correctAns===allContestants[plr].answer)
      fill("Green");

      else
      fill ("Red");
    }

    contestant.getContestantInfo();

    if(allContestants!==undefined)
    {
      fill("blue");
      textSize(20);
      text("*NOTE : Contestant who answered correct are highlighted in green colour!",130,230);
    }
    
  }

}
