;(function () {
	/**
	******container scroll
	******backtop / navFixed
	*/
	window.onload = function () {
		console.log('backtop ok');
		let backtop = document.querySelector(".backTop");
		let container = document.querySelector(".container");
		let oldClass = backtop.className;
	    let containerHeiht = container.clientHeight;

	    let navBar = document.querySelector(".nav-bars");
	    let navBarTop = document.querySelector(".nav-bars").offsetTop;
	    console.log('offsetTop');
	    console.log(navBarTop);

		container.addEventListener("scroll", debounce1(function () {
			console.log(this.scrollTop);		
			if(this.scrollTop > containerHeiht){
	          backtop.className = oldClass + " active";
			}
			else{
	           backtop.className = oldClass;
			}
			if(this.scrollTop > navBarTop){
				navBar.className = "nav-bars fixed"
			}
			else {
				navBar.className = "nav-bars";
			}
		},100));


	}
	
})()