/* 以下JS 只实现部分功能 完整需要添加逻辑  代码写的肯定和实际开发有出入，有些在开发中能用的可以直接拿来用 一些页面可能会包含几张效果图  水平有限，已经尽力了 */

function commonString1(x,y,z){
	return "<div class='grayLayer'><ul class='otherWay'><li>"+x+"</li><li>"+y+"</li><li onclick='cancelWay()'>"+z+"</li></ul></div>";
}
function commonString2(x,y,z){
	return "<div class='grayLayer'><div class='tipLayer'><div class='title'><span class='poaMiddle'>"+x+"</span></div><div class='downBtn'><span><span class='a9001b poaMiddle' onclick='waitCheckcode()'>"+y+"</span></span><span><span class='poaMiddle' onclick='yzmBack()'>"+z+"</span></span></div></div></div>";
}
function commonString3(num){
	// num 把电话号码传进来
	return "<div class='grayLayer'><div class='tipLayer'><div class='title'><span class='poaMiddle modifyCss'>确认手机号码</span><span class='poaMiddle ziStyle1'>我们将发送验证短信到这个号码: <br>'"+num+"'</span></div><div class='downBtn'><span><span class='a9001b poaMiddle' onclick='sendYzm()'>好</span></span><span><span class='poaMiddle' onclick='yzmCancel()'>取消</span></span></div></div></div>";
}
function commonString4(){
	return "<div class='grayLayer'><div class='tipLayer'><div class='title'><span class='poaMiddle' style='line-height:20px;'>该手机号码已注册，<br>是否直接登录好运盘?</span></div><div class='downBtn'><span><span class='a9001b poaMiddle' onclick='directLogin()'>好</span></span><span><span class='poaMiddle' onclick='yzmCancel()'>取消</span></span></div></div></div>";
}
function commonString5(x,y,z){
	return "<div class='grayLayer'><ul class='otherWay'><li onclick='usePayWay(this)'>"+x+"</li><li onclick='usePayWay(this)'>"+y+"</li><li onclick='cancelWay()'>"+z+"</li></ul></div>";
}
function commonString6(){
	return "<div class='grayLayer'><ul class='otherWay otherWay2'><li onclick='reallyLogOut()'>退出登录</li><li onclick='cancelWay()'>取消</li></ul></div>";
}
function commonString7(){
	return "<div class='grayLayer'><ul class='otherWay'><li><a href>金钱</a></li><li><a href>积分</a></li><li onclick='cancelWay()'>取消</li></ul></div>";
}
function commonString8(){
	return "<div class='grayLayer'><ul class='otherWay otherWay3'><li><a href>交易未支付</a></li><li><a href>交易成功</a></li><li><a href>交易处理中</a></li><li><a href>交易取消</a></li><li onclick='cancelWay()'>取消</li></ul></div>";
}
function commonString9(){
	return "<div class='grayLayer'><div class='exchangeLayer'><span class='close' ontouchstart='closeGray()'></span>兑换成功</div></div>";
}
function commonString10(){
	return "<div class='grayLayer'><div class='GraPointsTipLayer'><div class='top'>兑换信息填写正确<br>是否确认领取？</div><div class='bottom'><a href='javascript:;' class='a9001b' onclick='gotoDrawIntegral()'>好</a><a href='javascript:;' ontouchstart='closeGray()'>取消</a></div></div></div>";
}
function commonString11(){
	return "<div class='grayLayer'><div class='GraPointsTipLayer'><div class='top'>恭喜您<br>成功兑换100积分<br><font color='#999'>是否跳转查看我的积分？</font></div><div class='bottom'><a href='http://www.baidu.com' class='a9001b' >好</a><a href='javascript:;' ontouchstart='closeGray()'>取消</a></div></div></div>";
}
function commonString12(){
	return "<div class='grayLayer'><div class='GraPointsTipLayer GraPointsTipLayer1'>填写信息有误，请重新填写</div></div>";
}
function commonString13(){
	return "<div class='grayLayer'><div class='zishiLayerTip juzhong'><div class='bg'><span class='zishiLayerTipClose' onclick='closeGray()'></span><img class='bg' src='images/zishiLayerTip.png' alt=''></div><div class='juzhong title'><p></p><p></p></div><div class='con'></div></div></div>"
}
function grayLayer(x,y,z){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString1(x,y,z) );
	$('.otherWay').css({'bottom':'0'});
}
function grayLayer(){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString6() );
	$('.otherWay').css({'bottom':'0'});
}
function grayLayer2(x,y,z){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString5(x,y,z) );
	$('.otherWay').css({'bottom':'0'});
}
function grayLayer3(){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString7() );
	$('.otherWay').css({'bottom':'0'});
}
function grayLayer4(){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString8() );
	$('.otherWay').css({'bottom':'0'});
}
function cancelWay(){
	$('.grayLayer').remove();
}

