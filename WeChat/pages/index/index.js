//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todayMenu:{'早餐':'','午餐':'','晚餐':''},    
    motto: 'Hello World',
    userInfo: {},
    vegetables:[],
    thisWeekMenu:[],
    quotes:'今天吃什么呢',
    meat:[],
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 创造菜单函数
  creatMenu:function () {
    console.log(this.data);
    /* body... */  
    // 定义即将使用的变量   
    let vegetable, meat, foodName;         
    this.data.thisWeekMenu = []; 

    // 随机选材组合程序，暂时不会封装，应封装成函数

    vegetable = Math.floor(Math.random() * this.data.vegetables.length);
    meat = Math.floor(Math.random() * this.data.meat.length)
    foodName = this.data.vegetables[vegetable] + '炒' + this.data.meat[meat];  

    // 获取今日时间，并且将未来七天的时间列成数组
    // 先转化为字符串，再转回date对象 以实现深复制
    let today = new Date();
    let dateArray = []; 
    today.setDate(today.getDate() - 1); 
    for(let week = 0; week < 7; week++){
      today.setDate(today.getDate() + 1); 
      console.log(today);
      dateArray[week] = today + '';
      dateArray[week] = new Date(dateArray[week]);
    }
    console.log(dateArray);   

    // 循环生成菜单，一周七天，一天三次 
    // j为4，j = 0 的时候是读取日期数据     
    for(let i = 0; i < 7; i++){
      this.data.thisWeekMenu[i] = [];
      for(let j = 0; j < 4; j++){
        // 读取日期数据
        // 先转换为字符串，然后切取所需时间 星期几
        if (j === 0) {          
          dateArray[i] += '';               
          this.data.thisWeekMenu[i][j] = dateArray[i].split(' ')[0];          
          continue;
        }
        // 执行一次随机生成菜名函数 该函数尚未封装
        vegetable = Math.floor(Math.random() * this.data.vegetables.length);
        meat = Math.floor(Math.random() * this.data.meat.length)
        foodName = this.data.vegetables[vegetable] + '炒' + this.data.meat[meat];    
        this.data.thisWeekMenu[i][j] = foodName;
      }
    }
    let k =1;
    for(let key in this.data.todayMenu){
      this.data.todayMenu[key] = this.data.thisWeekMenu[0][k++];
      console.log(key);
    }
    
    console.log(this.data.todayMenu);
    // 更新逻辑数据至视图层
    this.setData({
      todayMenu:this.data.todayMenu,
      thisWeekMenu:this.data.thisWeekMenu
    })
    console.log(this.data.thisWeekMenu);   
  },
    // 初始化数据
  init:function () {    
    this.data.vegetables = ['生菜','高笋','油麦菜','番茄','黄瓜','青椒','土豆'];
    this.data.meat = ['肉','鸡肉'];
    console.log(this.data.todayBreakfast);
  },
  // 加载时执行
  // 初始化函数
  onLoad: function () {
    this.init();    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
