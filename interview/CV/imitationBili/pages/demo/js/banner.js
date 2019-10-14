
;(function () {
    console.log('banner ok')
    let container = document.querySelector(".container .demo-container .demo-banner") ;   
    let box = container.getElementsByClassName("banner-item");   
    let timeout = null; 
    let index = 0;    
    let buttonLeft = document.getElementsByClassName("banner-left")[0];  
    let buttonRight = document.getElementsByClassName("banner-right")[0];      
   
    Carousel();
    function Carousel() {//Carousel 轮播
        container.addEventListener("mouseenter",pauseAutoShow);
        container.addEventListener("mouseleave",autoShow);
        autoShow();
        buttonLeft.addEventListener("click",showLeftBox);
        buttonRight.addEventListener("click",showRightBox);
    }
    function pauseAutoShow () {
        // console.log('pauseAutoShow 执行')
        if(timeout){
            clearInterval(timeout);
        }
    }
    function autoShow() {  
          // console.log('autoShow 执行')
        timeout = setInterval(showRightBox, 2000);
    }
    function showLeftBox() {   
        // console.log('showLeftBox 执行')     
        index--;
        changeBox();
        console.log('left' + index);
    }
    function showRightBox() {
        // console.log('showRightBox 执行')  
        index++;
        changeBox();
    }
    function changeBox(){ 
         // console.log('changeBox 执行')  
        if(index > box.length - 1){
            index = 0
        }if(index < 0){
            index = box.length;
        }      
        for(var i = 0; i < box.length; i++){
            box[i].style.left = 'auto';
            box[i].style.right = index * 100 + '%';
        }
    }
/**以下区域书写函数***/
    
   
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
    /**以上区域书写**/
})();
