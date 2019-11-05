'use strict';

let osc;
let dmw;
let pN;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(100, 150, 255);
  osc = new p5.Oscillator("square");

  // osc.setType("");

  // dropdown menu
  createSpan("Select waveform: ");
  dmw = createSelect();
  dmw.option("sine");
  dmw.option("sawtooth");
  dmw.option("square");
  dmw.option("triangle");
  dmw.changed(wave);
}

function draw() {
  pN = noise(frameCount / 10) * 150;

  osc.freq(map(mouseX, 0, width, 30, 1000) + pN);

  osc.amp(map(sin(frameCount / 10.5), -1.5, 1, 0.1, 1));
  // osc.amp(map(mouseY, 0, height, 0.3, 0));
  // text("click to play", width / 2, height / 2);
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

function wave() {
  osc.setType(dmw.value());
}
