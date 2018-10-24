define(["jquery"],function($){
	function main(){
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
				$(".clothes").animate({opacity:0.4},300);		
		})
		$("#menuUl").mouseleave(function(){
				$("#menuUl").find("li").css("display","none");
				$(".clothes").animate({opacity:1},300);		
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
							<a href="goodsList.html">${clo[0].menu1[0]}</a>
							<a href="goodsList.html">${clo[0].menu1[1]}</a>
							<a href="goodsList.html">${clo[0].menu1[2]}</a>
							<a href="goodsList.html">${clo[0].menu1[3]}</a>
							<a href="goodsList.html">${clo[0].menu1[4]}</a>
							<a href="goodsList.html">${clo[0].menu1[5]}</a>
							<a href="goodsList.html">${clo[0].menu2[0]}</a>
							<a href="goodsList.html">${clo[0].menu2[1]}</a>
							<a href="goodsList.html">${clo[0].menu2[2]}</a>
							<a href="goodsList.html">${clo[0].menu2[3]}</a>
							<a href="goodsList.html">${clo[0].menu2[4]}</a>
							<a href="goodsList.html">${clo[0].menu2[5]}</a>
							<a href="goodsList.html">${clo[0].menu2[6]}</a>
							<a href="goodsList.html">${clo[0].menu2[7]}</a>
							<a href="goodsList.html">${clo[0].menu2[8]}</a>
						</p>
						<img src="${clo[0].img}" alt="" id="menu-img1">
					`
					con2+=`
						<p id="menu-div2">
							<a href="goodsList.html">${clo[1].menu1[0]}</a>
							<a href="goodsList.html">${clo[1].menu1[1]}</a>
							<a href="goodsList.html">${clo[1].menu1[2]}</a>
							<a href="goodsList.html">${clo[1].menu1[3]}</a>
							<a href="goodsList.html">${clo[1].menu1[4]}</a>
							<a href="goodsList.html">${clo[1].menu1[5]}</a>
							<a href="goodsList.html">${clo[1].menu1[6]}</a>
							<a href="goodsList.html">${clo[1].menu2[0]}</a>
							<a href="goodsList.html">${clo[1].menu2[1]}</a>
							<a href="goodsList.html">${clo[1].menu2[2]}</a>
							<a href="goodsList.html">${clo[1].menu2[3]}</a>
							<a href="goodsList.html">${clo[1].menu2[4]}</a>
							<a href="goodsList.html">${clo[1].menu2[5]}</a>
							<a href="goodsList.html">${clo[1].menu2[6]}</a>
							<a href="goodsList.html">${clo[1].menu4[0]}</a>
							<a href="goodsList.html">${clo[1].menu4[1]}</a>
							<a href="goodsList.html">${clo[1].menu4[2]}</a>
							<a href="goodsList.html">${clo[1].menu5[0]}</a>
							<a href="goodsList.html">${clo[1].menu5[1]}</a>
							<a href="goodsList.html">${clo[1].menu5[2]}</a>
							<a href="goodsList.html">${clo[1].menu6[0]}</a>
							<a href="goodsList.html">${clo[1].menu6[1]}</a>
							<a href="goodsList.html">${clo[1].menu6[2]}</a>
							<a href="goodsList.html">${clo[1].menu6[3]}</a>
							<a href="goodsList.html">${clo[1].menu6[4]}</a>
							<a href="goodsList.html">${clo[1].menu6[5]}</a>
							<a href="goodsList.html">${clo[1].menu6[6]}</a>
							<a href="goodsList.html">${clo[1].menu6[7]}</a>
							<a href="goodsList.html">${clo[1].menu6[8]}</a>
						</p>
						<img src="${clo[1].img}" alt="" id="menu-img2">						
					`
					con3+=`
						<p id="menu-div3">
							<a href="goodsList.html">${clo[2].menu1[0]}</a>
							<a href="goodsList.html">${clo[2].menu1[1]}</a>
							<a href="goodsList.html">${clo[2].menu1[2]}</a>
							<a href="goodsList.html">${clo[2].menu1[3]}</a>
							<a href="goodsList.html">${clo[2].menu1[4]}</a>
							<a href="goodsList.html">${clo[2].menu1[5]}</a>
							<a href="goodsList.html">${clo[2].menu1[6]}</a>
							<a href="goodsList.html">${clo[2].menu1[7]}</a>
							<a href="goodsList.html">${clo[2].menu1[8]}</a>
							<a href="goodsList.html">${clo[2].menu2[0]}</a>
							<a href="goodsList.html">${clo[2].menu2[1]}</a>
							<a href="goodsList.html">${clo[2].menu2[2]}</a>
							<a href="goodsList.html">${clo[2].menu2[3]}</a>
							<a href="goodsList.html">${clo[2].menu2[4]}</a>
							<a href="goodsList.html">${clo[2].menu2[5]}</a>
							<a href="goodsList.html">${clo[2].menu2[6]}</a>
							<a href="goodsList.html">${clo[2].menu2[7]}</a>
							<a href="goodsList.html">${clo[2].menu2[8]}</a>
						</p>
						<img src="${clo[2].img}" alt="" id="menu-img3">							
					`
					con4+=`
						<p id="menu-div4">
							<a href="goodsList.html">${clo[3].menu1[0]}</a>
							<a href="goodsList.html">${clo[3].menu1[1]}</a>
							<a href="goodsList.html">${clo[3].menu1[3]}</a>
							<a href="goodsList.html">${clo[3].menu1[3]}</a>
							<a href="goodsList.html">${clo[3].menu1[4]}</a>
							<a href="goodsList.html">${clo[3].menu1[5]}</a>
							<a href="goodsList.html">${clo[3].menu1[6]}</a>
							<a href="goodsList.html">${clo[3].menu1[7]}</a>
							<a href="goodsList.html">${clo[3].menu1[8]}</a>
							<a href="goodsList.html">${clo[3].menu1[9]}</a>
							<a href="goodsList.html">${clo[3].men2[0]}</a>
							<a href="goodsList.html">${clo[3].men2[1]}</a>
							<a href="goodsList.html">${clo[3].men2[2]}</a>
							<a href="goodsList.html">${clo[3].menu3[0]}</a>
							<a href="goodsList.html">${clo[3].menu3[1]}</a>
							<a href="goodsList.html">${clo[3].menu3[3]}</a>
							<a href="goodsList.html">${clo[3].menu3[3]}</a>
							<a href="goodsList.html">${clo[3].menu3[4]}</a>
							<a href="goodsList.html">${clo[3].menu3[5]}</a>
							<a href="goodsList.html">${clo[3].menu3[6]}</a>
							<a href="goodsList.html">${clo[3].menu3[7]}</a>
							<a href="goodsList.html">${clo[3].menu3[8]}</a>
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
//衣服ajax
		$.ajax({
			url:"json/data.json",
			type:"GET",
			success:function(res){
				var html = "";

				for(var i = 0;i < res.length;i++){

					html += `<li class = "clothes_item">
							<div class="clothes_pic">
								<a href="../goodsList.html"><img src="${res[i].img}" alt="" 
								style='width:${res[i].width}px;height:${res[i].height}px'/></a>
							</div>
							<div class="clothes_d1">
								<a href=""><p style='width:${res[i].width}px;'>${res[i].p1}</p></a>
							</div>
							<div class="clothes_d2">
								<a href=""><p style='width:${res[i].width}px;'>${res[i].p2}</p></a>
							</div>
					</li>`
				}
				$(".clothes #ul1").html(html);
			},
			error:function(msg){
				console.log('msg')
			}
		})
//猜你喜欢
		$.ajax({
			url:"json/guesslike.json",
			type:"GET",
			success:function(show){
				var showBox = " ";
				for(var i = 0;i < show.length;i++){
					showBox += `
					
						<div class="guess-like">
							<img src="${show[i].img}" alt="" class="guess-like-pic" />
							<p class="guess-like-p1">${show[i].p1}</p>
							<p class="guess-like-p2">${show[i].p2}</p>
						</div>
					
					`
					$("#gl-outside").html(showBox);
				}
			},
			error:function(msg3){
				console.log('msg3')
			}
		})
//猜你喜欢操作
	//自动移动
		var iNow = 0;
		var timer = null;
		var ogloutside = $("#gl-outside");
		var oguesslike = $(".guess-like");
		timer = setInterval(timerInner,2000);
		function timerInner(){
			iNow++;
			ogloutside.stop().animate({left:iNow * -1240},
				function(){
					if(parseInt(ogloutside.css("left")) <= -3720){
						iNow = 0;
						$("#gl-outside").css("left","0")						
					} 
				})
		}


	
	//点击	
		$("#leftgo").add($("#rightgo")).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(timerInner,2000)
		})
		//左键
		var click = 0
		$("#leftgo").click(function(){
				click += 1
				$("#gl-outside").stop().animate({left:click * -1240},400,function(){
					if (parseInt(ogloutside.css("left")) <= -3720) {
						click = 0;
						$("#gl-outside").css("left","0")
					}
				})
		})
		//右键
		var click1 = -3720;
		$("#rightgo").click(function(){
				click1 += 1240
				$("#gl-outside").stop().animate({left:click1},400,function(){
					if (click1 >= 0) {
						click1 = -3720;
						$("#gl-outside").css("left","3720")
					}
				})
		})
	})//window.onload

	}
	return{
		main:main
	}
})