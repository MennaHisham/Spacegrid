class Transition{
    preload(){
        this.img=loadImage("assets/restartLevel.jpg");
    }

       draw(){
           if(this.img){
        image(this.img,0 ,0,800,800);
           }
        
    }
}