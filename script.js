
// simple image carousel

$(document).ready(function(){


	$(".right-arrow").click(function(){

		var vispic = $(this).siblings(".pictures").children().filter(":visible");
		var firstpic = $(this).siblings(".pictures").children().first();

		if (vispic.is(':last-child') == true) {
			vispic.hide();
			firstpic.show();
		} else {
			vispic.next().show().children().show();
			vispic.hide();
		}
	});

	$(".left-arrow").click(function(){

		var vispic = $(this).siblings(".pictures").children().filter(":visible");
		var lastpic = $(this).siblings(".pictures").children().last();

		if (vispic.is(':first-child') == true) {
			vispic.hide();
			lastpic.show().children().show();
		} else {
			vispic.prev().show().children().show();
			vispic.hide();
		}
	});

});
