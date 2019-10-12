;(function () {
	window.onload = function () {
		let container = document.querySelector(".container");
		let data = [].concat(data1);    
   
		waterfall(container,data);
    bodybindScoll(container);
    
	}
  function bodybindScoll (container) {
    let body = document.querySelector("body");

    body.addEventListener("scroll", function () {        
      let docHeight = document.body.scrollHeight;
      let windowHeight = document.documentElement.clientHeight;
      let backtop = document.querySelector(".backTop");

      if(this.scrollTop > docHeight - windowHeight - 50){          
        let data = [].concat(data1);

          appendBox(container,data);
      }
      if(this.scrollTop > container.offsetHeight){
            backtop.className = "backTop active";
      }
      else{
             backtop.className = "backTop";
      }
    })
  }
	function waterfall (container,data) {
		/**
		*获取container父容器宽度containerWidth
		*获取内部盒子.box宽度boxWidth
		*计算出容纳的列数cols
		*设置container的宽度
		*设置cols个盒子均分container
		*把图片放进去就好了
		*/    
		let containerWidth = container.parentElement.clientWidth;
		let boxWidth = document.querySelector(".box").offsetWidth * 1.25;//宽0.8rem 外边距0.1rem 故*1.25
		let cols = Math.floor(containerWidth / boxWidth);
		    container.style.width = cols * boxWidth*1.01 + "px";
		let frameElement =document.createDocumentFragment();
    // 追加并设置位置盒子    
		for(var i = 1; i < cols; i++){
			let div = document.createElement("div");
					div.className = "boxs";
					frameElement.appendChild(div);
		}   
		container.appendChild(frameElement);
		let boxs = document.getElementsByClassName("boxs"); 
    for(var i = 0; i < cols; i++){
      boxs[i].style.width = boxWidth + 'px';
    }

		for(var i = 1; i < cols; i++){//数据填充
			let dataitem = data.shift();
        let div = document.createElement("div");
        div.className = "box";
        div.innerHTML = `<img src=${dataitem.src}>
                      <a href="javascript:void(0)">${dataitem.title}</a>`
        boxs[i].appendChild(div);      
		};
		while (data.length) {
			for(var i = 0; i < cols; i++){        
				let dataitem = data.shift();
        if(!dataitem){break;}
        let div = document.createElement("div");
        div.className = "box";
        div.innerHTML = `<img src=${dataitem.src}>
                      <a href="javascript:void(0)">${dataitem.title}</a>`
				boxs[i].appendChild(div);       
			};
		}
	}
  function appendBox(container,data) {
    let boxs = document.getElementsByClassName("boxs"); 
    cols = boxs.length;

    console.log('更新');
    console.log(data.length);
    while (data.length) {
      for(var i = 0; i < cols; i++){       
      console.log(i) 
        let dataitem = data.shift();
        if(!dataitem){break;}
        let div = document.createElement("div");
        div.className = "box";
        div.innerHTML = `<img src=${dataitem.src}>
                      <a href="javascript:void(0)">${dataitem.title}</a>`
        boxs[i].appendChild(div);       
      };
    }
  }


// 模拟数据
let data1 = [{
      "src": "./img/1.png",
      "title": "第一怪 竹筒当烟袋"
  }, {
      "src": "./img/2.png",
      "title": "第二怪 草帽当锅盖"
  }, {
      "src": "./img/3.png",
      "title": "第三怪 这边下雨那边晒"
  }, {
      "src": "./img/4.png",
      "title": "第四怪 四季服装同穿戴"
  }, {
      "src": "./img/5.png",
      "title": "第五怪 火车没有汽车快"
  }, {
      "src": "./img/6.png",
      "title": "第六怪 火车不通国内通国外"
  }, {
      "src": "./img/7.png",
      "title": "第七怪 老奶爬山比猴快"
  }, {
      "src": "./img/8.png",
      "title": "第八怪 鞋子后面多一块"
  }, {
      "src": "./img/9.png",
      "title": "第九怪 脚趾四季露在外"
  }, {
      "src": "./img/10.png",
      "title": "第十怪 鸡蛋拴着卖"
  }, {
      "src": "./img/11.png",
      "title": "第十一怪 粑粑叫饵块"
  }, {
      "src": "./img/12.png",
      "title": "第十二怪 花生蚕豆数着卖"
  }, {
      "src": "./img/13.png",
      "title": "第十三怪 三个蚊子一盘菜"
  }, {
      "src": "./img/14.png",
      "title": "第十四怪 四个老鼠一麻袋"
  }, {
      "src": "./img/15.png",
      "title": "第十五怪 树上松毛扭着卖"
  }, {
      "src": "./img/16.png",
      "title": "第十六怪 姑娘叫老太"
  }, {
      "src": "./img/17.png",
      "title": "第十七怪 小和尚可以谈恋爱"
  }, {
      "src": "./img/18.png",
      "title": "第十八怪 背着娃娃谈恋爱"
}]
/**
*以上区域书写代码
*/
})()