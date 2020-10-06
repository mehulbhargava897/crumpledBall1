class Paper{

constructor(x, y, radius){
    
var options = {
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
    }
    this.body=Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    this.radius=radius
 }
display(){
push();

ellipseMode(RADIUS);
translate(this.body.position.x, this.body.position.y);
ellipse(0, 0, this.radius);
pop();
  }
}