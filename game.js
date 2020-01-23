
class Game{
     constructor(){
         this.collectables = [
             new Collectable(280, 280),
             new Collectable(280, 380),
             new Collectable(280, 480),
             new Collectable(380, 280),
             new Collectable(380, 480),
             new Collectable(480, 280),
             new Collectable(480, 380),
             new Collectable(480, 480),
         ]
         this.score=0;
         this.counter = 0;
         this.obstacles2=[];
         this.obstacles31=[];
         this.obstacles32=[];
         this.obstacles41=[];
         this.obstacles42=[]
         this.collectables2=
          [
          new Collectable(280, 280),
          new Collectable(280, 380),
          new Collectable(280, 480),
          new Collectable(380, 280),
          new Collectable(380, 480),
          new Collectable(480, 280),
          new Collectable(480, 380),
          new Collectable(480, 480),
          ];

         this.level1 = new UpObstacle(200,0);
         this.level4=new RightObstacle(700,0);
         this.level5= new LeftObstacle(200,0);

     }


     draw(){ //60 x per sec
        player.draw();

       // loop to remove collectable when collides
        this.collectables.forEach(function(collectable, index) {
            collectable.draw()
            if(collectable.collected(player)){
                this.score+=1;
                document.querySelector(".score").innerHTML = this.score;
                this.collectables.splice(index, 1);
            }
        }.bind(this))

        //creates new collectables in for the next 5 levels
        if(this.collectables.length ===0 && this.counter <5){
            
            transition.draw();
            this.counter++;

            this.restartLevel();
          
            
        }
        //First level
        if(this.counter===1){
            
            if (this.level1.collides(player)) {
              this.restartText();
              this.restartLevel();
                
              }
              //console.log(this.level1.x);
              this.level1.drawUp();
           
         } 
        



         //Second Level
         if(this.counter===2){
            //Array to store UpObstacle
            for(let j=0;j<5;j++) {
                if(this.obstacles2.length<5)
                this.obstacles2.push(new UpObstacle(400,j));
            }

                //check for collision
                this.obstacles2.forEach(function(obstacle) {
                if (obstacle.collides(player)) {
                   this.restartText();
                  this.restartLevel();
                    console.log("collision");
                }

            }.bind(this));
                this.obstacles2.forEach(function(obstacle) {
                    obstacle.drawUp();
                }.bind(this)
                );
         }

         //Third Level
         if(this.counter===3 ){
            for(let j=0;j<5;j++) {
                if(this.obstacles31.length<5)
                this.obstacles31.push(new UpObstacle(300,j));
          }
           //Checks Collision third level
          this.obstacles31.forEach(function(obstacle) {
            if (obstacle.collides(player)) {
              this.restartText();
              this.restartLevel();
                console.log("collisionUP");
            }
        }.bind(this));

          this.obstacles31.forEach(function(obstacle) {
            obstacle.drawUp();
          }.bind(this)
          );

           //Down Obstacles
          for(let j=0;j<5;j++) {
              if(this.obstacles32.length<5){
               this.obstacles32.push(new DownObstacle(400,j));
              }
            }
          this.obstacles32.forEach(function(obstacle) {
            if (obstacle.collides(player)) {
              this.restartText();
              this.restartLevel();
            }
        }.bind(this));
    
          this.obstacles32.forEach(function(obstacle3) {
            obstacle3.drawDown();
          }.bind(this)
          );

      }

      //Fourth Level
      if(this.counter===4){

        //Right Obstacle
        if (this.level4.collides(player)) {
          this.restartText();
          this.restartLevel();
        }

        this.level4.drawRight();

     
        //Up Obstacles
        for(let j=0;j<5;j++) {
            if(this.obstacles41.length<5)
            this.obstacles41.push(new UpObstacle(200,j));
      }

      this.obstacles41.forEach(function(obstacle) {
        if (obstacle.collides(player)) {
          this.restartText();
          this.restartLevel();
        }
      }.bind(this));

      this.obstacles41.forEach(function(obstacle) {
        obstacle.drawUp();
      }.bind(this)
      );


      //Down Obstacles
      for(let j=0;j<5;j++) {
        if(this.obstacles42.length<5)
        this.obstacles42.push(new DownObstacle(200,j));
  }
      this.obstacles42.forEach(function(obstacle) {
        if (obstacle.collides(player)) {
          this.restartText();
          this.restartLevel();
        
    }
  }.bind(this));
  
      this.obstacles42.forEach(function(obstacle) {
        obstacle.drawDown();
        
      }.bind(this)
      );
      
     }

     //Fifth Level

     if(this.counter===5){
      if (this.level4.collides(player)) {
        this.restartText();
        this.restartLevel();
      }
      this.level4.drawRight();

      if (this.level5.collides(player)) {
        this.restartText();
        this.restartLevel();
      }

        this.level5.drawLeft();
        

         //Up Obstacles
         for(let j=0;j<5;j++) {
          if(this.obstacles41.length<5){
          this.obstacles41.push(new UpObstacle(200,j));
          }
    }

    this.obstacles41.forEach(function(obstacle) {
      if (obstacle.collides(player)) {
        this.restartText();
        this.restartLevel();
      }
    }.bind(this));

    this.obstacles41.forEach(function(obstacle) {
      obstacle.drawUp();
      //obstacle2.drawLeft();
    }.bind(this)
    );


    //Down Obstacles
    for(let j=0;j<5;j++) {
      if(this.obstacles42.length<5){
      this.obstacles42.push(new DownObstacle(400,j));
      }
}
    this.obstacles42.forEach(function(obstacle) {
      if (obstacle.collides(player)) {
        this.restartText();
        this.restartLevel();
  }
}.bind(this));

    this.obstacles42.forEach(function(obstacle) {
      obstacle.drawDown();
      //obstacle2.drawLeft();
    }.bind(this)
    );
        
      }
    }
     restartText(){
       clear();
      transition.draw();
      textSize(80);
      textAlign(CENTER);
      textFont('Bungee');
      fill(65);
      //text(`GAME OVER`, 380, 380);
      textSize(40);
      text('Press ENTER ', 400, 375 );
      text("to restart",400,425)
      //this.gameOver = true;

      noLoop();
     }

