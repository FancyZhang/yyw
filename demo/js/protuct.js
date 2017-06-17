$(function(){
	$("#btn").click(function(){
		location.href = "shopcart.html";
	});
	$(".btn").click(function(e){
		var goodId = $(this).parent().parent().attr("data-good-id");
		var goodName = $(this).parent().children().eq(0).find("a").html();
		var goodPrice = $(this).siblings("p").eq(0).find("span").html();
		var goodSrc = $(this).parent().siblings("dt").children().eq(0).find("img").attr("src");
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		var cartObj = convertCartStrToObj(cartStr);
		//alert(goodPrice);
		//判断该商品是否已经在购物车中存在
		if(goodId in cartObj){
			//如果已存在，那么该商品的数量加1
			cartObj[goodId].num += 1;
		}else{
			//如果不存在，那么将新商品的信息存入
			cartObj[goodId] = {
				name : goodName,
				price : goodPrice,
				num : 1,
				src : goodSrc
			};
		}
		//将新的购物车信息存回cookie
		//将对象转为字符串
		cartStr = convertObjToCartStr(cartObj);
		//存入cookie
		$.cookie("cart",cartStr,{expires : 7,path:"/"});
		alert("已存入cookie");
	});
	
});

function convertCartStrToObj(cartStr){
	//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
	if(!cartStr){
		return {};
	}
	var goods = cartStr.split(":");
	var obj = {};
	for(var i = 0; i < goods.length; i ++){
		var data = goods[i].split(",");
		//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
		obj[data[0]] = {
			name : data[1],
			price : parseFloat(data[2]),
			num : parseInt(data[3]),
			src : data[4]
		}
	}
	return obj;
}
function convertObjToCartStr(obj){
var cartStr = "";
//遍历对象只能用for in
for(var id in obj){
		if(cartStr){
			cartStr += ":";
		}
			cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
	}
		return cartStr;
}

function loadCart(){
	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		var cartObj = convertCartStrToObj(cartStr);
		//获取到购物车中所有商品的数量
		var total = 0;
		for(var id in cartObj){
			total += cartObj[id].num;
		}
		$("#btn").val("购物车(" + total + ")");
}
