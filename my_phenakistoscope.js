const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);  //OUTPUT_GIF(1000), STATIC_FRAME, ANIMATED_FRAME, STATIC_DISK, ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("rocket3","png")
  pScope.load_image("meteor3","png")
  
}

function setup_layers(pScope){

  new PLayer(null, 220); 
 
  var backdrop_ = new PLayer(backdrop);
  backdrop_.mode( RING );
  backdrop_.set_boundary( 0, 1000 );

  var pattern_ = new PLayer(pattern);
  pattern_.mode( SWIRL(4) );
  pattern_.set_boundary( 0, 1200 );
  
  var blackhole_ = new PLayer(blackhole);
  blackhole_.mode( RING );
  blackhole_.set_boundary( 0, 250 );

  var inward_ = new PLayer(inward);
  inward_.mode( SWIRL(2) );
  inward_.set_boundary( 0, 1300 );

  var rockets_ = new PLayer(rockets);
  rockets_.mode( RING );
  rockets_.set_boundary( 650, 900 );

}

function inward(x, y, animation, pScope){

  rotate(180)
  scale(0+animation.frame*0.5) 
  fill(80)
  pScope.draw_image("meteor3",-25+animation.wave(2)*500,0)    //animates the meteor as if it is sucked inward

}

function rockets(x, y, animation, pScope){
  scale(0.3)
  pScope.draw_image("rocket3",-500+animation.wave()*1100,-2450)   //wave animation is timed so that it makes it appear like the rocket didges the meteor
}

function backdrop(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 1.9
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  noStroke()

  fill(17, 0, 36) //
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd);   //darker purple background

  fill(30,0,39)   //
  arc(x,y,1450,1450,backgroundArcStart,backgroundArcEnd);   //medium purple background

  fill(43,0,42)   //
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd);     //lighter purple background

  push()
  fill(70, 3, 60, 200-animation.wave(2)*100) 
  ellipse(30-animation.wave(.5)*80,-300-animation.wave(.5)*80,90,90)      //inner pulse orbs
  fill(55, 3, 46, 200-animation.wave(2)*100) 
  ellipse(-30+animation.wave(.5)*100,-500-animation.wave(.5)*100,120,120) //middle pulse orbs
  fill(40, 3, 46, 200-animation.wave(2)*100) 
  ellipse(0-animation.wave(.5)*120,-750-animation.wave(.5)*120,140,140)   //outer pulse orbs
  pop()
}

function pattern (x, y, animation, pScope){
  
  fill(255+animation.frame*100, 229+animation.frame*100, 31+animation.frame*100,0+animation.frame*400)

  let size = 20
  
  translate(-5,0)
  scale(animation.frame)

  push()  
  rotate(45)
  rect(0,-20,size,size)   //apex
  rect(70,-20,size,size)  //top right
  rect(0,50,size,size)  //top left
  rect(140,-20,size,size)   //bottom right
  rect(0,120,size,size)  //bottom left
  pop()
}

function blackhole(x, y, animation, pScope){
  noStroke()
  
  fill(60, 3, 71)
  ellipse(0,0,400+animation.wave(.1)*50,420+animation.wave(.1)*50) //edge of blackhole, slightly pulsing
  
  fill(50, 3, 66)
  ellipse(0,0,400,380)
  fill(40, 3, 56)
  ellipse(0,0,380,360)
  fill(30, 3, 46)
  ellipse(0,0,320,300)
  fill(20, 3, 36)                   //ellipses that make up vortex
  ellipse(0,0,260,280)
  fill(15, 3, 26)
  ellipse(0,0,240,220)  
  fill(12, 3, 16)
  ellipse(0,0,180,200)
  fill(10, 3, 6)
  ellipse(0,0,160,140)
  
}