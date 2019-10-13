
// simple image carousel

$(document).ready(function(){

	$(".pictures > img").first().show();

	$(".right-arrow").click(function(){

		$(".pictures > img:visible").addClass("current");

		if ($('.current').is(':last-child') == true) {
			$(".current").hide();
			$(".pictures > img").first().show();
			$(".pictures > img").first().addClass("current");
			$(".current").removeClass("current");
		} else {
			$(".current").hide();
			$(".current").next().show();
			$(".current").removeClass("current");
		}
	});

	$(".left-arrow").click(function(){

		$(".pictures > img:visible").addClass("current");

		if ($('.current').is(':first-child') == true) {
			$(".current").hide();
			$(".pictures > img").last().show();
			$(".pictures > img").last().addClass("current");
			$(".current").removeClass("current");
		} else {
			$(".current").hide();
			$(".current").prev().show();
			$(".current").removeClass("current");
		}
	});

});
