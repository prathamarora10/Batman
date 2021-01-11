class Thunder
{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.Thunders = createSprite(0,0)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        this.Thunders.x = pos.x
        this.Thunders.y = pos.y

        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)

        var r = round(random(1,4))
        switch(r){
            case 1:this.Thunders.addImage(thunder1)
            break;
            case 2:this.Thunders.addImage(thunder2)
            break;
            case 3:this.Thunders.addImage(thunder3)
            break;
            case 4:this.Thunders.addImage(thunder4)
            break;
        }
    }
}