//文本框里面输入内容,按下回车,就可以生成待办事项
//点击待办事项复选框,就可以把当前数据添加到已完成项里面
//点击已完成项复选框,就可以把当前数据添加到待办事项里面
//本页面内容刷新页面不会丢失
$(function() {
	//页面加载完成就渲染
	load();
	
	$("#title").on("keydown", function(event){
		if(event.keyCode == 13) {
			if($(this).val() == "") {
				alert("请输入内容~");
			} else {
				var localData = getData(); 
				//console.log(localData);
				//追加数据
				localData.push({title:$(this).val(), done:false});
				//保存数据
				saveData(localData);
				load();
				$(this).val("");
			}
		}
	});
	
	//点击复选框就进入已完成项，再点击进入未完成项
	$("#todolist,#donelist").on("click","input",function() {
		//获取数据
		var data = getData();
		//console.log(data);
		//获取自定义的索引
		var index = $(this).attr("id");
		//console.log(index); 
		//修改数据
		data[index].done = $(this).prop("checked");
		//console.log(data);
		//保存数据
		saveData(data);
		//重新渲染
		load();
	});
	
	//删除数据
	$("#todolist,#donelist").on("click","a",function() {
		var data = getData();
		var index = $(this).siblings("input").attr("id");
		//console.log(index);
		//删除数据
		data.splice(index, 1);
		//保存数据
		saveData(data);
		//console.log(data);
		//重新渲染
		load();
	});
	
	//获取本地数据
	function getData() {
		var data = localStorage.getItem("todolist");
		if(data != null) {
			return JSON.parse(data);
		} else {
			return [];
		}
	}
	
	//保存数据到本地
	function saveData(data) {
		localStorage.setItem("todolist", JSON.stringify(data));
	}
	
	//将数据渲染到页面中
	function load() {
		var data = getData();
		//console.log(data);
		var todocount = 0;//正在完成项
		var donecount = 0;//已完成项
		//渲染时首先清空ol，ul中的数据
		$("ol, ul").empty();
		$.each(data, function(index,element) {
			if (element.done) {
				$("ul").prepend("<li><input type='checkbox' checked='checked' id="+index+"><p>"+element.title+"</p><a href='javascript:;'></a></li>");
				donecount++;
			} else {
				$("ol").prepend("<li><input type='checkbox' id="+index+"><p>"+element.title+"</p><a href='javascript:;'></a></li>");
				todocount++;
			}
		});
		$("#todocount").text(todocount);
		$("#donecount").text(donecount);
	}
	
})
