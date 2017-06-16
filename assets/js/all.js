$(document).ready(function() {
	$('.button-1').click(function(event) {
		$(".product-1").attr({
			"src":"images/small-unobag2-20L-pink.png"
		});
	});
	$('.button-2').click(function(event) {
		$(".product-1").attr({
			"src":"images/small-unobag2-20L-gray.png"
		});
	});
  $('.button-3').click(function(event) {
    $(".size1").attr({
      "src":"images/uno-standard-size.jpg"
    });
    $(".capacity").attr({
      "src":"images/standard.jpg"
    });
  });
  $('.button-4').click(function(event) {
    $(".size1").attr({
      "src":"images/uno2-30L-standard-size.jpg"
    });
    $(".capacity").attr({
      "src":"images/standard2.jpg"
    });
  });
  $('.button-5').click(function(event) {
    $(".size1").attr({
      "src":"images/uno2-20L-standard-size2.jpg"
    });
    $(".capacity").attr({
      "src":"images/standard3.jpg"
    });
  });
  $('.button-6').click(function(event) {
    $(".size1").attr({
      "src":"images/uno2-20L-standard-size.jpg"
    });
    $(".capacity").attr({
      "src":"images/standard4.jpg"
    });
  });
  $(".title-k ").click(function(){
    $(".inner-k").slideToggle();
});
function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey) {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
if (window.Event){
if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}

});
