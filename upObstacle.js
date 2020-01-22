class UpObstacle{
   constructor(x,position){

   this.width = 50;
   this.height = 250;
   this.y=100;
   this.x=x*position ;
   //console.log(position);
   }

   preload(){
      this.image=loadImage("assets/obstacle11.png");
   }

   drawUp(){
      this.x = (this.x + 5) % width ;
      //console.log(frameCount);
      image(upObstacle.image,this.x,this.y,this.width,this.height);
   }

   // drawReversed(){
   //    image(firstLevel.imageRev,(this.x+frameCount)*2 % width ,450,this.width,this.height);
   // }

   // drawLeft(){
   //    image(firstLevel.imageLeft,480,(380+frameCount)*4% height,this.height,this.width);
   // }
   // drawRight(){
   //    image(firstLevel.imageRight,80,(480+frameCount)*4% height,this.height,this.width);
   // }

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