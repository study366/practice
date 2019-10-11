;

;console.log('waterfall ok');
(function () {
  window.onload = function() {    
    let container = document.getElementsByClassName("container")[0];    
    placingBoxes(container)  ;

    let body = document.getElementsByTagName("body")[0];
        body.addEventListener("scroll",function (e) {         
         console.log(this.scrollTop);
         let docHeight = document.body.scrollHeight;//body 总高度
         let windowHeight = document.documentElement.scrollHeight;//视口高度
         
         if(this.scrollTop > docHeight - windowHeight - 50){//
          appendBox(container);
         }
        })
  }
  let timeout ;
  window.onresize = function () {    
    let container = document.getElementsByClassName("container")[0]; 
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(() =>{
       placingBoxes(container);
    }, 400) 
  }

  function appendBox (container) {    
    let fragment = '' ;
    let data = data1;  //调用数据
    for(let i = 0; i < data.length; i++){
      fragment += `<div>6<img src=${data[i].src} alt=""><a href="javascript:void(0)">${data[i].title}</a></div>`
    }
    
    container.innerHTML += fragment;
   
    setTimeout(()=>{
      placingBoxes(container);
    }, 100)
    
  }
  function placingBoxes (container) {//排列盒子
    if(!isElement(container)){
      throw new Error("需要传入dom");
    }
    //计算rem/px 计算出margin值
    let rootFontSize = document.getElementsByTagName("html")[0].style.fontSize;
      rootFontSize = parseInt(rootFontSize, 10);
    let scale = rootFontSize/1;
    let marginTopBottom = 0.2 *  scale;
    let marginLeft = 0.1 * scale;

    //计算总列数，计算/设置container宽度；
    let viewWidth = container.parentElement.offsetWidth > 750 ? 750 : container.parentElement.offsetWidth;
    let boxWidth = container.getElementsByTagName("div")[0].offsetWidth + marginLeft * 2 + 1;
    let columns = Math.floor((viewWidth-5) / boxWidth);
    let containerWidth = boxWidth * columns + columns;  
      container.style.width = containerWidth + 'px';
  
    let containerMarginLeft = container.offsetLeft;  //容器左边距
    let boxArray = container.getElementsByTagName("div"); 
    let heightArray = [0];
    let minIndex = 0;
    //生成高度数组；
    for(let i = 0 ; i < columns; i++){
     heightArray[i] = 0;
    }
    // 遍历循环，最矮的加图
    for(var i = 0; i < boxArray.length; i++){    
      let min = Math.min.apply(null, heightArray);
      minIndex = heightArray.indexOf(min);     
      let minOffsetLeft = boxArray[minIndex].offsetLeft;

      boxArray[i].style.position = 'absolute';
      boxArray[i].style.top = min + marginTopBottom + 'px';
      boxArray[i].style.left = boxWidth * minIndex + 'px';

      heightArray[minIndex] += boxArray[i].offsetHeight + marginTopBottom;
    }
  }


  function isElement(obj){
    return (typeof HTMLElement === 'object') 
    ?(obj instanceof HTMLElement)
    :!!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string');
  }

/**
*模拟数据放置区域
*
*
**/
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
  /* 在以上区域书写你的代码**/
})()


