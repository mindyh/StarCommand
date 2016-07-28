var startTime = 20;
var time = 0;
var sensor = null; //sensor for p2
var state = null; //state for sensor 
var startLives = 20;
var lives = 0;

function init(){
	timer = startTime;
	//updateLives(startLives);
	//getLives();
	lives = startLives;
}

$(document).ready( function() {
	$('a#start-game').click(function() {
		event.preventDefault();
		$('div#overview-wrapper').fadeOut(500);
		$('.instructions').delay(500).fadeIn(1500);
		$('.status').fadeIn(800);
		playGame();
	});
});

function playGame(){
	init();
	setInterval(function(){updateTimer()},1000);
	displayCommand();
	
	/*while(lives > 0){
		alert('1');
		while(timer > 0) {

			//checkSensor(sensor, state);
			//getLives();
		}
		commandFailed();
	}*/
	
	gameOver();
}

function displayCommand(){
	alert('display command');
	chooseCommand();
	
	var command = "Set <span class='sensor'>" + sensor + "</span> to <span class='setting'>" + state "</span>.";

	$('.instructions').fadeOut();
	$('#command-content').html(command);
	$('.instructions').fadeIn();

}

function updateTimer(){
	timer -= 1;
	$('#timer-content').html(timer);	
}

function chooseCommand(){
	sensor = getSensor();
	state = getState(sensor);
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

function gameOver()
{function() {
	$('.instructions').fadeOut();
	$('#game-over-wrapper').fadeIn();
}}

function commandSuccess()
{
	timer = startTime;
	displayCommand();
}

function commandFailed(){
	timer = startTime;
	displayCommand();
	updateLives(lives-1);
	//getLives();
	
	// update lives onscreen
}

function getLives(){
	alert('should not be here');
	$.ajax({
		async: false,
	  url: 'getLives.php',
	  type: 'post',
	  data: {lives: lives},
	  success: function(output) 
	  {
		lives = output;
		//alert(lives);
		 
	  }, error: function()
	  {
		  alert('lives not updated');
	  }
   });
}

function updateLives(lives)
{
	//alert(lives);
   $.ajax({
	  url: 'updateLives.php',
	  type: 'post',
	  data: {lives: lives},
	  success: function(output) 
	  {
		  //alert('lives: '+ output); 
		 
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
		  alert('success, server says '+output);
		 
	  }, error: function()
	  {
		  alert('something went wrong, rating failed');
	  }
   });
}

