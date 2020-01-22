let img;
class Collectable{
    constructor(row, col){
        this.row = row
        this.col = col
        this.score=0;

    }
    preload(){
        this.img=loadImage("assets/alive-slime.gif");
    
    }
    draw(){
    //draws the collectables
    if (this.img) {
        image(this.img, this.row, this.col, 30,30)
    
    }
}

    collected(obj) {
        // check if player collects the collectables
        if (this.row===obj.x && this.col===obj.y) {
          return true;
        }
        return false;
      }
  
}