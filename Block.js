class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if(this.body.speed < 3){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        var pos= this.body.position;
        World.remove(world, this.body);
        push();
        tint(255, this.Visibility);
        this.Visibility = this.Visibility - 5;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.width, this.height);
        pop();
      }
      
      
    }
}