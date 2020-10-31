class Color{
    constructor(){
        this.redBlock = createSprite(displayWidth/4,500,200,200);
        this.redBlock.shapeColor="red";
        this.greenBlock = createSprite(2*displayWidth/4,500,200,200);
        this.greenBlock.shapeColor="green";
        this.yellowBlock = createSprite(3*displayWidth/4,500,200,200);
        this.yellowBlock.shapeColor="yellow";
        
    }

    display(){
        background("#FFA07A");
        fill("#008B8B");
        textSize(50);
        strokeWeight(4);
        textFont('Helveltica');
        text("Choose your colours for the game !!", 300, 350);
        drawSprites();
    }

    
    





}