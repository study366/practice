
;(function (designWidth, maxWidth) {
    console.log('cart ok')
    let cart = document.querySelector(".demo-cart");
    let cartMask = document.querySelector(".cart-mask");
    let back = document.querySelector(".cart-mask .back"); 
    cart.addEventListener("click", function () {
        cartMask.className = "cart-mask active"
    })
    back.addEventListener("click", function () {
        cartMask.className = "cart-mask"
    })
    showPrice();
    bindClick();
    bindChooseAllButton();
    function bindClick() {
        let itemlist = document.getElementsByClassName("item");
        let itemArr = Array.from(itemlist);
       
        for(var i = 0; i < itemArr.length; i++){
            itemArr[i].addEventListener("click",function (e) { 
                let add = this.getElementsByClassName("plus")[0];
                let min = this.getElementsByClassName("min")[0];
                let numValueDom = this.getElementsByClassName("num-value")[0];

                if(e.target === this.children[0] ||e.target == this.children[0].children[0]){                    
                    if(this.children[0].children[0].className ==="choose-box"){                        
                        this.children[0].children[0].className = "choose-box seleted"
                    }else{
                        this.children[0].children[0].className = "choose-box";
                    };
                }else if (e.target === add) {
                    let numValue = numValueDom.innerHTML;
                    numValueDom.innerHTML = numValue*1 + 1;                    
                }else if (e.target === min) {                    
                    let numValue = numValueDom.innerHTML;
                    if(numValue*1 > 0) 
                    numValueDom.innerHTML = numValue*1 - 1;
                }else if (e.target === this.children[3]) {
                    this.parentNode.removeChild(this);
                }
                showPrice();
            },true)
        }
    }
    function bindChooseAllButton() {
        let  chooseAllButton = document.querySelector(".total.fixed .select");
        let itemlist = document.getElementsByClassName("item");
        let itemArr = Array.from(itemlist);

        chooseAllButton.addEventListener("click", function () {
            let itemlist = document.getElementsByClassName("item");
            let itemArr = Array.from(itemlist);
            let isSelected = !!(this.children[0].className ==="choose-box seleted");
            
            if(isSelected){
                for(var i = 0; i < itemArr.length; i++){
                    itemArr[i].children[0].children[0].className ="choose-box"
                }
                this.children[0].className = "choose-box";
            }else{
                for(var i = 0; i < itemArr.length; i++){
                    itemArr[i].children[0].children[0].className ="choose-box seleted"
                }
                this.children[0].className = "choose-box seleted";
            }
            showPrice();
        });
    }
    function showPrice() {
        console.log('showPrice');
        let itemlist = document.getElementsByClassName("item");
        let itemArr = Array.from(itemlist);
        let totalPrice = 0;
        let totalNum = 0
        let totalPriceShowDom = document.getElementsByClassName("total fixed")[0];

        for(var i = 0; i < itemArr.length; i++){
            let isSelected = !!(itemArr[i].getElementsByClassName("seleted")[0]);
           if(isSelected){
            let price = itemArr[i].getElementsByClassName("price-value")[0].innerHTML;
            let num = itemArr[i].getElementsByClassName("num-value")[0].innerHTML;
            
            totalPrice += price * num;
            totalNum += num*1;
           }
        }        
        totalPriceShowDom.getElementsByClassName("show-num")[0].innerHTML = totalNum + "件";
        totalPriceShowDom.getElementsByClassName("show-price")[0].innerHTML = "￥" + totalPrice;
    }
})();
