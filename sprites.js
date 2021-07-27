class Boxes extends Baseclass{
    constructor(x, y){
        super(x, y, 25, 40);
    }
    display(){
        if(this.body.speed<3){
            fill("purple");
            super.display();
        }
        else{
            World.remove(world, this.body);
        }
    }

}