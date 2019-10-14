;(function () {
	console.log('nav ok');
	let nav = document.querySelector(".nav-bars");
	let addClassDebounce = debounce(addClass,100);
	nav.addEventListener("click",addClassDebounce);

	
	function addClass (e,className="active") {
		let targetList = nav.getElementsByTagName("a");
		for(var i = 0; i < targetList.length; i++){
			targetList[i].className = "";
		}
		if(!e.target){
			throw new Error("请传入dom节点");
		}
		let target = e.target;		
		let oldClass = target.className;
		target.className = oldClass + " " + className;
		
	}

	function debounce (fn,wait) {
		let timeout;
		return function () {
			let content = this;
			let args = arguments;

			if(timeout){
				clearTimeout(timeout);
			}

			let callNow = !timeout;
			timeout = setTimeout(()=>{
				timeout = null;
			}, wait)

			if(callNow){
				fn.apply(content, args);
			}  
		}
	}
})();

