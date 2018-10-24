define(["jquery","jquery-cookie","parabola"],function($,parabola){
	function fashionShopping(){
		$(function(){
		//放大镜鼠标移动
			$("#touch").hover(function(){
				$("#changeBig").css("display","block");
				$("#square").css("display","block");
			},function(){
				$("#changeBig").css("display","none")
				$("#square").css("display","none");
			})
			var oSquare = document.getElementById("square");
			var oTouch = document.getElementById("touch");
			var oIMG = document.getElementById("IMG");
		//变大			
			oTouch.onmousemove = function(ev){
				var e = ev || window.event;
				if( e.pageX >= 214  && e.pageX <= 546 && e.pageY >= 272 && e.pageY <= 790){
					oSquare.style.left = e.pageX - 214 + "px";
					oSquare.style.top = e.pageY - 272 + "px";
				}
				var ratioX = $("#IMG").width()/$("#touch").width();
				var ratioY = $("#IMG").height()/$("#touch").height();
					oIMG.style.left = (parseInt(oSquare.style.left) * -ratioX + 150 + "px");
					oIMG.style.top = (parseInt(oSquare.style.top) * -ratioY + "px") ;
			};

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
				$(".DT").animate({opacity:0.4},300);		
		})
		$("#menuUl").mouseleave(function(){
				$("#menuUl").find("li").css("display","none");
				$(".DT").animate({opacity:1},300);		
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
	//点击显示和消除
		var clickTime4 = 2
		$(".pp1").click(function(){
			if(clickTime4 == 1){
				$(".sCp-9").css("display","block");
				$(".sCp-11").css("display","none")
				$(".sCp-13").css("display","none")
				$(".sCp-16").css("display","none")	
				clickTime4 = 2
				return false;
			}
			if(clickTime4 == 2){
				$(".sCp-9").css("display","none");
				clickTime4 = 1;	
				return false;			
			}
		})
		var clickTime3= 1
		$(".pp2").click(function(){
			if(clickTime3== 1){
				$(".sCp-11").css("display","block");
				$(".sCp-9").css("display","none")
				$(".sCp-13").css("display","none")
				$(".sCp-16").css("display","none")		
				clickTime3= 2
				return false;
			}
			if(clickTime3== 2){
				$(".sCp-11").css("display","none");
				clickTime3= 1;	
				return false;			
			}
		})
		var clickTime2 = 1
		$(".pp3").click(function(){
			if(clickTime2 == 1){
				$(".sCp-13").css("display","block");
				$(".sCp-11").css("display","none")
				$(".sCp-9").css("display","none")
				$(".sCp-16").css("display","none")		
				clickTime2 = 2
				return false;
			}
			if(clickTime2 == 2){
				$(".sCp-13").css("display","none");
				clickTime2 = 1;	
				return false;			
			}
		})
		var clickTime1 = 1
		$(".pp4").click(function(){
			if(clickTime1 == 1){
				$(".sCp-16").css("display","block");
				$(".sCp-11").css("display","none")
				$(".sCp-13").css("display","none")
				$(".sCp-9").css("display","none")		
				clickTime1 = 2
				return false;
			}
			if(clickTime1 == 2){
				$(".sCp-16").css("display","none");
				clickTime1 = 1;	
				return false;			
			}
		})
	//ajax
		$.ajax({
			url:"json/detail.json",
			type:"GET",
			success:function(del){
				var con1 = " ";
					con1+=`
						<p id="small1"class="luck" ><img src="${del[0].small1}" alt=""></p>
						<p id="small2"><img src="${del[0].small2}" alt=""></p>
						<p id="small3"><img src="${del[0].small3}" alt=""></p>
						<p id="small4"><img src="${del[0].small4}" alt=""></p>
						<div id="big1" style="display:block;"><img src="${del[0].big1}" alt=""></div>
						<div id="big2"><img src="${del[0].big2}" alt=""></div>
						<div id="big3"><img src="${del[0].big3}" alt=""></div>
						<div id="big4"><img src="${del[0].big4}" alt=""></div>
					`
					$(".turnShow").html(con1);
				var scp2 = " ";
					scp2+=`
						${del[0].p1}
					`
					$(".sCp-2").html(scp2);
				var scp3 = " ";
					scp3+=`
						<span style="margin-right:10px;">${del[0].moneyNow}</span>
						<span>${del[0].moneyBefore}</span>
					`
					$(".money").html(scp3);
				var scp4c1 = " ";
					scp4c1 +=`
						${del[0].color[0]}
					`
					$(".color-1 span").html(scp4c1);
				var scp4c2 = " ";
					scp4c2 +=`
						${del[0].color[1]}
					`
					$(".color-2 span").html(scp4c2);
				var scp4c3 = " ";
					scp4c3 +=`
						${del[0].color[2]}
					`
					$(".color-3 span").html(scp4c3);

				var size = " ";
					size+=`
						<span>${del[0].size[0]}</span>
						<span>${del[0].size[1]}</span>
						<span>${del[0].size[2]}</span>
						<span>${del[0].size[3]}</span>
						<span>${del[0].size[4]}</span>
					`
					$(".sCp-5").html(size);
				var pic = "";
					pic+=`
						<img src="${del[0].sp1}" alt="" />
						<img src="${del[0].sp2}" alt="" />
						<img src="${del[0].big1}" alt="" />
						<img src="${del[0].big2}" alt="" />
						<img src="${del[0].big3}" alt="" />
						<img src="${del[0].sp3}" alt="" />
						<img src="${del[0].big4}" alt="" />
						<img src="${del[0].sp3}" alt="" />
						<img src="${del[0].sp4}" alt="" />
						<img src="${del[0].sp5}" alt="" />
					`
					$(".GDPics").html(pic);
				var reply = " ";
					for(var i = 0;i<del[0].reply.length;i++){
						reply+=`
							<p class="UEPic">
								<img src="${del[0].reply[i]}" alt="" />
							</p>
						`
					}
					$(".UEPics").html(reply);
				var glshow = " ";
					for(var i = 0;i<del[0].guessLike.length;i++){
						glshow+=`
							<div class="GLChild">
								<img src="${del[0].guessLike[i]}" alt="" />
							</div>
						`
					}
					$(".GLShow").html(glshow);
				var btn = "";
					btn+=`
						<div class="sCp-6-1" id = "${del[0].id}">加入购物车</div>
						<div class="sCp-6-2">加入愿望清单</div>
					`
					$(".sCp-6").html(btn)

			//轮换图
				$(".turnShow").find("p").click(function(){
					$(".turnShow").find("p").attr("class", "")
					$(".turnShow").find("div").css("display", 'none').eq($(this).index()).css("display", 'block');
					$(this).attr("class", 'luck');				
				})	
			//选尺寸
				$(".sCp-5").find("span").click(function(){
					$(this).css("color","red").css("fontWeight","900")
					$(this).siblings().css("color","gray")
				})
			//细节尺码展开
				var kick = 1
				$("#GDControl").click(function(){
					if(kick == 1){
						$(".GDPics").stop().animate({height:0},600,"linear");		
						kick = 2
						return false;
					}
					if(kick == 2){
						$(".GDPics").stop().animate({height:5950},600,"linear");
						kick = 1;	
						return false;			
					}
				})
			//评价展开
				var kick1 = 1
				$("#UEControl").click(function(){
					if(kick1 == 1){
						$(".UEGrade").stop().animate({height:0},600,"linear");		
						kick1 = 2
						return false;
					}
					if(kick1 == 2){
						$(".UEGrade").stop().animate({height:1000},600,"linear");
						kick1 = 1;	
						return false;			
					}
				})	
			//左右切换图片
				var leftnum = 0
				var oGLShow = $(".GLShow")
				$(".SPLeft").click(function(){
					leftnum += 1;
					$(".GLShow").stop().animate({left:leftnum * -285},500,function(){
						if (parseInt(oGLShow.css("left")) <= -1425) {
							leftnum = 0;
							$(".GLShow").css("left","0")
						}
					})
				})	
					var click1 = -1425;
					$(".SPRight").click(function(){
							click1 += 285
							$(".GLShow").stop().animate({left:click1},400,function(){
								if (click1 >= 0) {
									click1 = -1425;
									$(".GLShow").css("left","-1425")
								}
							})
					})
				$("#small1").click(function(){
					$("#IMG").attr("src","images/cb1.jpg")
				})	
				$("#small2").click(function(){
					$("#IMG").attr("src","images/cb2.jpg")
				})
				$("#small3").click(function(){
					$("#IMG").attr("src","images/cb3.jpg")
				})
				$("#small4").click(function(){
					$("#IMG").attr("src","images/cb4.jpg")
				})
			$(".sCp-6-1").click(function(){
				ballMove(".sCp-6-1");
			var id = this.id;
			
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;//设置cookie
			if(first){

				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7,raw:true});
				// $.cookie("goods");
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7,raw:true});
						same = true;
						break;
					}
				}
				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7,raw:true});
				}
			}
				bagNum();
				})			
			},
			error:function(delmsg){
				console.log('delmsg');
			}
		})

	//选颜色
		$(".color-1").add(".color-2").add(".color-3").click(function(){
			$(this).css("border","1px solid gray")
			$(this).siblings().css("border","none")
		})
	//评价类型
		$(".UEType").find("span").click(function(){
			$(".UEType").find("span").attr("class","");
			$(".UEType").find("div").css("display", 'none').eq($(this).index()).css("display", 'block');
			$(this).attr("class", 'checked');
		})
