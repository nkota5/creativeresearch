
// draft 1 just simple testing.

//originally my idea is to have an interactive solar system where user can click on a planet to learn more about how it functions and interacts with the other planets in the solar system - user can learn understand and click through these linked pages for each planet and learn information.

// required variables
var speed_star = 0.1
var _alpha = 30
var aplha_habital = 25


//variables for the planets and stars.

// mercury
var mercury_x=400;
var mercury_y=400;
var mercury_theta = 47.87;
var mercury_r = 20;
var speed_mercury = 0.04787 * speed_star

//venus
var venus_x=400;
var venus_y=400;
var venus_theta = 35.02;
var venus_r = 50;
var speed_venus = -0.03502 * speed_star

// earth 
var earth_x=400;
var earth_y=400;
var earth_theta = 29.78;
var earth_r = 100;
var speed_earth = -0.02978 * speed_star

//natural Satellite of earth 
var moon_x=400;
var moon_y=400;
var moon_theta = 29.78;
var moon_orb_earth = 2;
var moon_r = 149;
var speed_moon = 0.07978 * speed_star

//red planet in our solar system 
var mars_x=400;
var mars_y=400;
var mars_theta = 24.077;
var mars_r = 140;
var speed_mars = -0.024077 * speed_star

//gas giant largest(2.5 x all the planets put together in terms of size) in our solar system 
var jupiter_x=400;
var jupiter_y=400;
var jupiter_theta = 13.07;
var jupiter_r = 250;
var speed_jupiter = -0.01307 * speed_star

//gas giant in our solar system
var saturn_x=400;
var saturn_y=400;
var saturn_theta = 20;
var saturn_r = 300;
var speed_saturn = -0.00969 * speed_star

//ice giant in solar system 
var uranus_x=400;
var uranus_y=400;
var uranus_theta = 6.81;
var uranus_r = 350;
var speed_uranus = -0.00681 * speed_star

//gas giant in solar system 
var neptune_x=400;
var neptune_y=400;
var neptune_theta = 5.43;
var neptune_r = 370;
var speed_neptune = -0.00543 * speed_star

//dwarf planet in solar system - place 9
var pluto_x=400;
var pluto_y=400;
var pluto_theta = 25.70;
var pluto_r = 360;
var speed_pluto = -0.0047 * speed_star


//io for jupiter
var io_x=400;
var io_y=400;
var io_theta =7.70;
var io_r = 160;
var speed_io = -0.027 * speed_star



//ceres for the asteroid belt
var ceres_x=400;
var ceres_y=400;
var ceres_theta =234.70;
var ceres_r = 180;
var speed_ceres = -0.018 * speed_star


//asteroid belt 
var r1 = 165,r2=210;
var x,y,x2,y2;
var asteroid_theta=0;
var testX,testY;

