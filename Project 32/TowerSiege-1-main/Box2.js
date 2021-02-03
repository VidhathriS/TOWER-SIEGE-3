class Box2{

    constructor(x,y,width,height){

        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }

         this.visibility = 255;
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.width = width,
         this.height = height,
         World.add(world,this.body);






    }




display(){
 
    if(this.body.speed <3){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    fill(rgb(255,192,203))
    rect(0,0,this.width,this.height);
    pop();
    }else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
    } 

}

score(){

    if(this.visibility<0 && this.visibility>-105){
         score++;
       }
   }

}