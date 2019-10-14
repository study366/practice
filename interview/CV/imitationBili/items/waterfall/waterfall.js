window.onload = function() {
    // 设置container宽度
    var screenWidth = document.documentElement.offsetWidth,
        boxWidth = document.getElementsByClassName('container')[0].getElementsByTagName('div')[0].clientWidth + 20,
        col = Math.floor(screenWidth / boxWidth),
        containerWidth = col * boxWidth;
    document.getElementsByClassName('container')[0].style.width = containerWidth + 'px';
    //获取盒子数量
    // 盒子序列号小于列数时   设置数组记录每列高度 选出最矮 的；
    // 盒子大于列数时，高度加在最低列，
    // 位置设置 top  最低列的高度  left 最低列的距离左边的距离
    var heightArray = [],
        index = 0;
    box = document.getElementsByClassName('container')[0].getElementsByTagName('div');
    for (var i = 0; i < box.length; i++) {
        if (i < col) {
            heightArray[i] = box[i].clientHeight;
            console.log(heightArray[i]);
            console.log('以上是第个' + i);
        }
        // 获取最小列
        if (i >= col) {
            var min = Math.min.apply(null, heightArray);
            console.log(min);
            // 获取最小列索引
            index = heightArray.indexOf(min);			
            console.log(index);
            // 获取最小列左偏移量
            minOffsetLeft = box[index].offsetLeft;
            console.log(minOffsetLeft);
            console.log('分割');
            // 插入盒子 位置 top 小高 left左
            box[i].style.position = 'absolute';
            box[i].style.top = min + 20 + 'px';
            box[i].style.left = minOffsetLeft - 10 + 'px';
            // 数组高度插入
            heightArray[index] += box[i].offsetHeight + 20;
        }
    }
    console.log(heightArray);
    // 把最新的box加进去
}