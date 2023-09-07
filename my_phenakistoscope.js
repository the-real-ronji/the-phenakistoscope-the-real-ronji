const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);  //STATIC_FRAME, ANIMATED_FRAME, STATIC_DISK, ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("rocket","png")
  pScope.load_image("rocket2","png")
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
 
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
  scale(0+animation.frame*2) 
  fill(80)
  ellipse(-50+animation.wave()*300,0,50,50)
  pop()

  // translate(0+animation.wave(1)*-80,0)  //wave(3) rocket latches on
  // push()
  // rotate(-230)
  // scale(0+animation.frame*.09)
  // pScope.draw_image("rocket2",0,0)
  // pop()
}

function rockets(x, y, animation, pScope){
  
  translate(100,-930)
  scale(.6)
  rotate(-62)
  
  push()
  pScope.draw_image("rocket",0,animation.wave()*50) // .wave is a cosine wave btw
  pop()
}

function backdrop(x, y, animation, pScope){

  let angleOffset = (360 / SLICE_COUNT) / 1.9
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  noStroke()

  fill(17, 0, 36)
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd); 

  fill(20,0,39)
  arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd); 

  fill(23,0,42)
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd); 

  push()
  fill(40, 3, 46, 200-animation.wave(2)*100) //animation.wave()*200
  ellipse(30-animation.wave(.5)*80,-300-animation.wave(.5)*80,100,100)
  ellipse(-30+animation.wave(.5)*100,-500-animation.wave(.5)*100,120,120)
  ellipse(0-animation.wave(.5)*120,-700-animation.wave(.5)*120,140,140)

  pop()
}

function blackhole(x, y, animation, pScope){

  noStroke()
  // fill(40, 3, 46, 200-animation.wave(2)*100) //animation.wave()*200
  // ellipse(0-animation.wave(.5)*120,-700-animation.wave(.5)*120,140,140)
  
  fill(60, 3, 71)
  ellipse(0,0,400+animation.wave(.1)*50,420+animation.wave(.1)*50)
  fill(55, 3, 66)
  ellipse(0,0,400,380)
  fill(50, 3, 61)
  ellipse(0,0,380,360)
  fill(45, 3, 56)
  ellipse(0,0,320,300)
  fill(40, 3, 51)
  ellipse(0,0,260,280)
  fill(35, 3, 46)
  ellipse(0,0,240,220)  
  fill(30, 3, 41)
  ellipse(0,0,180,200)
  fill(25, 3, 36)
  ellipse(0,0,160,140)
  fill(20, 3, 31)
  ellipse(0,0,100,120)
  fill(15, 3, 26)
  ellipse(0,0,80,60)
  fill(10,3,21)
  ellipse(0,0,40,40)
}