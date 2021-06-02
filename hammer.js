class Hammer
{
    constructor()
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.0,
            'density': 2
        }
        this.body=Bodies.rectangle(width/2,height/2,10,100,option);
        World.add(world,this.body);
       
        
        
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        pos.x = mouseX
        pos.y = mouseY

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange")
        stroke("white")
        rect(0,0,20,100);
        pop(); 
         
    }
}











