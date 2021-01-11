class Rain
{
    constructor(x,y,r){

        var option = {
            density : 5,
            friction : 0.7
        }
        
        this.body = Bodies.circle(x,y,r,option)
        this.r = r
        this.color = color(rgb(0,0,255))
        World.add(world,this.body)
    }

    display(){

        var pos = this.body.position

        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)

    }
}