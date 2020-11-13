class Paper{
    constructor(x,y,diameter){
    var options={
        'restitution':0.3,
        isStatic:false,
        fricton:0.5,
        density:1.2
    }
    this.body=Matter.Bodies.circle(100,500,20,options);
    
    this.diameter=diameter;
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipse(0,0,20);
    ellipseMode(CENTER);
    pop();
}
}