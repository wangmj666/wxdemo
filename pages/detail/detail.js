// pages/detail/detail.js
var common = require('../../utils/common.js') //引用公共JS文件
Page({



  //添加到收藏夹
  addFavorites: function(options) {
    let article = this.data.article; //获取当前新闻
    wx.setStorageSync(article.id, article); //添加到本地缓存
    this.setData({
      isAdd: true
    }); //更新按钮显示
  },
  //取消收藏
  cancelFavorites: function() {
    let article = this.data.article; //获取当前新闻
    wx.removeStorageSync(article.id); //从本地缓存删除
    this.setData({
      isAdd: false
    }); //更新按钮显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取页面跳转来时的携带数据
    let id = options.id 

    //检查当前新闻是否在收藏夹中
    var article = wx.getStorageSync(id)
    //已存在
    if (article != '') {
      this.setData({
        article:article,
        isAdd: true
      })
    }
    //不存在
    else {
      let result = common.getNewsDetail(id)
      //获取到新闻内容
      if (result.code == '200') {
        this.setData({
          article: result.news,
          isAdd: false
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})