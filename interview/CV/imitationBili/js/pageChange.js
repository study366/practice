;(function () {
	console.log('pageChange ok');
	let pageList = [
		"./pages/wechat/index.html",
		"#",
		"./pages/waterfall/index.html",		
		"./pages/demo/index.html",			
	]
	let homeDisplayInfoList = document.querySelectorAll("#items .home_display_info");
	console.log(homeDisplayInfoList);

	for(let i = 0; i < homeDisplayInfoList.length; i++){
		homeDisplayInfoList[i].addEventListener("click",function () {
			location.href = pageList[i] || "javascript:void(0)";
		});
	}
})();

