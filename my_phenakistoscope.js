const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);  //STATIC_FRAME, ANIMATED_FRAME, STATIC_DISK, ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("rocket","png")
  pScope.load_image("rocket2","png")
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
 
  var blackhole_ = new PLayer(blackhole);
  blackhole_.mode( RING );
  blackhole_.set_boundary( 0, 30 );

  // var objects_ = new PLayer(objects);
  // objects_.mode( SWIRL(1) );
  // objects_.set_boundary( 300, 850 );

  var rockets_ = new PLayer(rockets);
  rockets_.mode( RING );
  rockets_.set_boundary( 850, 1000 );

  // var layer4 = new Player(debris);
  // layer4.mode( RING );
  // layer4.set_boundary( 10, 850 );
}

function objects(x, y, animation, pScope){

  // translate(0,0);  //moves icon to a certain position
  // scale(animation.wave(3)*4); //determines size of icon

  push()
  translate(animation.wave(30),0)
  scale(.08)
  rotate(-46)
  pScope.draw_image("rocket2",0,1) 
  pop()
 
}

function rockets(x, y, animation, pScope){
  
  translate(0,-930)
  scale(.6)
  rotate(-62)
  
  push()
  pScope.draw_image("rocket",0,animation.wave()*50) // .wave is a cosine wave btw
  pop()
}

function blackhole(x, y, animation, pScope){

    // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 1.9
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  
  fill(17, 0, 36)
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  noStroke()

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
  // ellipse(0,0,240,220) 
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

  push()
  fill(35, 3, 46, 200-animation.frame*100) //animation.wave()*200
  ellipse(30-animation.wave(.5)*80,-300-animation.wave(.5)*80,100,100)
  ellipse(-30+animation.wave(.5)*100,-500-animation.wave(.5)*100,120,120)
  ellipse(0-animation.wave(.5)*120,-700-animation.wave(.5)*120,140,140)

  pop()

}

