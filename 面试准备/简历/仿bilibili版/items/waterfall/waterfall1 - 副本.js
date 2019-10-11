//模拟数据
var data = [{
    "src": "1.png",
    "title": "第一怪 竹筒当烟袋"
}, {
    "src": "2.png",
    "title": "第二怪 草帽当锅盖"
}, {
    "src": "3.png",
    "title": "第三怪 这边下雨那边晒"
}, {
    "src": "4.png",
    "title": "第四怪 四季服装同穿戴"
}, {
    "src": "5.png",
    "title": "第五怪 火车没有汽车快"
}, {
    "src": "6.png",
    "title": "第六怪 火车不通国内通国外"
}, {
    "src": "7.png",
    "title": "第七怪 老奶爬山比猴快"
}, {
    "src": "8.png",
    "title": "第八怪 鞋子后面多一块"
}, {
    "src": "9.png",
    "title": "第九怪 脚趾四季露在外"
}, {
    "src": "10.png",
    "title": "第十怪 鸡蛋拴着卖"
}, {
    "src": "11.png",
    "title": "第十一怪 粑粑叫饵块"
}, {
    "src": "12.png",
    "title": "第十二怪 花生蚕豆数着卖"
}, {
    "src": "13.png",
    "title": "第十三怪 三个蚊子一盘菜"
}, {
    "src": "14.png",
    "title": "第十四怪 四个老鼠一麻袋"
}, {
    "src": "15.png",
    "title": "第十五怪 树上松毛扭着卖"
}, {
    "src": "16.png",
    "title": "第十六怪 姑娘叫老太"
}, {
    "src": "17.png",
    "title": "第十七怪 小和尚可以谈恋爱"
}, {
    "src": "18.png",
    "title": "第十八怪 背着娃娃谈恋爱"
}];
// 瀑布流函数
function waterfall(container,box){	
	// 获取盒子宽度
	// 获取屏幕宽度
	// 计算容器宽度
	// 计算列数
	var containerWidth,
		boxWidth = box.eq(0).width()+20,
		screenWidth = $(window).width(),	
		colNumber = Math.floor(screenWidth/boxWidth);
	// 设置容器宽度
		container.width(colNumber*boxWidth);
		console.log(boxWidth);	
	// 设置列数组
	// 第一排col列高度直接等于七个盒子高度加外边距
	// 之后每个盒子计算位置：
	// 计算方法：1.找到最短的
	// 2.获得其索引
	// 3.获得其top和left
	// 4.设置第i个盒子位置 top left  不用加px！
	// 5.更新最短盒子高度
	var colHeight = new Array;
	for (var i = 0; i <  box.length; i++) {		
		if(i < colNumber){			
			colHeight[i] = box.eq(i).height()+20;			
		}
		else{
			// 找出最短的 及其索引
			var minHeight = Math.min.apply(null,colHeight),				
				index = colHeight.indexOf(minHeight),
				top = 0;

				// top要定义才行		
				// 获得这个盒子left以及top，
				left = box.eq(index).position().left;
				console.log('index,',index,'left',left);
				top = minHeight + 10;	
				// 设置第i个盒子位置
				box.eq(i).css({'position':'absolute',
					'top' : top ,
					'left' : left  
				});
			// 更新最短盒子高度
			colHeight[index] += box.eq(i).height() +20;	
		}
	}
}
//获取数据并追加盒子函数
function appendBox(container,box) {
	if(isPageInTheBottom(container)){
		console.log(isPageInTheBottom(container));
		console.log('我追加了');
		for(var i in data){		
			container.append('<div><img src="./images/images/'+data[i].src+'" alt=""><a href="javascript:void(0)">'+data[i].title+'第六怪、背着娃娃谈恋爱</a></div>')
		}	
		waterfall(container,container.children('div'));
	}
}
//判断页面是否到底部
function isPageInTheBottom(container) {	
	// document高度+滚动条高度>= 最后一个盒子高度 +盒子高度+20
	var documentHeight = $(window).height(),
	scrollHeight = $(window).scrollTop(),
	box = container.children('div');	
	lastBoxTop = box.eq(box.length-1).offset().top;
	lastBoxHeight =  box.eq(box.length-1).height();
	return documentHeight + scrollHeight > lastBoxTop + lastBoxHeight;
}
// 加载完成执行
$(document).ready(function (event) {
	/* body... */
	var container = $('.container'),	
	    	  box = container.children('div');   	 

		waterfall(container,box);
		$(this).scroll(function (event) {
			appendBox(container,box);
		});	
})