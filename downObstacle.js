class DownObstacle{

    constructor(x,position){
        this.width=50;
        this.height=250;
        this.x=x*position;
        this.y=450;
    }
    
    preload(){
        this.imageDown=loadImage("assets/obstacleReversed.png");
    }
    drawDown(){
      this.x = (this.x + 4) % width
        image(downObstacle.imageDown,this.x ,this.y,this.width,this.height);
     }

     collides(obj) {

      if(obj.x+obj.width<this.x 
        || obj.x>this.x+this.width 
        || obj.y>this.y+this.height 
        || obj.y+obj.height<this.y){

           return false;
     }

     return true;
      
    }
}