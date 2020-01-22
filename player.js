let playerImg;
class Player{
    constructor(){
        this.x=380;
        this.y=380;
        this.width=40;
        this.height=40;
    }

    preload(){
       playerImg=loadImage("assets/player2.png");
    }
    moveLeft(){
        if(this.x>280){
            this.x-=100;
         }
    }

    moveRight(){
        if(this.x<480){
            this.x+=100;
        }
    }

    moveDown(){
        if(this.y<480){
            this.y+=100;
        }

    }

    moveUp(){
        if(this.y>280){
        this.y-=100;
    }
    }

    draw(){
       // clear()
       image(playerImg,this.x,this.y,this.width,this.height);
    }

    
}