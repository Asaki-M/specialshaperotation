$(function() {
	
	$(".navigator ul li").on("mouseenter",function() {
		//alert(11);
		//获取当前li的索引
		var index = $(this).index();
		console.log(index);
		//如果小于当前li的索引值，左边缩小大盒子减去图片宽度再除于剩余图片数
		$(".navigator ul li:lt("+ (index+1) +")").each(function(i) {
			$(this).stop(true).animate({
				"left":100*i
			},300);
		});
		//如果小于当前li的索引值，右边缩小大盒子加上图片宽度再除于剩余图片数
		$(".navigator ul li:gt("+ index +")").each(function(i) {
			$(this).stop(true).animate({
				"left":500 + 100 * (index + i)
			},300);
		});
		
		//碰到的元素变亮，其他元素变暗
		$(this).children(".mask").stop(true).fadeOut();
		$(this).siblings().children(".mask").stop(true).fadeIn();
	});
	//鼠标离开大盒子，所有图片回归原来的位置
	$(".navigator").mouseleave(function() {
		$(".navigator ul li").each(function(i) {
			$(this).animate({
				"left":200*i
			},300);
			
		});
		$(".mask").fadeIn();
	})
	
})