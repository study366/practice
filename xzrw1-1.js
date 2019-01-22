// 总结：问题一 
// 	无法动态变幻大小，
// 	经检查，宽高wid hei定义成全局函数，由于函数内部没包含宽高，每次函数调用也不会重新计算、
// 版本一，仅根据高度变化而变幻、
// 设置宽高给main
function setMainWidthHeight () {
	// 取得可见区域宽高
	var wid = document.documentElement.clientWidth; 
	var hei = document.documentElement.clientHeight; 
	hei>wid?hei=wid:hei=hei;
	$('.main').height(function () {
		return hei;
});
	console.log('高度设置成功%o',hei);
	$('.main').width(function () {
		return hei;
});
	console.log('宽度设置成功为%o',hei);

}
// 调用函数；
setMainWidthHeight();
// window.onmouseover=function() {
// 	setMainWidthHeight();
// } 
window.onresize=function(){
	setMainWidthHeight();}
