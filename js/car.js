//需求：
//1.全选按钮，商品列表被选中，选中添加背景色
//2.若商品都选中，则自动勾选全选按钮
//3.增加数量,小计价格修改,总价格修改
//4.删除商品,清空购物车
$(function() {
	console.log($(".checkall"));
	//全选按钮，商品列表被选中
	$(".checkall").change(function() {
		//全选按钮实现
		$(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
		if($(this).prop("checked")) {
			//全选按钮，商品列表被选中，选中添加背景色
			$(".cart-item").addClass("check-cart-item");
			//结算下选中的几件商品
			$(".amount-sum").children().html($(".j-checkbox:checked").length);
		} else {
			//全选按钮，商品列表没被选中，选中删除背景色
			$(".cart-item").removeClass("check-cart-item");
			//结算下选中的几件商品
			$(".amount-sum").children().html($(".j-checkbox:checked").length);
		}
	});

	$(".j-checkbox").change(function() {
		//若商品都选中，则自动勾选全选按钮
		if($(".j-checkbox:checked").length == $(".j-checkbox").length) {
			$(".checkall").prop("checked",true);
		} else {
			$(".checkall").prop("checked",false);
		}
		
		if($(this).prop("checked")) {
			//商品列表被选中，选中添加背景色
			$(this).parents(".cart-item").addClass("check-cart-item");
			//结算下选中的几件商品
			$(".amount-sum").children().html($(".j-checkbox:checked").length);
			
		} else {
			//商品列表没被选中，选中删除背景色
			$(this).parents(".cart-item").removeClass("check-cart-item");
			//结算下选中的几件商品
			$(".amount-sum").children().html($(".j-checkbox:checked").length);
		}
	});

	//增加数量,小计价格修改
	$(".increment").click(function() {
		//获得商品数量
		var n = $(this).siblings(".itxt").prop("value");
		//console.log(n);
		n++;
		$(this).siblings(".itxt").prop("value",n);
		//获得商品价格
		var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
		//console.log(p);
		//计算商品总价格
		var sum = (p * n).toFixed(2);
		$(this).parents(".p-num").siblings(".p-sum").html("￥" + sum);
		getSum();
	});
	
	//减少数量,小计价格修改
	$(".decrement").click(function() {
		//获得商品数量
		var n = $(this).siblings(".itxt").prop("value");
		//console.log(n);
		n--;
		//获得商品价格
		var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
		//console.log(p);
		//计算商品总价格
		var sum = (p * n).toFixed(2);
		if(n >= 1) {
			$(this).siblings(".itxt").prop("value",n);
			$(this).parents(".p-num").siblings(".p-sum").html("￥" + sum);
		}
		getSum();
	});

	// 用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function() {
        // 先得到文本框的里面的值 乘以 当前商品的单价 
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
	
	getSum();
	
	function getSum() {
	   var count = 0; // 计算总件数 
	   var money = 0; // 计算总价钱
	   $(".itxt").each(function(i, ele) {
	       count += parseInt($(ele).val());
	   });
	   $(".amount-sum em").text(count);
	   $(".p-sum").each(function(i, ele) {
	       money += parseFloat($(ele).text().substr(1));
	   });
	   $(".price-sum em").text("￥" + money.toFixed(2));
    }
	
	$(".p-action").click(function() {
		//删除商品
		$(this).parent().remove();
	});
	
	$(".remove-batch").click(function() {
		//删除选中的商品 
		if($(".j-checkbox:checked")) {
			$(".j-checkbox:checked").parents(".cart-item").remove();
		}
		//全选按钮勾上后删除了商品，按钮不再勾上
		if($(".checkall").prop("checked")) {
			$(".checkall").prop("checked",false);
		}
	});
	
	$(".clear-all").click(function() {
		//清理购物车
		$(".j-checkbox").parents(".cart-item").remove();
		//全选按钮勾上后删除了商品，按钮不再勾上
		if($(".checkall").prop("checked")) {
			$(".checkall").prop("checked",false);
		}
	})
})
