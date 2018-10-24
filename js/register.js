define(["jquery","jquery-cookie"],function(){
	function register(){
		$(function(){
			$(".remember").attr("checked",true);
	//一个函数
		function isNum(num){
			if (num >= 0 && num <= 9) {
				return true;
			}else{
				return false;
			}
		}
	//手机号验证
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
		var oRegB = document.getElementById("regB");
		oCodespan.innerHTML = "请点击生成验证码"
		oCode.onblur = function(){		
			var oCodevalue = oCode.value;
			var codeValue = code.innerHTML
			if (oCodevalue == codeValue) {
				oCodespan.innerHTML = "验证成功！"
				con2 = true
			}else{
				oCodespan.innerHTML ="验证码输入错误！"
			}
		}
		//填写密码
		var con3 = false
		var oPd = document.getElementById("password")
		var oPDspan = document.getElementById("PDspan")
		oPd.onblur = function(){
			var oPdvalue = oPd.value
			if(!oPdvalue){
				oPDspan.innerHTML = "请输入密码！"
			}else{
				oPDspan.innerHTML = "√"
				con3 = true;
				if(con1&&con2&&con3){
					oRegB.style.backgroundColor = "blue"
				}else{
					oRegB.style.backgroundColor = "#eee"
				}
			}
		}
		//立即注册
		$("#regB").click(function(){
			return false
		})
		var oRegB = document.getElementById("regB");
		oRegB.onclick = function(){
			var str = `username=${$("#NUMusername").val()}&password=${$("#password").val()}`;
			$.ajax({
					method: "post",
					url: "test.php?type=register",
					data: str,
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})			
		}
})//window.onload
	}//register
	return{
		register:register
	}
})