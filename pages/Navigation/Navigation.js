const app = getApp()
var init;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length: 6,   //输入框个数
    isFocus_s: true,  //聚焦
    content_d : "",   //输入的内容
    is_ps: false, //是否明文显示
    //计时器
    hour:0,
    minute:0,
    second:0,
    millisecond:0,
    timecount:'00:00:00',
    cost:0,
    flag:1,
    endtime:"",
    //计数
    index: 0,
    index2 : 0,
    // 拖拽参数
    writePosition: [80, 90], //默认定位参数
    writesize: [0, 0],// X Y 定位
    window: [0, 0], //屏幕尺寸
    write: [0, 0], //定位参数
    scrolltop: 0,//据顶部距离
  },
  jishu4: function () {
    var that2 = this;
    if(that2.data.index2 > 0){
      this.setData({ index2: that2.data.index2 - 1 });
    }
  },
  jishu3: function () {
    var that2 = this;

    this.setData({ index2: that2.data.index2 + 1 });

  },
  jishu2: function () {
    var that = this;
    if(that.data.index > 0){
      this.setData({ index: that.data.index - 1 });
    }
  },
  jishu: function () {
    var that = this;
      this.setData({ index: that.data.index + 1 });
    

  },
  start:function(){
    clearInterval(init);
    var that=this;
    that.setData({
      hour:0,
      minute:0,
      second:0,
      millisecond:0
    })
    init=setInterval(function(){
      that.timer()
    },50);
  },
  stop:function(){
    clearInterval(init);
  },
  Reset:function(){
    var that=this;
    clearInterval(init);
    that.setData({
      hour:0,
      minute:0,
      second:0,
      millisecond:0,
      timecount:'00:00:00'
    })
  },
  timer:function(){
    var that = this;
    console.log(that.data.millisecond)
    that.setData({
      millisecond:that.data.millisecond+5
    })
    if(that.data.millisecond>=100){
      that.setData({
        millisecond:0,
        second:that.data.second + 1
      })
    }
    if(that.data.second >= 60){
      that.setData({
        second:0,
        minute:that.data.minute+1
      })
    }
    if(that.data.minute>=60){
      that.setData({
        minute:0,
        hour:that.data.hour+1
      })
    }
    that.setData({
      timecount:that.data.hour+":"+that.data.minute+":"+that.data.second+":"+that.data.millisecond
    })
  },

  Focus_d(e){
    var that = this;
    console.log(e.detail.value);
    var inputValue_s = e.detail.value;
    that.setData({
      content_d : inputValue_s,
      btncl:true,
    })
  },
  Tap_d(){
    var that = this;
    that.setData({
      isFocus_s : true,
      btncl:true,
    })
  },

  formSubmit(e){
    console.log(e.detail.value.password);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})