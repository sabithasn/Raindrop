class Drop {
    constructor( ) {
          this.x = random(0,width);
      this.y = random (-200,50);
      this.speed = random (4,10);
     
      
    }
    fall() {
      this.y = this.y + this.speed;
      this.speed += 0.5 ;
      if (this.y > height){
        this.y = random (-100,0);
        this.speed = random (4,10);
      }
    }
    display(){
      stroke("green");
      line(this.x,this.y, this.x, this.y + 10);
    }
  };
  