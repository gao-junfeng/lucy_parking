Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab:0,
    currentSelect: 1,
    items: [{
      'image': "./image/timg2.jpg",
      'name': '张三',
      'company': '专家',
      'title': 'XXXXXXXXXXXXXXXXXXXXXXXX',
      'type': '3'
 
    },
    {
      'image': "",
      'name': '赵四',
      'company': '公司',
      'title': 'YYYYYYYYYYYYYYYYYYYYYYY',
      'type': '4'
 
    },
    {
      'image': "",
      'name': '王五',
      'company': '公司',
      'title': 'ZZZZZZZZZZZZZZZZZZZZZZZZ',
      'type': '2'
    }
 
    ]
  },
  onLoad: function () {
    var that = this;
 
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
 
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    }),
    wx.setNavigationBarTitle({
      title: '咨询服务',
    })
 
  },
 
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
 
    var that = this;
    that.setData({ currentTab: e.detail.current });
 
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
 
    var that = this;
 
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
