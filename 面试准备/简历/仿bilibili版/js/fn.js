;
/**
**@param fn
**@param timeout
**最后一次触发
**/
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
/**
**@param fn
**@param timeout
**首次触发
**/
function debounce2 (fn,wait){
	let timeout;
	let sleep;
	return function () {
		let content = this;
		let args = arguments;
		if(timeout){
			clearTimeout(timeout);
		}
		if(!sleep){
			fn.apply(content,args);
			sleep = true;
		}
		timeout = setTimeout(() =>{
			sleep = false;
		}, wait);
	}
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