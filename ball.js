class Rubber
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,5,option);
        World.add(world,this.body);
        
       
    }

    display()
    {
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("blue")
        circle(pos.x,pos.y,50,);
        pop();     
    }
}

