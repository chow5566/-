$(function(){
	//子菜单显示控制
	$('.li-h').hover(function(){
		$(this).find($('.sub-mu')).stop().slideDown('fast');
	},function(){
		$(this).find($('.sub-mu')).stop().slideUp('fast');
	});
	//banner
	var i=0,time;
	//定时器
	function move(){
		i++;
		if(i==$('.b-item').length){
			i=0;
		}
		b_Show();
	}
	time=setInterval(move,8000);
	//显示控制
	function b_Show(){
		$('.b-item').eq(i).fadeIn().siblings().fadeOut('fast');
		$('#ft-btn span').eq(i).addClass('span-on').siblings().removeClass('span-on');
	}
	$('#ft-btn span').hover(function(){
		clearInterval(time);
		i=$(this).index();
		b_Show();
	},function(){
		time=setInterval(move,8000);
	});
});