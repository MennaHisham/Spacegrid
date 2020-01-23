const game = new Game();
const collectable = new Collectable();
const player=new Player();
const upObstacle=new UpObstacle();
const downObstacle=new DownObstacle();
const transition= new Transition();
const rightObstacle=new RightObstacle();
const leftObstacle=new LeftObstacle();

let backgroundPic;
//let button;
//let slimePic;

function keyPressed(){
    if (keyCode === 37) {
        player.moveLeft();
      }
    
      if (keyCode === 39) {
        player.moveRight();
      }
    
      if (keyCode === 40) {
        player.moveDown();
      }
    
      if (keyCode === 38) {
        player.moveUp();
      }

      if(keyCode===13){
        loop();
        game.restartLevel();
      }

}

function preload(){
    backgroundPic= loadImage("assets/background.jpg");
    game.preload();
    
}

function setup(){  
    createCanvas(800,800);
    // button = createButton('click me');
    // button.hide()
    // button.mousePressed(reloadPage);
    //document.getElementById('demotext').style.visibility = 'hidden'
}


function draw(){ //60x per second
    image(backgroundPic,0,0)
    game.setup(); // draws the grid
    game.draw(); // draws the player and the collectables
   
    

}



// function reloadPage() {
//   document.location.reload()
// }


document.body.style.display = "flex";
document.body.style.justifyContent = "center";

window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);