      restartLevel(){
        this.score=0;
        document.querySelector(".score").innerHTML = this.score;
        this.collectables.splice(0, this.collectables.length);
        
          for(let i =0; i<8;i++){
             this.collectables2[i].preload();
             this.collectables.push(this.collectables2[i]);
            }
                 
              player.x = 380;
              player.y = 380;

            //Restart Level 2
            if(this.counter===2){
              this.obstacles2.splice(0,this.obstacles2.length);
              for(let j=0;j<5;j++) {
                if(this.obstacles2.length<5)
                this.obstacles2.push(new UpObstacle(400,j));
                
                }
            }

            //RestartLevel 3
            if(this.counter===3){
              this.obstacles31.splice(0,this.obstacles31.length);
              this.obstacles32.splice(0,this.obstacles32.length);

              for(let j=0;j<5;j++) {
                if(this.obstacles31.length<5)
                this.obstacles31.push(new UpObstacle(300,j));
          }
              for(let j=0;j<5;j++) {
              if(this.obstacles32.length<5){
              this.obstacles32.push(new DownObstacle(400,j));
            }
          }
            }

            //Restart Level4
        if(this.counter===4){
              this.obstacles41.splice(0,this.obstacles41.length);
              this.obstacles42.splice(0,this.obstacles42.length);
            for(let j=0;j<5;j++) {
            if(this.obstacles41.length<5)
              this.obstacles41.push(new UpObstacle(200,j));
        }
            for(let j=0;j<5;j++) {
            if(this.obstacles42.length<5)
            this.obstacles42.push(new DownObstacle(200,j));
    }
      }

        //Restart Level 5
        if(this.counter===5){
          this.obstacles41.splice(0,this.obstacles41.length);
          this.obstacles42.splice(0,this.obstacles42.length);
          for(let j=0;j<3;j++) {
            if(this.obstacles41.length<3){
            this.obstacles41.push(new UpObstacle(200,j));
            }
      }

      for(let j=0;j<5;j++) {
        if(this.obstacles42.length<5){
        this.obstacles42.push(new DownObstacle(400,j));
        }
      }
        }
       }

       restartButton(){
         button.show()
         button.position(50, 50)
       }


    preload(){
        // 1 time before setup
        transition.preload();
        upObstacle.preload();
        downObstacle.preload();
        player.preload();
        this.collectables.forEach(function(collectable) {
            collectable.preload()
        });
        rightObstacle.preload();
        leftObstacle.preload();
        
    }
    setup(){
        //setup for grid
    for (let i = 300; i <600; i += 100) {
        line(200, i, 600, i);
        line(i, 200, i, 600);
        stroke("white");
      }
      }

      

      

}
