$(function(){
	$(".mark").hover(function(){
		$(".mark_move").css("display","block");
		$(".bigpic").css("display","block");
	},function(){
		$(".mark_move").css("display","none");
		$(".bigpic").css("display","none");
	});
	$(".piclist li").click(function(){
		var $img = $(this).attr("Img");
		//alert($img);
		$(".smallpic a img").attr("src",$img);
		$(".bigpic a img").attr("src",$img);
	});
//	$(".mark").mousemove(function(e){
//		var $disX = e.pageX;
//		var $disY = e.pageY;
//		var $l = $disX - $(".smallpic").offset().left - $(".mark_move").width() / 2;
//		var $t = $disY - $(".smallpic").offset().top- $(".mark_move").height() / 2;
//		if($l < 0){
//			$l = 0;
//		}else if($l > $(".mark").width() - $(".mark_move").width() - 2){
//			$l = $(".mark").width() - $(".mark_move").width() - 2;
//		}
//		if($t < 0){
//			$t = 0;
//		}else if($t > $(".mark").height() - $(".mark_move").height() - 2){
//			$t = $(".mark").height() - $(".mark_move").height() - 2;
//		}
//		$(".mark_move").css({"left":$l,"top":$t});
//		var $percentX = $l / ($(".mark").width() - $(".mark_move").width());
//		var $percentY = $t / ($(".mark").height() - $(".mark_move").height());
//		var $bl = $percentX * ($(".bigpic img").width() - $(".bigpic").width());
//		var $bt = $percentX * ($(".bigpic img").height() - $(".bigpic").height());
//		$(".bigpic img").css({"left":-$bl,"top":-$bt});
//	});
			//给遮罩层添加移动事件
			$(".mark").mousemove(function(e){
				var $x = e.pageX;
				var $y = e.pageY;
				var $l = $(".smallpic").offset().left;
				var $t = $(".smallpic").offset().top;
				var $w = $(".mark_move").width();
				var $h = $(".mark_move").height();
				var $left = $x - $l - $w/2;
				var $top = $y - $t - $h/2;
				
				if($left < 0){
					$left = 0;
				}else if($left > $(".mark").width() - $w -2){
					$left = $(".mark").width() - $w -2
				}
				if($top< 0){
					$top = 0;
				}else if($top > $(".mark").height() - $h -2){
					$top = $(".mark").height() - $h -2;
				}
				var percentX = $left /($(".mark").width() - $w );
				var percentY = $top /($(".mark").height() - $h );
				var $bigleft= - percentX * ($(".bigpic img").width() - $(".bigpic").width());
				var $bigtop = - percentY * ($(".bigpic img").height() - $(".bigpic").height());
				$(".mark_move").css({"left":$left,"top":$top});
				$(".bigpic img").css({"left":$bigleft,"top":$bigtop});
			});
})
