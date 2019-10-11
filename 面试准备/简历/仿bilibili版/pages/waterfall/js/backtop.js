;(function () {
	/**
	******container scroll
	******backtop / navFixed
	*/
	// window.onload = function () {window.onload 冲突
		console.log('backtop ok');
		let backtop = document.querySelector(".backTop");
		let container = document.querySelector(".container");
		let oldClass = backtop.className;
	    let containerHeiht = container.clientHeight;

	  	container.addEventListener("scroll", debounce1(function () {
			console.log(this.scrollTop);		
			if(this.scrollTop > containerHeiht){
	          backtop.className = oldClass + " active";
			}
			else{
	           backtop.className = oldClass;
			}
			
		},100));
	// }
	function debounce1 (fn,wait) {
		let  timeout ;	
		return function () {
			let content = this;
			let args = arguments;
			if(timeout){
				clearTimeout(timeout);
			}
			timeout = setTimeout(fn.bind(content,...args), wait);
		}
	}
})()