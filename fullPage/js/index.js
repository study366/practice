$(document).ready(function () {
	// $('.section1').on('click',function () {
	// 	console.log('我被点击了');
	// 	$('.section1').fadeOut('slow');
	// 	$('.section1').delay(800).fadeIn('fast');
	// })
	
	$('#fullpage').fullpage({
		sectionsColor:["#ccc","orange","pink","blue"],
		//小圆点
		navigation: true ,
		// navigationPosition: 'left',
		continuousVertical: true,
		navigationPosition:  'right',
		//不让加 那一层div
		verticalCentered: false,

		//进入页面调用
		afterLoad:function (anchorLink, index) {
			console.log('enter',anchorLink,index);
			if(index == 1){
				console.log($(this).find('.img'));
				$(this).find('h1').delay(500).fadeIn();
				$(this).find('p').delay(500).fadeIn();
				$(this).find('.img').delay(1000).fadeIn();
				console.log(this,anchorLink, index);
			}
			
		},
		// 离开页面 调用
		onLeave:function (anchorLink, index) {
			console.log('leave',anchorLink,index);
			if(index == 1){
				console.log('我离开了1');
				console.log(this);
				$('.section1').find('h1').fadeOut();
				$('.section1').find('p').fadeOut();
				$('.section1').find('.img').fadeOut();
				
			}	
		},
	});
})