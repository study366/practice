// js 文件配置
const SCRIPT_LIST = [
		"./js/rem.js",
		"./js/fn.js",
		"./js/nav.js",
		"./js/pageChange.js",
		"./js/backtop.js",
	];

//自动添加js文件的自执行函数
;(function () {
	console.log('index ok');
	
	let head = document.getElementsByTagName("head")[0];
	let fragElement = document.createDocumentFragment();
	for(var i = 0; i < SCRIPT_LIST.length; i++){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = SCRIPT_LIST[i];
		fragElement.appendChild(script);
	}
	head.appendChild(fragElement);	
})()

