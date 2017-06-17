$(function(){

	//登录页面事件
	//给登录按钮添加点击事件
	$("#btn").click(function(){
		//获取用户输入的登录名和密码
		var usn = $("#username").val();
		var pwd = $("#password").val();
		//校验用户名和密码是否正确
		//获取到cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		users = users.split(":");
		for(var i = 0; i < users.length;i ++){
			var date = users[i].split(",");
			if(date[0] == usn){
				if(date[1] == pwd){
					$.cookie("loginedUsers",usn,{
						expires:7,
						path:"/"
					});
					$.cookie("yes",usn,{expires:1,path:'/'})
					window.location.href = "index.html";
					return;
				}	
			}
		}
		alert("用户名或密码不匹配，请确认后重试。");
	});	
	
	//给去注册按钮添加点击事件
	$("#goRegister").click(function() {
	//跳转到注册页
		window.location.href = "register.html";
	});	
//未完待续
	var juddge= false;
	$("#username").focus(function(){
		if($(this).val() == ""){
			$(".txt_p").html("请输入注册的手机号");
			$(".txt_p").css("color","#f24385");
			juddge = false;
		}
	})	
	$("#username").blur(function(){
		var Val = $(this).val();
		var reg1 =  /^1[34578]\d{9}$/;
		var reg2 = /^[1]\d{10}$/;
//		var reg3 = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})$/;
			if(reg1.test(Val) == true ||reg2.test(Val) == true ||Val == ""){
				$(".txt_p").html("");
				juddge = true;
			}else {
				if(reg1.test(Val) == false){
				$(".txt_p").html("手机号码不正确");
				$(".txt_p").css("color","#f24385");
				juddge = false;
			}
			 if(reg1.test(Val)==true && reg2.test(Val) == false){
				$(".txt_p").html("用户名长度只能在4-16位字符之间");
				$(".txt_p").css("color","#f24385");
				juddge = false;
			}
//
//		else if(reg3.test(val) == flase){
//				$(".txt_p").html("邮箱账号不符合规则");
//				$(".txt_p").css("color","#f24385");
	}
	});
	$("#password").focus(function(){
		if($(this).val() == ""){
			$(".btn_p").html("请输入登录密码");
			$(".btn_p").css("color","#f24385");
			juddge = false;
		}
	});
	$("#password").blur(function(){
		var Val = $(this).val();
		var reg1 = /^\d{6,20}$/;
		var reg2 = /^[a-zA-Z]{6,20}$/;
		var reg3 = /^\W{6,20}$/;
		var reg4 = /^\w{6,20}$/
		var reg5 = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
		if(Val == ""){
			$(".btn_p").html("");
			juddge = false;
		}else{
			if(reg1.test(Val) == true||reg2.test(Val) == true||reg3.test(Val) == true){
				$(".btn_p").html("");
				juddge = true;
			}
			if(reg4.test(Val) == false){
				$(".btn_p").html("密码长度只能在6-20位字符之间");
				$(".btn_p").css("color","#f24385");
				juddge = false;
			}
			if(reg5.test(Val) == true){
				$(".btn_p").html("");
				juddge = true;
			}
		}
	});
	//将字符串转为对象
	function convertStrToObj(str) {
		if(!str) {
			return {};
		}
		var users = str.split(":");
		var res = {};
		for(var i = 0; i < users.length; i++) {
			var userData = users[i].split(",");
			res[userData[0]] = userData[1];
		}
		return res;
	}
	//将对象转为字符串
	function convertObjToStr(obj) {
		var res = "";
		for(var usm in obj) {
			var code = obj[usm];
			if(res) {
				//看是否是第一组用户名和密码信息
				//如果不是，先在前面添加一个：
				res += ":";
			}
			res += usm + "," + code;
		}
		return res;
	}
});				
	