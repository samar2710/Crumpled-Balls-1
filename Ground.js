class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,650,900,10,options);
        this.width=900;
        this.height=10;
        
        World.add(world,this.body);
        

    }
    display(){
        var pos=this.body.position;
        
        fill("yellow");
        rect(400,650,900,10);
        rectMode(CENTER);
        

    }
}
