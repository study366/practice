;(function () {
	window.onload = function () {
		let container = document.querySelector(".container");
		waterfall(container);
	}
	function waterfall (container) {
		/**
		*获取container父容器宽度containerWidth
		*获取内部盒子.box宽度boxWidth
		*计算出容纳的列数cols
		*设置container的宽度
		*设置cols个盒子均分container
		*把图片放进去就好了
		*/
		let containerWidth = container.parentElement.clientWidth;
		let boxWidth = container.querySelector(".box").offsetWidth;
		let cols = Math.floor(containerWidth / (boxWidth * 1.25));//宽0.8rem 外边距0.1rem 故*1.25
		    container.style.width = cols * (boxWidth * 1.25);

		    console.log(`1${containerWidth}2${boxWidth}3${cols}4${container.style.width}`);
	}
})()