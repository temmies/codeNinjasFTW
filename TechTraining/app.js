console.log("Good evening sir");

var title = document.getElementsByTagName("h1")[0];
var para = document.getElementById("purplep");

title.onmouseover = function() {
	title.style.backgroundColor = "yellow";
}

para.onclick = function() {
	para.style.color = "peru";
}
