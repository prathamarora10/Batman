class batman
{
    constructor(x,y,r){
        var options = {
        isStatic : true
        }

        this.body = Bodies.circle(x,y,r,options)
        this.batmans = createSprite(300,650)
        this.batmans.addAnimation("Image",Animations)
        this.r = r;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        this.batmans.x = pos.x
        this.batmans.y = pos.y
       
        rectMode(CENTER)
        rect(pos.x,pos.y,this.r,this.r)
    }
}