/* 取消发送验证码函数 */
function cancelYzm(x,y,z){
	$('body').prepend( commonString2(x,y,z) );
}
function waitCheckcode(){
	$('.grayLayer').remove();
}
function yzmBack(){
	$('.grayLayer').remove();
	// 返回上一个页面
	// ...
}
function checkSendYzm1(){
	// 验证 符合手机号格式
	// 进行数据库校验重复号码
	// 弹出提示
	$('body').prepend( commonString3( '+86 100822222' ) );
	// 成功 return true;
	return false;
}
function checkSendYzm2(){
	$('body').prepend( commonString4() );
	// 成功 return true;
	return false;
}
function yzmCancel(){
	$('.grayLayer').remove();
}
function sendYzm(){
	// to send
	alert('发送逻辑！')
}
function directLogin(){
	// 直接用这个帐号登录
}
function checkImoroveData(){

}
function usePayWay(obj){
	var text = obj.innerHTML;
	$('#twoPayCon').text( text );
	$('.grayLayer').remove();
}
function countZiNum(obj){
	var num = obj.value;
	$('.inviteCon .num .cur').html( num.length );
}
$('.redclickZone').on('touchstart',function(){
	$(this).children('.redPacketConLi').addClass('cur'); 
	event.stopPropagation();//阻止冒泡
})
$(document).on('touchstart',function(){
	$(".redPacketConLi").removeClass('cur');
});
$('.switchMain').on('touchstart',function(){
	$(this).toggleClass('cur');
});
function logOut(){
	grayLayer();
}
function reallyLogOut(){
	// 真正退出 注销session
	// ...
	alert('去注销session等逻辑')
}
/* 个人中心页 分配icon 小图标 */
var arrPerCenter = [0,-31,-62,-93,-124,-155,-186];
	for(var i=0;i<$('.personalCenter .main li.unit').length;i++){
		$('.personalCenter .main li.unit').eq(i).find('i.icon').css('background-position','0 '+arrPerCenter[i]+'px');
}

/* 福分排行页 tab */
$('.pointRank .bd>li').eq(0).addClass('cur');
$('.pointRank .hd>a').on('touchstart',function(){
	$('.pointRank .bd li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
	$('.pointRank .underLine').css('left',25*$(this).index()+'%');
});

/* theDetail 明细页 */
$('.theDetail .bd>li').eq(0).addClass('cur');
$('.theDetail .hd>a').on('touchstart',function(){
	$('.theDetail .bd>li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
	$('.theDetail .underLine').css('left',33.3333*$(this).index()+'%');
});

/* 积分兑换 */
function integralExchange(){
	// 提交表单成功后返回这个提示框
		$('html,body').css({'overflow':'hidden'});
		$('body').prepend( commonString9() );
}
function closeGray(){
	$('.grayLayer').remove();
}

/* 领取毕业积分 */
function checkGraPoints(){
	// 成功后弹出提示框
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString10() );

	// 如果失败 调用下面的函数
	//failGetGraPoints();

}
/* 积分领取失败函数 */
function failGetGraPoints(){
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString12() );
	// 弹出提示框 1s 返回
	setTimeout(function(){
		$('.grayLayer').remove();
	}, 1000);
}
function gotoIntegral(){
	alert('去积分');
}
function gotoDrawIntegral(){
	//成功兑换
	$('.grayLayer').remove();
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString11() );

}
/*  */
function analysisShow(){
	// 需要传递 this
	$('html,body').css({'overflow':'hidden'});
	$('body').prepend( commonString13() );
}