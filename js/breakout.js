/*
 * 
 * 		Breakout Clone in JavaScript
 * 		
 * 		Krzysztof Dobrzyński 2017
 * 
 */

// Global variables
var canvas = document.getElementById("breakoutCanvas");
var context = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballSpeed = 4;
var dx = ballSpeed;
var dy = -ballSpeed;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 7;
var brickColumnCount = 7;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickWidth = (canvas.width - brickOffsetLeft * 4) / brickRowCount; // 75;
var brickHeight = 20;
var score = 0;
var lives = 3;

// Bricks
var bricks = []; // column, row
for(c = 0; c < brickColumnCount; ++c) 
{
	bricks[c] = [];
	for(r = 0; r < brickRowCount; ++r) 
	{
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
}

// Add key handlers
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// Key Down Event
function keyDownHandler(e) 
{
	if(e.keyCode == 39) 
	{
		rightPressed = true;
	}
	else if(e.keyCode == 37) 
	{
		leftPressed = true;
	}
}

// Key Up Event
function keyUpHandler(e) 
{
	if(e.keyCode == 39) 
	{
		rightPressed = false;
	}
	else if(e.keyCode == 37) 
	{
		leftPressed = false;
	}
}

// Mouse Move Event
function mouseMoveHandler(e) 
{
	var relativeX = e.clientX - canvas.offsetLeft;
	if((relativeX > 0) && (relativeX < canvas.width)) 
	{
		paddleX = relativeX - (paddleWidth / 2);
	}
}

// Collision detector - detects if collision occures
function collisionDetection() 
{
	for(c = 0; c < brickColumnCount; ++c) 
	{
		for(r = 0; r < brickRowCount; ++r) 
		{
			var b = bricks[c][r];
			if(b.status == 1) 
			{
				if((x > b.x) && (x < b.x + brickWidth) && (y > b.y) && (y < b.y+brickHeight)) 
				{
					dy = -dy;
					b.status = 0;
					score++;
					speedUpBall();
					if(score == brickRowCount * brickColumnCount) 
					{
						alert("YOU WON!");
						document.location.reload();
					}
				}
			}
		}
	}
}

// Makes ball go faster
function speedUpBall()
{
	if(score % 10 != 0) return; // Speed up after each 10 broken blocks
	
	if(dx < 0) dx--;
	else dx++;
	
	if(dy < 0) dy--;
	else dy++;
}

// Draw Ball
function drawBall() 
{
	context.beginPath();
	context.arc(x, y, ballRadius, 0, Math.PI*2);
	context.fillStyle = "#0095DD";
	context.fill();
	context.closePath();
}

// Draw Paddle
function drawPaddle() 
{
	context.beginPath();
	context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	context.fillStyle = "#0095DD";
	context.fill();
	context.closePath();
}

// Draw Bricks   
function drawBricks() 
{
	for(c = 0; c < brickColumnCount; ++c) 
	{
		for(r = 0; r < brickRowCount; ++r) 
		{
			if(bricks[c][r].status == 1) 
			{
				var brickX = (r * (brickWidth+brickPadding)) + brickOffsetLeft;
				var brickY = (c * (brickHeight+brickPadding)) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				context.beginPath();
				context.rect(brickX, brickY, brickWidth, brickHeight);
				context.fillStyle = "#0095DD";
				context.fill();
				context.closePath();
			}
		}
	}
}

// Draw Score
function drawScore() 
{
	context.font = "16px Arial";
	context.fillStyle = "#0095DD";
	context.fillText("Score: " + score, 8, 20);
}

// Draw Lives
function drawLives() 
{
	context.font = "16px Arial";
	context.fillStyle = "#0095DD";
	context.fillText("Lives: " + lives, canvas.width - 65, 20);
}

// Main Draw Method
function draw() 
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();
	
	if((x + dx > canvas.width-ballRadius) || (x + dx < ballRadius)) 
	{
		dx = -dx;
	}
	
	if(y + dy < ballRadius) 
	{
		dy = -dy;
	}
	else if(y + dy > canvas.height - ballRadius) 
	{
		if((x > paddleX) && (x < paddleX + paddleWidth)) 
		{
			dy = -dy;
		}
		else 
		{
			lives--;
			if(!lives) 
			{
				alert("GAME OVER !!!");
				document.location.reload();
			}
			else 
			{
				x = canvas.width / 2;
				y = canvas.height - 30;
				dx = 3;
				dy = -3;
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	
	if((rightPressed) && (paddleX < canvas.width-paddleWidth)) 
	{
		paddleX += 7;
	}
	else if((leftPressed) && (paddleX > 0)) 
	{
		paddleX -= 7;
	}
	
	x += dx;
	y += dy;
	requestAnimationFrame(draw);
}

draw();
