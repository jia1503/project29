class Box {
  constructor(x, y, width, height) 
  {
   var boxNature = { 
    'restitution':0.8,
            'friction':1.0,
            'density':1.0
 }
   this.body = Bodies.rectangle(x, y, width, height, boxNature);
   this.width = width;
   this.height = height;
   
 }
 display(){
           
             var angles = this.body.angle; 
             push();
              translate(this.body.position.x,this.body. position.y); 
              rotate(angles);
               rectMode(CENTER);
               rect(0, 0, this.width, this.height);
                pop();
              }
}