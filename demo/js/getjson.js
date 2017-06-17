$(function(){
$.getJSON("json/firstfloor.json",function(date){
	var _html ="";
	for(var i in date){
		 _html += ('<a href="#">'+' <img src="'+ date[i].src +'"/>' + '</a>');	
	}
	$(".first_floor .bigPic").append(_html);
	var index = 0;
	var timer = 0;
	var $len = $(".first_floor .bigPic a").length;
	//alert($len);
	var $imgWidth = $(".first_floor .bigPic a").width();
	//alert($imgWidth);
	for(var i = 0; i <date.length; i ++){//创建圆点
		$(".first_floor .num").append("<li></li>")
	}
	$(".first_floor .num li").first().addClass("active")//给第一个圆点添加样式
	var $firstImg = $(".first_floor .bigPic a").first().clone(true)//复制第一张图片
	$(".first_floor .bigPic").append($firstImg);
	$(".first_floor .bigPic").width($(".first_floor .bigPic a").length * $imgWidth);
	
	//alert($(".bigPic").width())
	//alert($(".bigPic a").length);
	timer = setInterval(autoPlay,1000);
	
	function autoPlay(){
		index ++;
		if(index > $(".first_floor .bigPic a").length -1){
			index = 1;
			$(".first_floor .bigPic").css({"left":0});
		};
		$(".first_floor .bigPic").stop().animate({"left":-index * $imgWidth},300);
		if(index == $len){
			$(".first_floor .num li").eq(0).addClass("active").siblings().removeClass("active");
		}else{
			$(".first_floor .num li").eq(index).addClass("active").siblings().removeClass("active");
		}
	}	
	//鼠标移入，暂停自动播放，移出，开始自动播放
	$(".first_floor .pic").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,3000)
	});
	
	//鼠标划入圆点
    $('.first_floor .num li').mouseover(function(){
      var _index= $(this).index();
      $('.first_floor .bigPic').stop().animate({left:-_index * $imgWidth},150);
      $('.first_floor .num li').eq(_index).addClass('active').siblings().removeClass('active');
    });
	$('.com .floor_rightB dt').hover(function(){
		$(this).css("opacity",0.6);
	},function(){
		$(this).css("opacity",1);
	});
	$('.com .floor_right .goods a').hover(function(){
		$(this).css("opacity",0.6);
	},function(){
		$(this).css("opacity",1);
	});
});
});