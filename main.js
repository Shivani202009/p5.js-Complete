function preload() {
    
}

function setup() {
    canvas=createCanvas(400,400) 
    canvas.position(100,200) 
    video = createCapture(VIDEO)
    video.hide()

  }

  function draw() {
    image(video,75,50,250,300)
    fill("green")
    stroke("black")
    rect(350,0,50,70)
    fill("red")
    stroke("black")
    rect(340,70,100,70)
    fill("blue")
    stroke("black")
    rect(360,140,100,70)
    fill("green")
    stroke("black")
    rect(350,210,50,70)
    fill("red")
    stroke("black")
    rect(360,280,100,150)
    fill("red")
    stroke("black")
    rect(-50,1,100,150)
    fill("green")
    stroke("black")
    rect(-30,100,100,70)
    fill("blue")
    stroke("black")
    rect(-50,170,100,70)
    fill("red")
    stroke("black")
    rect(1,210,50,160)
    fill("green")
    stroke("black")
    rect(1,330,50,70)
    fill("yellow")
    stroke("black")
    rect(52,350,100,70)
    fill("blue")
    stroke("black")
    rect(153,370,100,70)
    fill("green")
    stroke("black")
    rect(250,350,110,90)
  }