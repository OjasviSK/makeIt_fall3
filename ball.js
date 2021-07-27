class Ball extends Baseclass{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }
    display(){
        fill("red");
        super.display();
    }
}