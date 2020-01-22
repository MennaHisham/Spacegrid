
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
         this.obstacles4=[];

         this.level1 = new UpObstacle(200,0);

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

                 let collectables2= 
                 [
                 new Collectable(280, 280),
                 new Collectable(280, 380),
                 new Collectable(280, 480),
                 new Collectable(380, 280),
                 new Collectable(380, 480),
                 new Collectable(480, 280),
                 new Collectable(480, 380),
                 new Collectable(480, 480),
                 ]
                 for(let i =0; i<8;i++){
                 collectables2[i].preload();
                 this.collectables.push(collectables2[i]);
                 }
                 
                 player.x = 380;
                 player.y = 380;


            
        }
        //First level
        if(this.counter===1){
            
            if (this.level1.collides(player)) {

            /* todo
            - reset level function
            - reset this.score 
            - empty collactable array 
            - fill up array again according to the level
            */
                
                
                console.log("collision");
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
                console.log(j);



            }
                //check for collision
                this.obstacles2.forEach(function(obstacle) {
                if (obstacle.collides(player)) {
                    console.log("collision");
                }
            });
          
        
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
                console.log("collisionUP");
            }
        });

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
            console.log("collisionDown");
            }
        });
    
          this.obstacles32.forEach(function(obstacle3) {
            obstacle3.drawDown();
          }.bind(this)
          );

      }

      //Fourth Level
      if(this.counter===4){

        //Down Obstacle
        const level4=new DownObstacle(200,0);
        level4.drawDown();
        
        //Up Obstacles
        for(let j=0;j<5;j++) {
            if(this.obstacles2.length<5)
            this.obstacles2.push(new UpObstacle(200,j));
      }
      this.obstacles2.forEach(function(obstacle2) {
        obstacle2.drawUp();
        //obstacle2.drawLeft();
      }.bind(this)
      );
      
     }

     //Fifth Level

    //  if(this.counter===5){
    //     const level4=new upObstacle(200,0);
    //     level4.drawReversed();
    //     //level4.drawLeft();
    //     //level4.draw();
    //     for(let j=0;j<5;j++) {
    //         if(this.obstacles2.length<5)
    //         this.obstacles2.push(new FirstLevel(200,j));
    //   }
    //   this.obstacles2.forEach(function(obstacle2) {
    //     obstacle2.draw();
    //     obstacle2.drawLeft();
    //     obstacle2.drawRight();
    //   }.bind(this)
    //   );
    //  }

        
      }


    preload(){
        // 1 time before setup
        transition.preload();
        upObstacle.preload();
        downObstacle.preload();
        player.preload();
        this.collectables.forEach(function(collectable) {
            collectable.preload()
        })
        
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
