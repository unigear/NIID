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
});