//加入购物车！！
		function ballMove(startNode){
			$("#ball").css({
				left: $(startNode).offset().left,
				top: $(startNode).offset().top,
				display: "block"
			})

			var offsetX = $(".target").offset().left - $("#ball").offset().left;
			var offsetY = $(".target").offset().top - $("#ball").offset().top;
			//配置参数
			var bool = new Parabola({
				el: "#ball",
				targetEl: null,
				offset: [offsetX, offsetY],
				curvature: 0.0005,
				duration: 400,
				callback:function(){
					$("#ball").css('display', 'none');
				}
			})

			bool.start();
		}		

			//购物车数字显示
			function bagNum(){
				var str = $.cookie("goods");
				if(str){
					var arr = eval(str);
					var sum = 0;
					for(var i = 0; i < arr.length; i++){
						sum += arr[i].num;
					}
					$(".bagNum").html(sum);
				}
			}
		//显示购物车列表
			$(".target").mouseenter(function(){
				$(".SCList").css("display","block");
				$(".SCList").animate({opacity:0.6},300).animate({opacity:0.8},300);
				SCmes()
			})
			$(".SCList").mouseleave(function(){
				$(".SCList").css("display","none");
			})
		//显示购物车内商品
			function SCmes(){
				$.ajax({
					url: 'json/detail.json',
					success: function(del){
						$(".SCList").html("");
						//在所有商品信息里面找出，加入购物车的商品信息
						var cookie_arr = eval($.cookie('goods'));
						for(var i = 0; i < cookie_arr.length; i++){
							$(
								`<div class="SCNow">
									<div class = "SCPic"> 
										<img class="bug" src="${del[cookie_arr[i].id].small1}" alt="" />
									</div>
									<div class = "SCTitle">
										<p class="SCP">喜欢她就买下她！！</p>
										<a href="bug.html" class = "SCBtn">购买</a>
										<div class = "SCNum">商品数量:${cookie_arr[i].num}</div>
									</div>									
								</div>`
							).appendTo($(".SCList"));
						}
					},
					error:function(arrmsg){
						console.log('arrmsg');
					}
				})
			}
		
})//window.onload
}//fashionShopping
	return{
		fashionShopping:fashionShopping
	} 
})