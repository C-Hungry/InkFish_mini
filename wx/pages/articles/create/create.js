//获取应用实例
const app = getApp()

Page({
  data: {
    borderStyle: "8rpx solid #2d8cf0"
  },
  bindInputFocus() {
    this.setData({
      borderStyle: "8rpx solid #2d8cf0"
    })
  },
  bindInputBlur() {
    this.setData({
      borderStyle: "4rpx solid #dddee1"
    })
  },
  onLoad: function () {

  }
})