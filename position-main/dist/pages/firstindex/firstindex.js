// pages/firstindex/firstindex.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp(); // 获取应用实例
    const base_url = app.BASE_URL; // 获取 base_url
    console.log('base_url:', base_url); // 打印 base_url
    wx.request({
      url: base_url, // 请求的 URL
      method: 'GET', // 请求方法
      success: (res) => {
        // 请求成功的回调
        console.log('请求成功:', res.data);
        // 这里可以处理返回的数据
      },
      fail: (err) => {
        // 请求失败的回调
        console.error('请求失败:', err);
      }
    });
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
