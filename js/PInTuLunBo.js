$(function() {
	//alert(11);
	var idx = 0;//信号量
	var lock = true;//函数节流锁

	//右按钮事件
	$(".rightBtn").click(function() {
		//alert(11);

		if (!lock) {
			return;
		}
		lock = false;
		
		idx++;
		if (idx > $("li").length-1) {
			idx = 0;
		}
		//创建100个小div
		for (var i = 0; i < 100; i++) {
			$("<div></div>").css({
				"width":56,
				"height":30,
				"position":"absolute",
				"top":parseInt(i/10)*30,
				"left":(i%10)*56,
				"background-image":"url('"+$("img").eq(idx).attr("src")+"')",
				"background-position":((-i%10)*56)+"px"+" "+(-parseInt(i/10)*30)+"px",
				"display":"none"
			}).appendTo(".trick");
		}
		
		//让所有拼图盒子出现
		$(".trick div").each(function(i) {
			$(this).delay(Math.random() * 600).fadeIn();
			setTimeout(function() {
				$(".trick").empty();
				$("li").eq(idx).addClass("cur").siblings().removeClass("cur");
				lock = true;
			},1200);
		});
	});
	
	//左按钮事件
	$(".leftBtn").click(function() {
		var imgUrl = $("img").eq(idx).attr("src");
		//alert(11);
		if (!lock) {
			return;
		}
		lock = false;
		
		idx--;
		if (idx < 0) {
			idx = $("li").length - 1;
		}
		//创建100个小div
		for (var i = 0; i < 100; i++) {
			$("<div></div>").css({
				"width":56,
				"height":30,
				"position":"absolute",
				"top":parseInt(i/10)*30,
				"left":(i%10)*56,
				"background-image":"url('"+$("img").eq(idx).attr("src")+"')",
				"background-position":((-i%10)*56)+"px"+" "+(-parseInt(i/10)*30)+"px",
				"display":"none"
			}).appendTo(".trick");
		}
		
		//让所有拼图盒子出现
		$(".trick div").each(function(i) {
			$(this).delay(Math.random() * 600).fadeIn();
			setTimeout(function() {
				$(".trick").empty();
				$("li").eq(idx).addClass("cur").siblings().removeClass("cur");
				lock = true;
			},1200);
		});
	});
})