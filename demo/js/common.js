//nav区
$(function() {
		var have = $.cookie("yes") ? 1 : 0;
	var name = $.cookie("yes");
	if(have){
	$(".in").html('欢迎回来'+'<p style="color:red;">'+name+'</p>');
		$(".zc").html('<a href="javascript:;" class="zx">'+'【注销】'+'</a>')
		$(".zx").click(function(){
			$.removeCookie("yes",{path:"/"});
			location.href = "index.html"
		})
	}
	$(".nav_box .first_li").mouseenter(function() {
		$(this).find(".sort_list").css("display", "block");
	});
	$(".nav_box .first_li").mouseleave(function() {
		$(this).find(".sort_list").css("display", "none");
	});

});
//获取json
$(function(){
	$.getJSON("json/nav.json",function(date){
		for(var i in date){
			var _html = date[i].url;
			$(".list").append(_html);
			var html = date[i].src;
			$(".list1").append(html); 
			var html2 = date[i].src2;
			$(".list2").append(html2); 
			var html3 = date[i].src3;
			$(".list3").append(html3); 
			var html4 = date[i].src4;
			$(".list4").append(html4); 
			var html5 = date[i].src5;
			$(".list5").append(html5); 
			var html6 = date[i].src6;
			$(".list6").append(html6); 
			var html7 = date[i].src7;
			$(".list7").append(html7); 
			var html8 = date[i].src8;
			$(".list8").append(html8); 
			var html9 = date[i].src9;
			$(".list9").append(html9); 
		}
	});
});