function setup() {
  createCanvas(810, 780);
  
}
function draw() {
  background(0);
  //background starfield
  randomSeed(500)
  for (var j = 0; j <= 500;j++){
    fill(random(120,255),random(120,255),random(120,255),random(80,150))
    circle(random(800),random(800),random(3))
  }
  
  
  //optimistic
  fill(1,250,1,aplha_habital);
  circle(400,400,300);
  fill(0);
  circle(400,400,130)
  
  //conservative
  fill(1,250,1,aplha_habital);
  circle(400,400,250);
  fill(0);
  circle(400,400,100)
  
  //not habital
  fill(250,1,1,aplha_habital);
  circle(400,400,160);
  
  
  //sun
  strokeWeight(4);
  fill(255,165,0)
  text('sun',412.5,400,1);
  circle(400,400,25)
  noStroke();
  
  
  //mercury
  mercury_x=+mercury_r*sin(mercury_theta);
  mercury_y=+mercury_r*cos(mercury_theta);
  text('mercury',mercury_x+400,mercury_y+400,1);
  stroke(25,65,3,_alpha);
  noFill(255);
  circle(400,400,40);
  noStroke();
  fill(167,166,186);
  circle(mercury_x+400,mercury_y+400,3);
  mercury_theta = mercury_theta + speed_mercury;
  
  //venus
  venus_x=+venus_r*cos(venus_theta);
  venus_y=+venus_r*sin(venus_theta);
  text('venus',venus_x+400,venus_y+400,1);
  stroke(255,165,3,_alpha);
  noFill(255);
  circle(400,400,100);
  noStroke();
  fill(255,222,173);
  circle(venus_x+400,venus_y+400,5);
  venus_theta = venus_theta + speed_venus;
  
  //earth
  fill(1,200,150);
  earth_x=+earth_r*cos(earth_theta);
  earth_y=+earth_r*sin(earth_theta);
  text('earth',earth_x+400,earth_y+400,1);
  stroke(1,200,150,_alpha);
  noFill(255);
  circle(400,400,200);
  noStroke();
  fill(1,200,150);
  circle(earth_x+400,earth_y+400,5.5);
  earth_theta = earth_theta + speed_earth;
  
  //moon
  fill(200,200,200);
  moon_x=+moon_r*sin(moon_theta)/15;
  moon_y=+moon_r*cos(moon_theta)/15;
  text('moon',earth_x+400+moon_x,earth_y+400+moon_y,1);
  circle(earth_x+400+moon_x,earth_y+400+moon_y,3);
  moon_theta = moon_theta + speed_moon;
  
  //mars
  fill(200,200,5);
  mars_x=+mars_r*cos(mars_theta);
  mars_y=+mars_r*sin(mars_theta);
  text('mars',mars_x+400,mars_y+400,1);
  stroke(200,200,5,_alpha);
  noFill(255);
  circle(400,400,280);
  noStroke();
  fill(200,200,5);
  circle(mars_x+400,mars_y+400,4.5);
  mars_theta = mars_theta + speed_mars;
  
  //jupiter
  fill(255,165,150);
  jupiter_x=+jupiter_r*cos(jupiter_theta);
  jupiter_y=+jupiter_r*sin(jupiter_theta);
  text('jupiter',jupiter_x+407.5,jupiter_y+400,1);
  stroke(255,165,150,_alpha);
  noFill(255);
  circle(400,400,500);
  noStroke();
  fill(255,165,150);
  circle(jupiter_x+400,jupiter_y+400,15);
  jupiter_theta = jupiter_theta + speed_jupiter;

  //saturn
  fill(220,180,130);
  saturn_x=+saturn_r*cos(saturn_theta);
  saturn_y=+saturn_r*sin(saturn_theta);
  text('saturn',saturn_x+407.5,saturn_y+400,1);
  stroke(220,180,130,_alpha);
  noFill(255);
  circle(400,400,600);
  noStroke();
  fill(220,180,130);
  circle(saturn_x+400,saturn_y+400,15);
  fill(240,240,203);
  ellipse(saturn_x+400,saturn_y+400,25,4);
  saturn_theta = saturn_theta + speed_saturn;
  
  
  //uranus
  fill(50,100,150);
  uranus_x=+uranus_r*cos(uranus_theta);
  uranus_y=+uranus_r*sin(uranus_theta);
  text('uranus',uranus_x+400,uranus_y+400,1);
  stroke(50,100,150,_alpha);
  noFill();
  circle(400,400,700);
  noStroke();
  fill(50,100,150);
  circle(uranus_x+400,uranus_y+400,5);
  uranus_theta = uranus_theta + speed_uranus;
  
  //neptune
  neptune_x=+neptune_r*cos(neptune_theta);
  neptune_y=+neptune_r*sin(neptune_theta);
  text('neptune',neptune_x+400,neptune_y+400,1);
  stroke(50,100,200,_alpha);
  noFill(255);
  circle(400,400,740);
  noStroke();
  fill(50,100,200);
  circle(neptune_x+400,neptune_y+400,2.8);
  neptune_theta = neptune_theta + speed_neptune;
  
  //pluto (dwarf planet)
  pluto_x=+pluto_r*cos(pluto_theta)*1.10;
  pluto_y=+pluto_r*sin(pluto_theta)*1.05;
  text('pluto',pluto_x+400,pluto_y+380,1);
  stroke(210,210,210,_alpha);
  noFill(255)
  ellipse(400,380,790,756)
  noStroke();
  fill(230,230,230);
  circle(pluto_x+400,pluto_y+380,1.7);
  pluto_theta = pluto_theta + speed_pluto;
  
  
  //asteroid belt
  fill(210,230,200,100);
  noStroke();
  randomSeed(3000);
  translate(width / 2, height / 2);
  rotate(asteroid_theta);
  for(var a = 0;a<3000;a++){
    testX = random(width) - width/2;
    testY = random(height) - height/2;
    if(pow(testX,2)+ pow(testY,2)< pow(r2,2) &&(pow(testX,2)+ pow(testY,2)> pow(r1,2))) {
      fill(255);
      circle(testX,testY,random(3));
    }
    asteroid_theta -= 0.000005 * speed_star
    }
}