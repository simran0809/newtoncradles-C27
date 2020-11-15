class Rope{

        constructor(bodyA , bodyB){
            var options = {
                bodyA:bodyA,
                bodyB:bodyB,
                stiffness:0.04,
                length:10
                
            }
            this.rope= Constraint.create(options);
        World.add(world,this.rope);
}
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
   

    strokeWeight(13);
    stroke("red");
    line(pointA.x+95,pointA.y-20,pointB.x-50,pointB.y+20);
    line(pointA.x+5,pointA.y-20,pointB.x-130,pointB.y+20);
    line(pointA.x+170,pointA.y-20,pointB.x+25,pointB.y+20);
    line(pointA.x+250,pointA.y-20,pointB.x+100,pointB.y+20);
    line(pointA.x+335,pointA.y-20,pointB.x+180,pointB.y+20);
 }
    
}


    
              
    