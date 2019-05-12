const canvas2 = document.getElementById('Dino');
const ctx = canvas2.getContext('2d');

var canWidth = 680;
var canHeight = 472;

var xpos = 0;
var ypos = 0;

var srcX;
var srcY;

var sheetWidth = 680;
var sheetHeight = 4720;

var cols_dino = 1;
var rows_dino = 10;

var width = sheetWidth / cols_dino;
var height = sheetHeight / rows_dino;

var currentFrame = 0;

var character = new Image();


character.src = "Dino_merge/Dino_walk.png";

canvas2.width = canWidth;
canvas2.height =canHeight;



function updateFrame(){

	currentFrame = ++currentFrame % rows_dino;
	srcY = currentFrame * height;
	srcX = 0;

	ctx.clearRect(xpos, ypos, width, height);
}

function drawImage(){

	updateFrame();

	ctx.drawImage(character, srcX, srcY, width, height, 50
		, 200, 480, 300);
}


setInterval(function(){

	drawImage();
},100);



