$(function(){

	var slidereWidth = $('.slidere').width();
	var nowLi = 3;
	var li_count = $('.slidere li').length;

	$('.slidere ul').css({width:li_count * slidereWidth});
	$('.slidere li').css({width:slidereWidth});

	for(var i=0; i<li_count;i++){
		$('.slidereControl').append('<a></a>');
	}


	$('.slidereControl a, .slidere li').click(function(){
		nowLi = $(this).index();
		slidereChange();
		$('.slidereControl a').eq(nowLi).css({'background-color':'#F6C555'});
		$('.slidereControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slidere li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slidere li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slidere li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
		$('.slidere li').eq(0).css({'left':'-60px'});
	})


	function slidereChange(){
		$('.slidere ul').stop(true, false).animate({left: slidereWidth * nowLi * -1}, 500);
	}

	var timer = setInterval(perpic, 5000);

	function perpic(){		
		console.log( 'nowLi = ' + nowLi)
		nowLi++;
		if(nowLi>=li_count){
			nowLi=0;
		};
		slidereChange();
		$('.slidereControl a').eq(nowLi).css({'background-color':'#F6C555'});
		$('.slidereControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slidere li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slidere li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slidere li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
	}

	$('.slidere').hover(function(){
		clearInterval(timer);
		$('.timer .percentage').removeClass('gogo');
	},function(){
		timer = setInterval(perpic, 5000);
		$('.timer .percentage').addClass('gogo');
	})

})