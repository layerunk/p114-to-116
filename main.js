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
      console.log(insecurity[0].pose.nose.x + "X mas day");
      console.log(insecurity[0].pose.nose.y + "Y Mr./Mrs ?");
    }
  }
  
  function consoler(){
    console.log("Initialization will begin in 5, 4, 3, 2, 1 and ....");
  }
  
  function preload(){
  }
  
  function draw(){
    image(video, 0, 0, 300, 300);
  }
  
  function tapwater(){
    save("cursedexistence.png")
  }