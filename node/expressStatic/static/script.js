var counterDisplay;
var bildElement;

var count=0;
var zaehleHoch =function zaehleHoch(){
	counterDisplay.innerHTML=count;
	count++;
}

$(document).ready( function(){
	counterDisplay=document.getElementById("counter");
	bildElement=document.getElementById("bild");
	bildElement.onclick=zaehleHoch;
});