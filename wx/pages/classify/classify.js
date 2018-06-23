// pages//index.js
Page({
  data: {
    items: []
  },
  getClassifyList: function() {
    this.setData({
      items: [
        {
          label: "H5",
          iconPath: "../../images/H5.png",
          path: "",
          bgColor: "#ff9900"
        },
        {
          label: "JavaScript",
          iconPath: "../../images/JavaScript.png",
          path: "",
          bgColor: "#ed3f14"
        },
        {
          label: "Node.js",
          iconPath: "../../images/nodejs.png",
          path: "",
          bgColor: "#19be6b"
        },
        {
          label: "Java",
          iconPath: "../../images/Java.png",
          path: "",
          bgColor: "#2d8cf0"
        },
        {
          label: "其他",
          iconPath: "../../images/others.png",
          path: "",
          bgColor: "#80848f"
        }
      ]
    })
  },
  onLoad: function (options) {
    this.getClassifyList();
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