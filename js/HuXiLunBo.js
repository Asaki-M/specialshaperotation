$(function() {
	/*alert(11);*/
	var index = 0;
	
	//下一张按钮
	$(".right").on("click",function() {
		//当前图片淡出
		$(".imgs li").eq(index).fadeOut("fast");
		//当前圆点状态取消
		$(".nav_circle li").eq(index).removeClass("cur");
		index++;
		if(index > 3) {
			index = 0;
		}
		//下一个圆点状态显示
		$(".nav_circle li").eq(index).addClass("cur");
		//下一张图片淡入
		$(".imgs li").eq(index).fadeIn("fast");
	});
	
	//上一张按钮
	$(".left").on("click",function() {
		//当前图片淡出
		$(".imgs li").eq(index).fadeOut("fast");
		//当前圆点状态取消
		$(".nav_circle li").eq(index).removeClass("cur");
		index--;
		if(index < 0) {
			index = 3;
		}
		//上一个圆点状态显示
		$(".nav_circle li").eq(index).addClass("cur");
		//上一张图片淡入
		$(".imgs li").eq(index).fadeIn("fast");
	});
	
	//点击圆点切换照片
	$(".nav_circle li").on("click",function() {
		$(this).addClass("cur").siblings().removeClass("cur");
		//当前照片淡出
		$(".imgs li").eq(index).fadeOut();
		//获取当前点击的索引
		index = $(this).index();
		//当前索引的图片淡入
		$(".imgs li").eq(index).fadeIn();
	})
})