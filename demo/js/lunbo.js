$(function(){
$.getJSON("json/lunbo.json",function(date){
	var _html ="";
	for(var i in date){
		 _html += ('<a href="#">'+' <img src="'+ date[i].src +'"/>' + '</a>');	
	}
	$("#banner .bigPic").append(_html);
	var index = 0;
	var timer = 0;
	var $len = $("#banner .bigPic a").length;
	//alert($len);
	var $imgWidth = $("#banner .bigPic a").width();
	//alert($imgWidth);
	for(var i = 0; i <date.length; i ++){//创建圆点
		$("#banner .num").append("<li></li>")
	}
	$("#banner .num li").first().addClass("active")//给第一个圆点添加样式
	var $firstImg = $("#banner .bigPic a").first().clone(true)//复制第一张图片
	$("#banner .bigPic").append($firstImg);
	$("#banner .bigPic").width($("#banner .bigPic a").length * $imgWidth);
	
	//alert($(".bigPic").width())
	//alert($(".bigPic a").length);
	timer = setInterval(autoPlay,1000);
	
	function autoPlay(){
		index ++;
		if(index > $("#banner .bigPic a").length -1){
			index = 1;
			$("#banner .bigPic").css({"left":0});
		};
		$("#banner .bigPic").stop().animate({"left":-index * $imgWidth},300);
		if(index == $len){
			$("#banner .num li").eq(0).addClass("active").siblings().removeClass("active");
		}else{
			$("#banner .num li").eq(index).addClass("active").siblings().removeClass("active");
		}
	}	
	//鼠标移入，暂停自动播放，移出，开始自动播放
	$(".pic").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,3000)
	});
	
	//鼠标划入圆点
    $('#banner .num li').mouseover(function(){
      var _index= $(this).index();
      $('#banner .bigPic').stop().animate({left:-_index * $imgWidth},150);
      $('#banner .num li').eq(_index).addClass('active').siblings().removeClass('active');
    });
	
});

});