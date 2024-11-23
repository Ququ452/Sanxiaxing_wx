// pages/tsvi/tsvi.js
Page({
  data: {
    reminderText: '还没有发车时间提醒，请点击下方按钮获取最新通知。'
  },

  onLoad() {
    // 可以在页面加载时请求通知
    this.fetchNotification();
  },

  fetchNotification() {
    // 模拟获取通知内容，可以替换为实际的API请求
    wx.request({
      url: 'https://example.com/api/getNotification', // 假设的API地址
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.reminderTime) {
          this.setData({
            reminderText: `请注意，您的发车时间是：${res.data.reminderTime}`
          });
        } else {
          this.setData({
            reminderText: '没有可用的发车时间提醒。'
          });
        }
      },
      fail: () => {
        this.setData({
          reminderText: '获取通知失败，请稍后再试。'
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})