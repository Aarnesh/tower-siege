class Box{

    constructor(x,y,width,height){

      var options ={
        restitution:0.8,
        friction:0.3,
        density:0.3
      }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width =  width
        this.height =  height
        World.add(world,this.body)
      

    }
  
    display(){
      var pos = this.body.position
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop()
    }
}