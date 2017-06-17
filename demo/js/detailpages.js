$(function(){
	$(".mainlb li").click(function(){
		var i = $(this).index();
		$(".mainlt .mirror .smallImg").eq(i).fadeIn().siblings().fadeOut();
	})
	var $objsmallImg = $(".mainlt .mirror .smallImg");//小图
	var $objsmallCursor = $(".mainlt .mirror .smallImg .drag");//小图可视区
	var $objbigImg = $(".bigCursor img")//大图
	var $objbigCursor = $(".bigCursor")//大图可视区
	$objsmallImg.mousemove(function(e){
		//console.log($objsmallImg.offset().top);
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var ev = e||window.event;
		var j = $(this).index();
		$objsmallCursor.eq(j).show();
		$objbigCursor.eq(j).show().animate({
			"width":280,
			"height":280,
			"left":420,
			"top":15
		},500)
		$objsmallCursor.outerWidth($objsmallImg.outerWidth() / $objbigImg.outerWidth() * $objbigCursor.outerWidth());
		$objsmallCursor.outerHeight($objsmallImg.outerHeight() / $objbigImg.outerHeight() * $objbigCursor.outerHeight());
		var scale = $objbigCursor.outerWidth()/$objsmallCursor.outerWidth();
		var left = ev.clientX - $objsmallImg.offset().left - $objsmallCursor.outerWidth()/2;
		var top = ev.clientY - 201- $objsmallCursor.outerHeight()/2 + scrollTop;
		console.log($objsmallImg.offset().top)
		var maxL = $objsmallImg.outerWidth()-$objsmallCursor.outerWidth();
		var maxT = $objsmallImg.outerHeight()-$objsmallCursor.outerHeight();
		if(left<=0){
			left = 0;
		}else if(left>=maxL){
			left = maxL;
		}
		if(top<=0){
			top=0;
		}else if(top>=maxT){
			top=maxT;
		}
		$objsmallCursor.eq(j).css({
			"top":top,
			"left":left
		})
		$objbigImg.eq(j).css({
			"top":-top*scale,
			"left":-left*scale
		})
	})
	//放大镜鼠标离开时
	$objsmallImg.mouseleave(function(){
		var m = $(this).index();
		$objsmallCursor.eq(m).hide();
		$objbigCursor.eq(m).hide().stop().animate({"width":80,"height":80,"left":200,"top":200});
	})
});