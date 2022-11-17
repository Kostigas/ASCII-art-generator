const characters = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/()1{}[]?-_+~<>i!lI;:,.   ';

let myImg;
// var windowWidth = window.screen.width;
// var windowHeight = window.screen.height;
var imageFile = "naruto128.png";
function preload(){
	myImg = loadImage(imageFile);
}

function setup(){
	//make the canvas square (height is equal to width)
	var cnv = createCanvas(windowHeight, windowHeight);
  	cnv.style('display', 'block');
	background(0);
	// image(myImg, 0, 0, width, height);

	let w = width / myImg.width;
	let h = height / myImg.height;
	myImg.loadPixels();

	for (let i = 0; i < myImg.width; i++) {
		for (let j = 0; j < myImg.height; j++) {
			const pixelIndex = (i + j * myImg.width) * 4;
			const red = myImg.pixels[pixelIndex + 0];
			const green = myImg.pixels[pixelIndex + 1];
			const blue = myImg.pixels[pixelIndex + 2];
			const avg = (red + green + blue) / 3;

			noStroke();
			fill(255);
			
			const len = characters.length;
			const charIndex = floor(map(avg,0,255,len,0));

			textSize(w);
			textAlign(CENTER,CENTER);
			text(characters.charAt(charIndex),i*w + w * 0.5,j*h + h * 0.5);
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
