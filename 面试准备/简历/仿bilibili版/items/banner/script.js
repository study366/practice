// 全局变量设置区域
var nav=document.getElementById("nav").getElementsByTagName("div"),
	index=0,
 	content=document.getElementById("content").getElementsByTagName("div"),
 	main = document.getElementById("main"),
 	len = content.length,
	timer = null;
 // 事件触发区域
// 鼠标覆盖结束轮播
main.onmouseover =function () {
	// 停止轮播
	/* body... */
	if(timer)clearInterval(timer);
}
// 鼠标离开触发自动轮播
main.onmouseout = function () {
	// 因content是一个数组没法触发时间
	// 自动轮播
	console.log("事件触发");
	timer = setInterval(function () {
		index==len-1?index=0:index++;
		console.log(index);
		changeImg();
		
	}, 1000)
}
// 自动触发轮播
main.onmouseout();
// 点击切换图片
for(var i=0;i<len;i++){
	nav[i].id = i;
	nav[i].onclick=function () {
		index = this.id;
		changeImg();
	}
}
// 以下为封装的函数
function changeImg () {
	for(var i=0;i<len;i++ ){
		content[i].className="hidden";
		nav[i].className="noclick";
	}
	content[index].className="expose";
	nav[index].className="click";
	console.log(index);
}