class RightObstacle{

    constructor(y,position){
        this.width=50;
        this.height=50;
        this.x=490;
        this.y=y*position;
    }
    
    preload(){
        this.imageRight=loadImage("assets/rightObstacle.png");
    }
    drawRight(){
      this.y = (this.y + 2) % height
        image(rightObstacle.imageRight,this.x ,this.y,this.width,this.height);
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