define(["jquery"],function($){
	function goodsList(){
		$(function(){
//搜索框
			$("#serech").click(function(){
				$("#serech").css("display","none")
				$("#input1").css("display","block")
			})
			$("#input1").mouseleave(function(){
				$("#input1").css("display","none")
				$("#serech").css("display","block")
			})
//右边功能栏
			$(".d1").hover(function(){
					$(".d11").css("display","none")
					$(".a1").css("display","block")
			},function(){
					$(".d11").css("display","block")
					$(".a1").css("display","none")
			})
			$(".d2").hover(function(){
					$(".d22").css("display","none")
					$(".a2").css("display","block")
					$("#QRcode").css("display","block").css({top:285,right:45})
			},function(){
					$("#QRcode").css("display","none")
					$(".d22").css("display","block")
					$(".a2").css("display","none")
			})

			$(".d3").hover(function(){
					$(".d33").css("display","none")
					$(".a3").css("display","block")
					$("#QRcode").css("display","block").css({top:325,right:45})
			},function(){
					$("#QRcode").css("display","none")
					$(".d33").css("display","block")
					$(".a3").css("display","none")
			})

			$(".d4").hover(function(){
					$(".d44").css("display","none")
					$(".a4").css("display","block")
			},function(){
					$(".d44").css("display","block")
					$(".a4").css("display","none")
			})
//回到顶部
			$(".d4").on("click",function(){
				$("html,body").animate({scrollTop:0}, 1000);
			})
//分类移动变色
			$(".left").find("a").mouseover(function(){
				$(".left").find("a").attr("class", "");
				$(this).attr("class", 'active');
//小球移动
				$("#littleBall").animate({left:$(".active").position().left + 20,top:56},200);
//显示不同菜单栏
				$("#menu").find("div").css("display",'none').eq($(this).index()).css("display", 'block');
			})
//显示不同子菜单栏
		$("#menuDiv1").find("span").mouseenter(function(){
				$("#menuUl li").css("display","none").eq($(this).index()).css("display","block").animate({height:400},300);
				$(".Ag").animate({opacity:0.4},300);		
		})
		$("#menuUl").mouseleave(function(){
				$("#menuUl").find("li").css("display","none");
				$(".Ag").animate({opacity:1},300);		
		});
//子菜单栏ajax
		$.ajax({
			url:"json/menu.json",
			type:"get",
			success:function(clo){
				var con1 = " ";
				var con2 = " ";
				var con3 = " ";
				var con4 = " ";
					con1+=`
						<p id="menu-div1">
							<a href="">${clo[0].menu1[0]}</a>
							<a href="">${clo[0].menu1[1]}</a>
							<a href="">${clo[0].menu1[2]}</a>
							<a href="">${clo[0].menu1[3]}</a>
							<a href="">${clo[0].menu1[4]}</a>
							<a href="">${clo[0].menu1[5]}</a>
							<a href="">${clo[0].menu2[0]}</a>
							<a href="">${clo[0].menu2[1]}</a>
							<a href="">${clo[0].menu2[2]}</a>
							<a href="">${clo[0].menu2[3]}</a>
							<a href="">${clo[0].menu2[4]}</a>
							<a href="">${clo[0].menu2[5]}</a>
							<a href="">${clo[0].menu2[6]}</a>
							<a href="">${clo[0].menu2[7]}</a>
							<a href="">${clo[0].menu2[8]}</a>
						</p>
						<img src="${clo[0].img}" alt="" id="menu-img1">
					`
					con2+=`
						<p id="menu-div2">
							<a href="">${clo[1].menu1[0]}</a>
							<a href="">${clo[1].menu1[1]}</a>
							<a href="">${clo[1].menu1[2]}</a>
							<a href="">${clo[1].menu1[3]}</a>
							<a href="">${clo[1].menu1[4]}</a>
							<a href="">${clo[1].menu1[5]}</a>
							<a href="">${clo[1].menu1[6]}</a>
							<a href="">${clo[1].menu2[0]}</a>
							<a href="">${clo[1].menu2[1]}</a>
							<a href="">${clo[1].menu2[2]}</a>
							<a href="">${clo[1].menu2[3]}</a>
							<a href="">${clo[1].menu2[4]}</a>
							<a href="">${clo[1].menu2[5]}</a>
							<a href="">${clo[1].menu2[6]}</a>
							<a href="">${clo[1].menu4[0]}</a>
							<a href="">${clo[1].menu4[1]}</a>
							<a href="">${clo[1].menu4[2]}</a>
							<a href="">${clo[1].menu5[0]}</a>
							<a href="">${clo[1].menu5[1]}</a>
							<a href="">${clo[1].menu5[2]}</a>
							<a href="">${clo[1].menu6[0]}</a>
							<a href="">${clo[1].menu6[1]}</a>
							<a href="">${clo[1].menu6[2]}</a>
							<a href="">${clo[1].menu6[3]}</a>
							<a href="">${clo[1].menu6[4]}</a>
							<a href="">${clo[1].menu6[5]}</a>
							<a href="">${clo[1].menu6[6]}</a>
							<a href="">${clo[1].menu6[7]}</a>
							<a href="">${clo[1].menu6[8]}</a>
						</p>
						<img src="${clo[1].img}" alt="" id="menu-img2">						
					`
					con3+=`
						<p id="menu-div3">
							<a href="">${clo[2].menu1[0]}</a>
							<a href="">${clo[2].menu1[1]}</a>
							<a href="">${clo[2].menu1[2]}</a>
							<a href="">${clo[2].menu1[3]}</a>
							<a href="">${clo[2].menu1[4]}</a>
							<a href="">${clo[2].menu1[5]}</a>
							<a href="">${clo[2].menu1[6]}</a>
							<a href="">${clo[2].menu1[7]}</a>
							<a href="">${clo[2].menu1[8]}</a>
							<a href="">${clo[2].menu2[0]}</a>
							<a href="">${clo[2].menu2[1]}</a>
							<a href="">${clo[2].menu2[2]}</a>
							<a href="">${clo[2].menu2[3]}</a>
							<a href="">${clo[2].menu2[4]}</a>
							<a href="">${clo[2].menu2[5]}</a>
							<a href="">${clo[2].menu2[6]}</a>
							<a href="">${clo[2].menu2[7]}</a>
							<a href="">${clo[2].menu2[8]}</a>
						</p>
						<img src="${clo[2].img}" alt="" id="menu-img3">							
					`
					con4+=`
						<p id="menu-div4">
							<a href="">${clo[3].menu1[0]}</a>
							<a href="">${clo[3].menu1[1]}</a>
							<a href="">${clo[3].menu1[3]}</a>
							<a href="">${clo[3].menu1[3]}</a>
							<a href="">${clo[3].menu1[4]}</a>
							<a href="">${clo[3].menu1[5]}</a>
							<a href="">${clo[3].menu1[6]}</a>
							<a href="">${clo[3].menu1[7]}</a>
							<a href="">${clo[3].menu1[8]}</a>
							<a href="">${clo[3].menu1[9]}</a>
							<a href="">${clo[3].men2[0]}</a>
							<a href="">${clo[3].men2[1]}</a>
							<a href="">${clo[3].men2[2]}</a>
							<a href="">${clo[3].menu3[0]}</a>
							<a href="">${clo[3].menu3[1]}</a>
							<a href="">${clo[3].menu3[3]}</a>
							<a href="">${clo[3].menu3[3]}</a>
							<a href="">${clo[3].menu3[4]}</a>
							<a href="">${clo[3].menu3[5]}</a>
							<a href="">${clo[3].menu3[6]}</a>
							<a href="">${clo[3].menu3[7]}</a>
							<a href="">${clo[3].menu3[8]}</a>
						</p>
						<img src="${clo[3].img}" alt="" id="menu-img4">								
						`
				var oMenuUl = document.getElementById("menuUl");
				var aLis = oMenuUl.getElementsByTagName("li")
					aLis[0].innerHTML = con1;
					aLis[1].innerHTML = con2;
					aLis[2].innerHTML = con3;
					aLis[3].innerHTML = con4;
					aLis[4].innerHTML = con1;
					aLis[5].innerHTML = con2;
					aLis[6].innerHTML = con3;
					aLis[7].innerHTML = con4;

			},
			error:function(msg2){
				console.log("msg2");
			}
		})
//领券
			$("#p2").hover(function(){
				$("#p3").css("display","block");
			},function(){
				$("#p3").css("display","none");
			})
//商品分类	
		var clickTime = 1
		$("#goodsChoseSpan1").click(function(){
			if(clickTime == 1){
				$("#goodsChosehide1").stop().animate({height:0},600);;	
				clickTime = 2
				return false;
			}
			if(clickTime == 2){
				$("#goodsChosehide1").stop().animate({height:100},600);;
				clickTime = 1;	
				return false;			
			}
		})
		var clickTime1 = 1
		$("#goodsChoseSpan2").click(function(){
			if(clickTime1 == 1){
				$("#goodsChosehide2").stop().animate({height:0},600);;	
				clickTime1 = 2
				return false;
			}
			if(clickTime1 == 2){
				$("#goodsChosehide2").stop().animate({height:180},600);;
				clickTime1 = 1;	
				return false;			
			}
		})
		var clickTime3 = 1
		$("#goodsChoseSpan3").click(function(){
			if(clickTime3 == 1){
				$("#goodsChosehide3").stop().animate({height:0},600);;	
				clickTime3 = 2
				return false;
			}
			if(clickTime3 == 2){
				$("#goodsChosehide3").stop().animate({height:180},600);;
				clickTime3 = 1;	
				return false;			
			}
		})
		var clickTime4 = 1
		$("#goodsChoseSpan4").click(function(){
			if(clickTime4 == 1){
				$("#goodsChosehide4").stop().animate({height:0},600);;	
				clickTime4 = 2
				return false;
			}
			if(clickTime4 == 2){
				$("#goodsChosehide4").stop().animate({height:100},600);;
				clickTime4 = 1;	
				return false;			
			}
		})
//衣服详细信息ajax
		$.ajax({
			url: "json/infor.json",
			type:"GET",
			success:function(infor){
				var inf ="";
				for(var i =0;i<infor.length;i++){
				inf +=`
				<a href="" class="inforA">
					<div class="inforItems">
						<div class="inforpivdiv">
							<img  class="inforpic" src="${infor[i].img}" alt="" />
						</div>
						<h3>${infor[i].p1}</h3>
						<p>${infor[i].p2}</p>
					<div class="inforspan">
						<span>${infor[i].span1}</span>
						<span>${infor[i].span2}</span>
					</div>
					</div>
				</a>
				`
			}
				$(".goodsInfor").html(inf);
				$(".goodsInfor").find("a:even").attr("href","../fashionShopping.html")
				$(".goodsInfor").find("a:odd").attr("href","../clothes.html")

			},
			error:function(wrong){
				console.log('wrong')
			}
		})
})//window.onload结尾
}
	return{
		goodsList:goodsList
	}
})