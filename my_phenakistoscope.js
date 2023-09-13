const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK  );  //OUTPUT_GIF(1000), STATIC_FRAME, ANIMATED_FRAME, STATIC_DISK, ANIMATED_DISK
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
  backdrop_.set_boundary( 0, 30 );
  
  var blackhole_ = new PLayer(blackhole);
  blackhole_.mode( RING );
  blackhole_.set_boundary( 0, 30 );

  var objects_ = new PLayer(objects);
  objects_.mode( SWIRL(2) );
  objects_.set_boundary( 0, 1200 );

  var rockets_ = new PLayer(rockets);
  rockets_.mode( RING );
  rockets_.set_boundary( 850, 1000 );

}

function objects(x, y, animation, pScope){
  push()
  noStroke()
  rotate(180)
  scale(0+animation.frame*0.5) 
  fill(80)
  pScope.draw_image("meteor3",-50+animation.wave(3)*300,0)
  pop()
}

function rockets(x, y, animation, pScope){
  scale(0.3)
  pScope.draw_image("rocket3",-600+animation.wave()*600,2300)
}

function backdrop(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 1.9
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  noStroke()

  fill(17, 0, 36)
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd); 

  fill(30,0,39)
  arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd); 

  fill(43,0,42)
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd); 

  push()
  fill(70, 3, 60, 200-animation.wave(2)*100) //animation.wave()*200 //40, 3, 46,
  ellipse(30-animation.wave(.5)*80,-300-animation.wave(.5)*80,90,90)
  fill(55, 3, 46, 200-animation.wave(2)*100) //animation.wave()*200 //40, 3, 46,
  ellipse(-30+animation.wave(.5)*100,-500-animation.wave(.5)*100,120,120)
  fill(40, 3, 46, 200-animation.wave(2)*100) //animation.wave()*200 //40, 3, 46,
  ellipse(0-animation.wave(.5)*120,-750-animation.wave(.5)*120,140,140)

  pop()
}

function blackhole(x, y, animation, pScope){
  noStroke()
  
  fill(60, 3, 71)
  ellipse(0,0,400+animation.wave(.1)*50,420+animation.wave(.1)*50)
  fill(50, 3, 66)
  ellipse(0,0,400,380)
  fill(40, 3, 56)
  ellipse(0,0,380,360)
  fill(30, 3, 46)
  ellipse(0,0,320,300)
  fill(20, 3, 36)
  ellipse(0,0,260,280)
  fill(15, 3, 26)
  ellipse(0,0,240,220)  
  fill(12, 3, 16)
  ellipse(0,0,180,200)
  fill(10, 3, 6)
  ellipse(0,0,160,140)
  
}