var testCar;
var weight;
var speed;
var deformation;
var wall;

function setup() {
    createCanvas(1200,600);
    testCar=createSprite(100, 300, 40, 40);
    wall=createSprite(1100, 300, 20, 140);
}
function draw() {
    background(0);  
    drawSprites();
    
    wall.shapeColor = "brown";
    weight = Math.round(random(1000,2000));
    speed = testCar.velocityX;
    testCar.velocityX = Math.round(random(1,180));
    

    if(testCar.x>1060){
        testCar.velocityX = 0;
        deformation = 0.5*weight*speed*speed/22500;
    }
    if(deformation < 100){
        testCar.shapeColor = "green";
    }
    if(deformation > 100 && deformation < 180){
        testCar.shapeColor = "orange";
    }
    if(deformation > 180){
        testCar.shapeColor = "red";
    }

}