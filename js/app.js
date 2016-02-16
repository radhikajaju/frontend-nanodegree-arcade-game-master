// Enemies our player must avoid
var Enemy=function(x,y,speed){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite='images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update=function(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+(this.speed*dt);
    if(this.x>505) {
    this.reset();
    }
};

Enemy.prototype.reset=function(){
    this.x=-200;
    this.speed=350;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/char-boy.png';
};

Player.prototype.update=function(dt){
    if(this.y<25){
        this.x=200;
        this.y=405;
        console.log("you made it!");
        alert("Ahhh! You win the Game..want to play again click on OK!");
        this.reset();
    }
    else{
        this.collosion();
    }
    
};

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};

Player.prototype.handleInput=function(keyCode){
if(keyCode==='left'&&this.x>0){
this.x -=100;
}
if(keyCode==='up'&&this.y>0){
this.y-=82.5;
}
if(keyCode==='right'&&this.x<400){
this.x += 100;
}
if(keyCode==='down'&&this.y<400){
this.y +=82.5;
}
};

//This is collosion method that will handle the collosion of player & bug.
Player.prototype.collosion=function(){
    for (var i=0;i<allEnemies.length;i++){
        var enemy=allEnemies[i];
    // Reset the player back to start if it collides with enemy bug
        if (this.x>=enemy.x&&this.x<(enemy.x+100)&&this.y>=enemy.y&&this.y<(enemy.y+82.5)){
    //alert('Oops you hit the bug!');
        console.log("Oops avoid bugs!");
        this.reset();
        }
    }
};

Player.prototype.reset=function(){
  this.x = 200;
  this.y = 405;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1=new Enemy(0,60,400);
var enemy2=new Enemy(101,150,400);
var enemy3=new Enemy(202,235,700);
var enemy4=new Enemy(0,60,600);
var enemy5=new Enemy(101,150,200);
var allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5];

var player1=new Player(200,405);
var player=player1;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup',function(e){
    var allowedKeys={
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
