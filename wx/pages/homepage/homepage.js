// pages//index.js
Page({
  data: {
    list: []
  },
  getHotArticlesList: function () {
    this.setData({
      list: []
    });

    var list = [];
    var i;
    for (i=0;i<10;i++) {
      list.push({
        title: "标题党标题党",
        createUserName: "csq",
        createTime: "2018-06-22 14:35",
        readedNum: 30,
        mark: "javascript",
        content: "以前写前端项目打包部署，都自从用了Jenkins持续集成工具，写前端项目越来越工程化，再也不用担心忘记部署项目，也不用烦躁每次打包压缩后还要部署多个服务器和环境，更开心的是每次家里写完代码，不用远程公司部署项目，提交代码后自动会为你部署。本文基于React的前端项目和GitLab的代码仓库以及Windows(其他系统平台大同小异) ，简述Jenkins实现自动部署的配置。"
      })
    }
    list.map(function(item,index) {
      if (item.content && item.content.length > 120) {
        item.content = item.content.slice(0,120) + '...'
      }
    })
    this.setData({
      list: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotArticlesList();
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