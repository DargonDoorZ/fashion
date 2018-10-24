define(["jquery","jquery-cookie"],function($){
	function login(){
		$(function(){
	//触碰显示		
			$(".ler").mouseenter(function(){
				$(".ler").stop().animate({left:35},400,function(){
					$(".chu").css("display","block");
				});
				
			})
			$(".ler").mouseleave(function(){
				$(".ler").stop().animate({left:197},400,function(){
					$(".chu").css("display","none")
				});
			})	
	//点击切换方式
			$(".logTit").find("a").click(function(){
				$(".log2").find(".aaa").css("display", 'none').eq($(this).index()).css("display", 'block');			
			})	
	//点击切换登陆方式				
			$(".NUM").find("li").click(function(){
				$(".NUM").find("div").css("display", 'none').eq($(this).index()).css("display", 'block');			
			})		
	//默认选中
			$(".inpt1").attr("checked",true);
	//一个函数
		function isNum(num){
			if (num >= 0 && num <= 9) {
				return true;
			}else{
				return false;
			}
		}
	//QR用户名验证
		var is1 = false;
		var is2 = false;
		var oQRusername = document.getElementById("QRusername");
		var oQRUNspan =document.getElementById("QRUNspan");
		
		oQRusername.onblur = function(){
		var oQRUNvalue = oQRusername.value.replace(/ /gi," ");	
			oQRusername.value = oQRUNvalue;
			if(!oQRUNvalue){
				oQRUNspan.innerHTML = "用户名不能为空"
			}else if(oQRUNvalue[0] != 1){
				oQRUNspan.innerHTML = "请输入正确的手机号";
			}else if(oQRUNvalue.length != 11){
				oQRUNspan.innerHTML = "手机号的长度为11位";
			}else{
				var isYes = true;
				for(var i = 0;i < oQRUNvalue.length;i++){
					if(!isNum(oQRUNvalue[i])){
						isYes = false;
						break;
					}
				}
				if(isYes){
					oQRUNspan.innerHTML = "√"
					is1 = true;
				}else{
					oQRUNspan.innerHTML = "请输入正确的手机号";
				}
			}
		}

	//QR密码操作
		var oQRpassword = document.getElementById("QRpassword");
		var oQRPDspan =document.getElementById("QRPDspan");	
		var oLoginA = document.getElementById("loginInA")
		oQRpassword.onblur = function(){
			var oQRPDvalue = oQRpassword.value.replace(/ /gi," ");
			oQRpassword.value = oQRPDvalue;
			if(!oQRPDvalue){
				oQRPDspan.innerHTML = "请输入密码";
			}else if(oQRPDvalue.length < 6 || oQRPDvalue.length > 20){
				oQRPDspan.innerHTML = "密码应为6~20位";
			}else{
				oQRPDspan.innerHTML = "√";
				is2 = true;
				if(is1&&is2){
					oLoginA.style.backgroundColor = "blue"
				}else{
					oLoginA.style.backgroundColor = "#eee"
				}
			}
		}		
	//num用户名验证
		var con1 = false
		var oNUMusername = document.getElementById("NUMusername");
		var oNUMUNspan =document.getElementById("NUMUNspan");
		
		oNUMusername.onblur = function(){
		var oNUMUNvalue = oNUMusername.value.replace(/ /gi," ");	
			oNUMusername.value = oNUMUNvalue;
			if(!oNUMUNvalue){
				oNUMUNspan.innerHTML = "手机号不能为空"
			}else if(oNUMUNvalue[0] != 1){
				oNUMUNspan.innerHTML = "请输入正确的手机号";
			}else if(oNUMUNvalue.length != 11){
				oNUMUNspan.innerHTML = "手机号的长度为11位";
			}else{
				var isYes = true;
				for(var i = 0;i < oNUMUNvalue.length;i++){
					if(!isNum(oNUMUNvalue[i])){
						isYes = false;
						break;
					}
				}
				if(isYes){
					oNUMUNspan.innerHTML = "√"
					con1 = true;
				}else{
					oNUMUNspan.innerHTML = "请输入正确的手机号";
				}
			}
		}
	//生成验证码
		function born(){
				var code = document.getElementById("ranSpan");
				var s = "";
				var str = "qwertyuiopasdfghjklzxcvbnm0123456789";
			for (var i = 0; i < 4; i++) {
				var index = Math.floor(Math.random()*(str.length-1));
				s += str[index];
			}
			code.innerHTML = s;
			}
			born()
			$("#changeA").click(function(){
				born();
				return false
			})
	//核实验证码
		var con2 = false
		var code = document.getElementById("ranSpan")
		var oCode = document.getElementById("NUMcode");
		var oCodespan = document.getElementById("codeSpan");
		var oLoginB = document.getElementById("loginInB");
		oCodespan.innerHTML = "请点击生成验证码"
		oCode.onblur = function(){		
			var oCodevalue = oCode.value;
			var codeValue = code.innerHTML
			if (oCodevalue == codeValue) {
				oCodespan.innerHTML = "验证成功！"
				con2 = true
				if(con1&&con2){
					oLoginB.style.backgroundColor = "blue"
				}else{
					oLoginB.style.backgroundColor = "#eee"
				}
			}else{
				oCodespan.innerHTML ="验证码输入错误！"
			}
		}
	//账号密码进行登录
		$("#loginInA").click(function(){
			return false
		})
		var oLoginInA = document.getElementById("loginInA")
		oLoginInA.onclick = function(){ 		
			var str = `username=${$("#QRusername").val()}&password=${$("#QRpassword").val()}`;
				$.ajax({
					method: "post",
					url: "test.php?type=login",
					data: str, 
					success: function(data){
						alert(1);
					},
					error: function(msg){
						alert(msg);
					}
				})			
		}
	//动态密码登录
		$("#loginInB").click(function(){
			return false
		})
		var oLoginInB = document.getElementById("loginInB")
		oLoginInB.onclick = function(){ 	
			var str = `username=${$("#NUMusername").val()}`;
				$.ajax({
					method: "post",
					url: "test1.php?type=login",
					data: str, 
					success: function(data){
						setTimeout(function(){
							$("#alertBox").css("display","block")
						},100)
					},
					error: function(msg){
						alert(msg);
					}
				})			
		}

})//window.onload
}//login
	return{
		login:login
	}
})