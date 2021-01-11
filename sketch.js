const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var RainFall,Batman,thunder1,thunder2,thunder3,thunder4,Animations,circle,light
var engine,world
var rain = []

function preload(){
    Animations = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
                               "walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunder1 = loadImage("1.png")   
    thunder2 = loadImage("2.png")                        
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){

    createCanvas(600,1000)

    engine = Engine.create()
    world = engine.world

 Batman = new batman(300,650,50,Animations)
 circle = new Ellipse(300,385,45)
 light = new Thunder(300,-50,50,50)
    
}

function draw(){
    Engine.update(engine)
    background(0)

    if(frameCount % 5 === 0){
        rain.push(new Rain(random(1,999),0,5))
      }

    Batman.display()
    circle.display()
    light.display()

    for(var i = 0;i<rain.length;i++){
        if(rain[i]!=null){
            rain[i].display();
        }
    }

    drawSprites()
}