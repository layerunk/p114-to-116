robyer = 0;
Xtremem = 0;
function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    linky = ml5.poseNet(video, consoler);
    linky.on('pose', depression);
  }
  
  function depression(insecurity){
    if(insecurity.length > 0){
      console.log(insecurity);
      robyer = insecurity[0].pose.nose.y - 5;
      Xtremem = insecurity[0].pose.nose.x - 30 ;
      console.log(Xtremem+ "Xmas instrument");
      console.log(robyer + "whY ?");
    }
  }
  
  function consoler(){
    console.log("Invasion will begin in 5, 4, 3, 2, 1 and ....");
  }
  
  function preload(){
    hit = loadImage("https://i.postimg.cc/PJzrgz22/mostache.png");
  }
  
  function draw(){
    image(video, 0, 0, 300, 300);
    image(hit, Xtremem, robyer, 63, 42);
  }
  
  function tapwater(){
    save("cursedexistence.png");
  }