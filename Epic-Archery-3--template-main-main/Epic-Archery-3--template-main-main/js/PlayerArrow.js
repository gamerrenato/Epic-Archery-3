class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);

      velocity.mult(20);
      print(velocity.x);
      print(velocity.y);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
        
    function keyPressed() {
          if(keyCode === 32){
            // crie um objeto arrow (flecha) e adicione a uma matriz ; defina seu ângulo igual ao ângulo do playerArcher (flecha do jogador)
            var posX = playerArcher.body.position.x;
            var posY = playerArcher.body.position.y;
            var angle = playerArcher.body.angle+PI/2;
            var arrow = new PlayerArrow(posX, posY, 100, 10);
            arrow.trajectory = [];
            Matter.Body.setAngle(arrow.body, angle);
            playerArrows.push(arrow);
          }
            
          for (var i=0; i<playerArrows.length; i++) 
            {
             showArrows(playerArrows, i);
             }
          
          }
    }
}