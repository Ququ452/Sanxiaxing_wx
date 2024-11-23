
// pages/feedback/feedback.js
Page({
  data: {
    feedbackText: ''
  },

  onInput(e) {
    this.setData({
      feedbackText: e.detail.value
    });
  },

  submitFeedback() {
    if (!this.data.feedbackText) {
      wx.showToast({
        title: '反馈内容不能为空！',
        icon: 'none'
      });
      return;
    }

    // 模拟提交反馈，可以替换为实际的API请求
    wx.request({
      url: 'https://example.com/api/submitFeedback', // 假设的API地址
      method: 'POST',
      data: {
        feedback: this.data.feedbackText
      },
      success: (res) => {
        wx.showToast({
          title: '反馈提交成功！',
          icon: 'success'
        });
        this.setData({
          feedbackText: ''
        });
      },
      fail: () => {
        wx.showToast({
          title: '提交失败，请稍后再试。',
          icon: 'none'
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