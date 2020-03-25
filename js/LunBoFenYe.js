$(function() {
	var idx = 0;
	$(".nav li").click(function() {
		idx = $(this).index()-1;
		$(".content>ul").eq(idx).addClass("show").siblings().removeClass("show");
		//console.log(idx);
	});
	$(".nav .next").click(function() { 
		if (idx >= 2) {
			console.log(idx);
		} else {
			idx++;
			$(".content>ul").eq(idx).addClass("show").siblings().removeClass("show");
		}
	});
	$(".nav .pre").click(function() { 
		if (idx <= 0) {
			console.log(idx);
		} else {
			idx--;
			$(".content>ul").eq(idx).addClass("show").siblings().removeClass("show");
		}
	})
})