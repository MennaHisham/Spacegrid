class LeftObstacle{

    constructor(y,position){
        this.width=50;
        this.height=50;
        this.x=280;
        this.y=y*position;
    }
    
    preload(){
        this.imageLeft=loadImage("assets/leftObstacle.png");
    }
    drawLeft(){
      this.y = (this.y + 3) % height
        image(leftObstacle.imageLeft,this.x ,this.y,this.width,this.height);
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

