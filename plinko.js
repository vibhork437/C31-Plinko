class Plinko {
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,15,options)
        this.radius = 15

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill(255)
        circle(pos.x,pos.y,15)
    }
}