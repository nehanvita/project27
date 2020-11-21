class Bob{

    constructor(x,y,r,angle){

        var options = {
            isStatic:false,
            restitution:1.3,
            friction: 0.4,
            density:3

        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world, this.body)

    }
    display(){
        var bobpos =this.body.position;
        var angle = this.body.angle;   
        push()
        translate(bobpos.x,bobpos.y)
        rotate (angle)
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop()
     
    }

}