class Divisions {
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            'frition':0.3,
            'density':1.0
        }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w
     this.h = h
     World.add(world,this.body)   
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y,this.w,this.h)
    }
}