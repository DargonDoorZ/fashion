define(["jquery","jquery-cookie"],function($){
	function bug(){
		$(function(){
			//获取cookie
			var str = $.cookie('goods');
			var cookie_arr = eval($.cookie('goods'));
			$.ajax({
				url:"json/detail.json",
				type:"GET",
				success:function(bug){
					var baby = " ";
					for(var i = 0;i < cookie_arr.length;i++){
					baby+=`
						<div class="Box">
							<div class="chose">
								<img src="${bug[cookie_arr[i].id].small1}" alt="" style="width:90px;height:120px;float:left"/>
								<span style="line-height:50px;">${bug[cookie_arr[i].id].p1}</span>
								<span style="color:gray">不支持7天无理由退换货</span>
							</div>
							<div class="pirce">
								<span class="moneyType">${bug[cookie_arr[i].id].moneyNow}</span>
								<span style="text-decoration:line-through;">${bug[cookie_arr[i].id].moneyBefore}</span>
							</div>
							<div class="bugNum">
								<div style="margin-top:35px;">
									<div class="sub" style="float:left;width:23px;height:23px;border:1px solid #eee;text-align:center;line-height:23px;">-</div>
									<div class="NUM" style="float:left;width:34px;height:23px;border:1px solid #eee;text-align:center;line-height:23px;">${cookie_arr[i].num}</div>
									<div class="add" style="float:left;width:34px;height:23px;border:1px solid #eee;text-align:center;line-height:23px;">+</div>
								</div>
							</div>
							<div class="sum">
								
							</div>
							<div class="delet">
								<p style="width:135px;height:25px;line-height:25px;margin:15px 0 0 0;">收藏</p>
								<p class="deletNow" style="width:135px;height:25px;line-height:25px;margin:15px 0 0 0;">删除</p>
							</div>
						</div>
					`
						}//for循环
					$(".bug").html(baby);
					//显示总价
						for(var i = 0 ;i < cookie_arr.length;i++){
							var id = cookie_arr[$(".add").parent().parent().parent().index()].id
							var price = parseInt(bug[cookie_arr[i].id].moneyNow.replace(/[^0-9]/ig,""));
							var all = price * $(".NUM").eq(i).html();
							$(".sum").eq(i).html(all);
						}	
					//数量增加1
						$(".add").click(function(){
							var id = cookie_arr[$(this).parent().parent().parent().index()].id
							cookie_arr[id].num++;
							var cookieStr = JSON.stringify(cookie_arr);
							$.cookie('goods', cookieStr, {expires: 7,raw: true});
							var all = price * $(".NUM").eq(id).html();
							$(".sum").eq(id).html(all);
							location.reload();
						})
						$(".sub").click(function(){
							var id = cookie_arr[$(this).parent().parent().parent().index()].id
							cookie_arr[id].num--;
							var cookieStr = JSON.stringify(cookie_arr);
							$.cookie('goods', cookieStr, {expires: 7,raw: true});
							var all = price * $(".NUM").eq(id).html();
							$(".sum").eq(id).html(all);
							location.reload();
						})//数量减少1
					//删除cookie
						$(".deletNow").click(function(){
							var str = $.cookie('goods');
							var cookie_arr = eval(str);
							cookie_arr.splice($(this).parent().parent().index(),1);
							var cookieStr = JSON.stringify(cookie_arr);
							$.cookie('goods', cookieStr, {expires: 7,raw: true});
							location.reload();	
						})
						$(".numSpan").html( parseInt($(".NUM").eq(0).html())+parseInt( $(".NUM").eq(1).html()));
						$("#moneySpan").html(parseInt($(".sum").eq(0).html())+parseInt( $(".sum").eq(1).html()));
				},//success
				error:function(bugmsg){
					console.log('bugmsg')
				}
			})
})//window.onload
	}//bug
	return{
		bug:bug
	}
})