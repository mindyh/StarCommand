<!DOCTYPE html>

<html>
<head>
<title>Star Command</title>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


<!--STYLES-->
<link rel="stylesheet" type="text/css" href="style.css" media="all" />

<link rel="stylesheet" type="text/css" href="styles/animate.min.css" media="all" />

<link href='http://fonts.googleapis.com/css?family=Orbitron:400,700|Open+Sans' rel='stylesheet' type='text/css'>

<!--SCRIPTS-->
<script src="jquery-1.8.3.min.js"></script>
<script src="js.js"></script>


</head>

<body>

<!--Wrapper for sticky footer-->

<div id="sticky-body-wrapper">

<!---
HEADER
--->
<div id="header-wrapper" class="animated fadeInDown">
<header class="clearfix">

<h1>Star<span id="logo-star">&nbsp;</span>Command</h1>

</header>
</div><!--close header wrapper-->

<!---
BODY
--->

<div id="body-wrapper">
<div id="body" class="clearfix">



<!--Overview-->

<div id="overview-wrapper" class="modal-wrapper animated fadeInUp">
<div id="overview" class="modal">

<h3>Welcome to Star Command, Captain</h3>

<p>Execute the computer&#39;s instructions to keep your vessel underway. May the G-Forces be with you.</p>

<a class="button animated pulse" id="start-game" href="#">Assume Command</a>

</div><!--close overview-->
</div><!--close modal wrapper-->



<!--Game Over-->

<div id="game-over-wrapper" class="modal-wrapper hide">
<div id="game-over" class="modal">

<h3>Game Over</h3>

<p>The dangers of deep space defeated you, captain. Better luck next time.</p>

<p>You lived for TIME, and executed XX commands successfully.</p>

<a class="button" id="replay" href="#">Play Again</a>

</div><!--close overview-->
</div><!--close modal wrapper-->



<!--Commands-->

<div class="instructions animated hide">

	<h2 id="command-content">Set 
		<span class="sensor">Music Taste</span>
		 to 
		<span class="setting">better</span>
	</h2>

</div><!--close instructions-->



<!--Status updates-->

<div class="status hide clearfix">

	<!--Timer-->
	<div id="timer" class="status-block">
	<h4>Time</h4>
	<h3 id="timer-content" class=""></h3>

	</div><!--close timer-->

	<!--Lives-->
	<div id="lives" class="status-block">
	<h4>Lives</h4>
	<h3 id="life-count"></h3>

	</div><!--close lives-->

</div><!--close status-->


</div><!--close body-->
</div><!--close body wrapper-->

</div><!--close sticky body wrapper-->

<!---
FOOTER
--->
<div id="footer-wrapper">
<footer class="clearfix">

<p id="pot">Potentiometer: <span id="pot_val"></span></p>

<p>Mindy Huang | Chris Ling | Jeff Barrera | Richard Lui</p>

</footer>
</div><!--close footer wrapper-->

</body>
</html>

























