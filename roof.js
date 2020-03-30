class Roof{
    constructor(x1, y1, x2, y2, x3, y3) {
        var options = {
            isStatic : true,
            friction:0.45,
            density:2
        }
        this.body = Bodies.triangle(x1, y1, x2, y2, x3, y3,options);
        World.add(world,this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        fill("FireBrick");
        triangle(0,0,0,0,0,0);
        pop();
      }
}