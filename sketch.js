let noiseTime = 0;
let noiseTam = 10;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  let fillColor = color(random(255), random(255), random(255));
  fill(fillColor);

  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 5), 0, 1, 0, windowHeight);
  let tam = map(noise(noiseTam), 0, 1, 20, 100);

  circles.push({ posX, posY, tam, fillColor });

  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].fillColor);
    circle(circles[i].posX, circles[i].posY, circles[i].tam);
  }
  noiseTime += 0.01;
  noiseTam += 0.005;

  for (let i = 0; i < 5; i++) {
    let additionalFillColor = color(random(255), random(255), random(255));
    let additionalPosX = map(noise(noiseTime + i), 0, 1, 0, windowWidth);
    let additionalPosY = map(noise(noiseTime + 5 + i), 0, 1, 0, windowHeight);
    let additionalTam = map(noise(noiseTam + 1 + i), 0, 1, 20, 100);

    circles.push({
      posX: additionalPosX,
      posY: additionalPosY,
      tam: additionalTam,
      fillColor: additionalFillColor,
    });
  }
}
