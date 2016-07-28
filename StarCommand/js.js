var startTime = 5;
var time = 0;
var sensor = null; //sensor for p2
var state = null; //state for sensor 
var startLives = 2;
var lives = 0;

var temp = null;

function init(){
	timer = startTime;
	updateLives(startLives);
	getLives();

}

$(document).ready( function() {
	init();
	var json = '{ "name" : "pot", "value" : 2 }';
	updateState(json);


	$('a#start-game').click(function() {
		event.preventDefault();
		$('div#overview-wrapper').fadeOut(500);
		$('.instructions').delay(500).fadeIn(1500);
		$('.status').fadeIn(800);
		playGame();
	});

	$('a#replay').click(function() {
		init();
		event.preventDefault();
		$('div#game-over-wrapper').fadeOut(500);
		$('.instructions').delay(500).fadeIn(1500);
		$('.status').fadeIn(800);
		playGame();
	});
});


function playGame(){
	//init();
	var timerInterval = setInterval(function(){
		updateTimer();
	},1000);
	
	var livesInterval = setInterval(function(){
		getLives();
	},10000);
	
	var gameInterval = setInterval (function() {
		if(lives <= 0 ) { 
			gameOver();
			clearInterval(gameInterval);
			clearInterval(timerInterval);
			clearInterval(livesInterval);
		}
		if (timer > 0) {
			//checkSensor(sensor, state);
		} else {
			commandFailed();
		}
	}, 100);
}

function displayCommand(){
	
	$('.instructions').fadeOut(800);
	chooseCommand();
	$('span.sensor').html(sensor);
	$('span.setting').html(state);
	$('.instructions').fadeIn(900);

}

function updateTimer(){
	timer -= 1;
	$('#timer-content').html(timer);

	getPotState();
	$('#pot_val').html(temp);
		
}

function chooseCommand(){
	getSensor();
	getState(sensor);
}

function getSensor()
{
	$.ajax({
	  async: false,
	  url: 'getSensor.php',
	  type: 'post',
	  data: {},
	  success: function(output) 
	  {
		sensor = output;
	  }, error: function()
	  {
		  alert('couldnt get sensor');
	  }
   });
}

function getState(sensor)
{
	var allStates = null;
	$.ajax({
	  async: false,
	  url: 'getState.php',
	  type: 'post',
	  data: {sensor: sensor},
	  success: function(output) 
	  {
		allStates = output;
	  }, error: function()
	  {
		  alert('couldnt get state');
	  }
   });
   
  var statesArr = allStates.split(" ");
  var randIndex = Math.floor((statesArr.length)*Math.random());
  state = statesArr[randIndex];
}

function getPotState()
{
	$.ajax({
	  async: false,
	  url: 'getPotState.php',
	  type: 'post',
	  data: {},
	  success: function(output) 
	  {
		temp = output;
	  }, error: function()
	  {
		  alert('couldnt get state');
	  }
   });
}

function updateState(json)
{	
	$.ajax({
	  url: 'updateState.php',
	  type: 'post',
	  data: {json : json},
	  success: function(output) 
	  {
		alert('output: ' + output);
	  }, error: function()
	  {
		  alert('couldnt get state');
	  }
   });

}

function gameOver()
{
	$('.instructions').stop().hide();
	$('.status').fadeOut(800);
	$('#game-over-wrapper').fadeIn();

}

function commandSuccess()
{
	timer = startTime;
	displayCommand();
}

function commandFailed(){
	timer = startTime;
	displayCommand();
	updateLives(lives-1);
	getLives();
	
	// update lives onscreen
}

function getLives(){
	$.ajax({
	  async: false,
	  url: 'getLives.php',
	  type: 'post',
	  data: {},
	  success: function(output) 
	  {
		lives = output;
	  }, error: function()
	  {
		  alert('lives not gotten');
	  }
   });
   $('#life-count').html(lives);
}

function updateLives(update)
{
   $.ajax({
	  url: 'updateLives.php',
	  type: 'post',
	  data: {lives: update},
	  success: function(output) 
	  {		 
	  }, error: function()
	  {
		  alert('lives not updated');
	  }
   });
}

function checkSensor(sensor, state) {
   $.ajax({
	  url: 'checkSensor.php',
	  type: 'post',
	  data: {sensor: sensor, state: state},
	  success: function(output) 
	  {
		if(output == 'true') commandSuccess();
		 
	  }, error: function()
	  {
		  alert('something went wrong, rating failed');
	  }
   });
}

