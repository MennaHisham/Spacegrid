const game = new Game();
const collectable = new Collectable();
const player=new Player();
const upObstacle=new UpObstacle();
const downObstacle=new DownObstacle();
const transition= new Transition();

let backgroundPic;
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

}

function preload(){
    backgroundPic= loadImage("assets/background.jpg");
    game.preload();
    
}

function setup(){  
    createCanvas(800,800);
}

function draw(){ //60x per second
    image(backgroundPic,0,0)
    game.setup() // draws the grid
    game.draw(); // draws the player and the collectables

}


document.body.style.display = "flex";
document.body.style.justifyContent = "center";

window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);