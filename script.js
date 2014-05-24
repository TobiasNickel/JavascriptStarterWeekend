var counterDisplay=document.getElementById("counter");
var bildElement=document.getElementById("bild");

var count=0;
var zaehleHoch =function zaehleHoch(){
	counterDisplay.innerHTML=count;
	count++;
}
bildElement.onclick=zaehleHoch;