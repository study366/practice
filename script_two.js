 // 封装一个代替getelementbyid()的方法
 function byId (id) {
 	// body...
 	return typeof(id) === "string"?document.getElementById(id):id;
 }
 // console.log(byId("main"));
// 定义一个函数
var index = 0,
	timer = null,//定义一个全局变量，为了关闭setinterval
	// 注意添加id，会出现byId结果是null
	pics = byId("banner").getElementsByTagName("div"),
	len = pics.length,
	dots = byId("dots").getElementsByTagName("span"),
	prev = byId("prev"),
	next = byId("next");
 function slideImg () {
 	// body... 
 	var main = byId("main");
 	// 划过的时候清除定时器 离开继续
 	var menu_content = byId("menu-content").getElementsByClassName("menu-item"),
 	sub = document.getElementsByClassName("sub-inner-box"),
 	inner =byId("sub-menu");
 	console.log(sub.length);
for(i=0;i<menu_content.length;i++){
 		menu_content[i].setAttribute("date-index",i);
 		
 		menu_content[i].onmouseenter=function () {
 			clearTimeout(timer);

 			var ind=this.getAttribute("date-index");
 			console.log(sub[ind]);
 			// 没加style直接写了display导致无法改写属性。
 			sub[ind].style.display ="block";
 			inner.style.display = "block";
 		}
 		// menu_content[i].onmouseout=function (){
 		// 	for(i=0;i<menu_content.length;i++)
 		// 	sub[i].style.display ="none";
 		// 	inner.style.display = "none";
 		// }
 		menu_content[i].onmouseleave=function (){
 			var timer=setTimeout(function () {for(i=0;i<menu_content.length;i++)
 			sub[i].style.display ="none";
 			inner.style.display = "none";
 				/* body... */
 			},1000)
 			for(i=0;i<menu_content.length;i++){
 			sub[i].onmouseover=function () {
 				clearTimeout(timer);
 			console.log("")
 			this.style.display = "block";
 			inner.style.display = "block";
 		}
 		}	
 		}
 		sub[i].onmouseover=function () {
 			console.log("")
 			this.style.display = "block";
 			inner.style.display = "block";
 		}
 		sub[i].onmouseout=function () {
 			this.style.display = "none";
 			inner.style.display = "none";
 		}
 	}
 	main.onmouseover = function () {
 		// 划过清除定时器
 		if(timer) clearInterval(timer);
 	}
 	//离开激活定时器
 	main.onmouseout = function () {
 		timer = setInterval(function () {
 			index++;
 			if(index>=len){
 				index = 0; 
 			}
 			 // console.log(index);
 			 // 切换图片
 			 changeImg(index);

 		},1000)
 	}
 	// 自动触发鼠标离开事件
 	main.onmouseout();
 	// 点击圆点切换图片，遍历所有点击，且绑定事件
 	for(var b = 0 ;b<len;b++){
 		// 给span添加id为span+i
 		dots[b].id =  b;
 		// console.log(dots[b].id);
 		dots[b].onclick = function () {
 			// 改变index为当前span索引·.用dots[i]不行。这里的i是最终的，说是作用域改变 
 			index= this.id ;
 			// console.log(index);
 			// 调用切换图片函数
 			changeImg();
 		}

 	}
 	// 下一张上一张切换
 	next.onclick = function () {
 		// 如果到了最后一张index指向第一张，否则加一
 		index===len-1?index=0:index++;
 		changeImg();
 	}
 	prev.onclick = function () {
 		// 如果到了第一张，index指向最后一张，否则减一
 		index===0?index=len-1:index--;
 		changeImg();
 	}
 }
 // 切换图片函数以及圆点
 function changeImg() {
 	// 用class必须写出所有标签，不然就只有你给的那个标签了，此处直接改了一个属性
 	// 遍历banner下所有div，将其隐藏
 	for(var i = 0;i<len;i++){
 	pics[i].style.display = "none";
 	dots[i].className = "";
 }
 	pics[index].style.display = "block";

 	dots[index].className = "active";
 }
 // 调用这个函数
 slideImg();