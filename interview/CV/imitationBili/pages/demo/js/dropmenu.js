
;(function () {
    console.log('dropmenu ok');
    let dropMenuList = document.getElementsByClassName("dropMenu");  
        dropMenuArr = Array.from(dropMenuList);  
   
    bindClick();
    document.addEventListener("click", function  () {
        let dropMenuList = document.getElementsByClassName("dropMenu");  
        dropMenuArr = Array.from(dropMenuList);  
        for(var i = 0; i < dropMenuArr.length; i++){
            dropMenuArr[i].className = "dropMenu";            
        }   
    })
    let 
    function bindClick () {
        
        for(var i = 0; i < dropMenuArr.length; i++){
            dropMenuArr[i].addEventListener("click", function (e) {
                e.stopPropagation();                
                if(this.className === "dropMenu"){
                    this.className = "dropMenu active";
                }
                else{
                     this.className = "dropMenu";
                }
                if(e.target){
                    console.log(e.target.children)
                    if(e.target.children.length > 0){
                        this.className = "dropMenu active";
                        e.target.className = "dropMenu active";
                    }else{
                        this.children[0].innerHTML = e.target.innerHTML;
                    }
                }
            },true)
        }  
    }
})();
