// Enemies our player must avoid
var Enemy = function(num) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.offset = -20;
    //this.x = -101;
    this.x = 0
    this.y = this.offset + num * 83;    //offset y to -20
    this.speed = Math.random() * (100 - 70) + 70;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Returns a random number between min (inclusive) and max (exclusive)

    //this.x = this.x + dt * this.speed;
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.offset = -10;
    this.x = 202;
    this.y = 332 + this.offset;   //Starting position to y = 322, offset_y = -10
    this.next_move = '';
};
Player.prototype.update = function(){
    /* update the coordinates due the the move that has been validated
     * during the Player.handleInput.
     */
    switch (this.next_move){
        case 'left':
            this.x = this.x - 101;
            break;
        case 'right':
            this.x = this.x + 101;
            break;
        case 'up':
            this.y = this.y - 83;
            break;
        case 'down':
            this.y = this.y + 83;
            break;
        default:
            break;
    };
    if (this.y == this.offset) {

        this.reset(function(){
            star_count++;

        });
    }
    this.next_move = '';
}
Player.prototype.handleInput = function(cmd){
    /* check the x,y value that won't be exceed the boundary */
    switch (cmd){
        case 'left':
            this.next_move = (this.x > 0) ? cmd : '';
            break;
        case 'right':
            this.next_move = (this.x < 404) ? cmd : '';
            break;
        case 'up':
            this.next_move = (this.y > -10) ? cmd : '';
            break;
        case 'down':
            this.next_move = (this.y < 405) ? cmd : '';
            break;
        default:
            break;
    };
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function(cb) {
    this.offset = -10;
    this.x = 202;
    this.y = 332 + this.offset;   //Starting position to y = 322, offset_y = -10
    this.next_move = '';
    cb();
};

var Collectable = function(){

};
Collectable.prototype.update = function(){
}
Collectable.prototype.render = function() {
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Collectable.prototype.reset = function(cb) {
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(1), new Enemy(2), new Enemy(3)]
var player = new Player();
var gem = new Collectable();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
