$(function(){
	//注册页面事件
	//给去登录按钮添加点击事件
	$("#goLogin").click(function() {
	//转到登录页面
		location.href = "login.html";
	});

	$("#userName").focus(function(){
		if($(this).val() == ""){
			$(".reg_p").html("请输入手机号");
			$(".reg_p").css("color","#f24385");
			juddge = false;
		}
	});
	$("#userName").blur(function(){
		var Value = $(this).val();
		var re1 = /^1[34578]\d{9}$/;
		var re2 = /^[1]\d{10}$/;
		if(re1.test(Value) == true && re2.test(Value) == true || Value == ""){
				$(".reg_p").html("");
				juddge = true;
		}else { 
				if(re1.test(Value) == false){
				$(".reg_p").html("手机号码不正确");
				$(".reg_p").css("color","#f24385");
				juddge = false;
				}
			 if(re1.test(Value) == true && re2.test(Value) == false){
				$(".reg_p").html("用户名长度只能在4-16位字符之间");
				$(".reg_p").css("color","#f24385");
				juddge = false;
			}
		}
	});
		$("#passWord").focus(function(){
		if($(this).val() == ""){
			$(".reg_btn").html("请输入登录密码");
			$(".reg_btn").css("color","#f24385");
			juddge = false;
		}
	});
	$("#passWord").blur(function(){
		var Val = $(this).val();
		var reg1 = /^\d{6,20}$/;
		var reg2 = /^[a-zA-Z]{6,20}$/;
		var reg3 = /^\W{6,20}$/;
		var reg4 = /^\w{6,20}$/
		var reg5 = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
		if(Val == ""){
			$(".reg_btn").html("");
			juddge = false;
		}else{
			if(reg1.test(Val) == true||reg2.test(Val) == true||reg3.test(Val) == true){
				$(".reg_btn").html("");
				juddge = true;
			}
			if(reg4.test(Val) == false){
				$(".reg_btn").html("密码长度只能在6-20位字符之间");
				$(".reg_btn").css("color","#f24385");
				juddge = false;
			}
			if(reg5.test(Val) == true){
				$(".reg_btn").html("");
				juddge = true;
			}
		}
	});
	$("#conPwd").focus(function(){
		if($(this).val() == ""){
			$(".reg_con").html("请再次输入密码");
			$(".reg_con").css("color","#f24385");
			juddge = false;
		}
	})
	$("#conPwd").blur(function(){
		var Val = $(this).val();
		var Val1 = $("#passWord").val();
		if(Val == ""){
			$(".reg_con").html("");
			juddge = false;
		}else if(Val == Val1){
			$(".reg_con").html("两次密码输入一致");
			$(".reg_con").css("color","#f24385");
			juddge = true;
		}else{
			$(".reg_con").html("两次密码输入不一致");
			$(".reg_con").css("color","#f24385");
			juddge = false;
		}
	});
	
	
	//给注册按钮加事件
	$("#register").click(function(){
		//获取到用户输入的用户名和密码
		var usm = $("#userName").val();
		var code = $("#passWord").val();
		var con = $("#conPwd").val();
//	//用户不能为空
//	
//	//检测密码是否相同
//	//密码不能为空，密码规则
//	if(code !== con){
//	alert("两次输入的密码不相同，请重试！");
//		return;
//	}
	if(juddge == true){
		//检测一下用户是否已经存在
		//获取cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") :"";
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usm in users){
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//将用户添加 到已注册用户列表对象中
			users[usm] = code;
			//将用户信息对象转化回字符串，以便于设置cookie
			usersStr = convertObjToStr(users);
			//设置用户信息cookie
			$.cookie("registerUsers",usersStr,{
				expires:7,
				path:"/"
			});
			alert("注册成功");
			window.location.href = "login.html";
		}
	}else{
		alert("注册失败");
	}
	});
	//获取到已登录的用户名
	/*var loginedUser = $.cookie("loginedUsers");
	if (loginedUser) {
		$("body").append("<p>欢迎回来：" + loginedUser + "</p>");
		var myA = $("<a href='index.html'>注销</a>");
		myA.click(function() {
			var res = $.removeCookie("loginedUsers", {
				path: '/'
			});
			if (!res) {
				alert("注销失败！");
				return false; //阻止默认行为（不让a标签跳转）
			}
		});
		$('body').append(myA);
	} else {
		$("body").append("<a href='index.html'>亲，请登录</a>")
	}*/


	
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
		






















