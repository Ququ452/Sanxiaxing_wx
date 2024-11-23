// pages/history/history.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    userId: '',
    stationName: '',
    timestamp: ''
  },
  
  inputUserId(e) {
    this.setData({ userId: e.detail.value });
  },
  
  inputStationName(e) {
    this.setData({ stationName: e.detail.value });
  },
  
  inputTimestamp(e) {
    this.setData({ timestamp: e.detail.value });
  },

  addRecord() {
    const { userId, stationName, timestamp } = this.data;
    if (!userId || !stationName || !timestamp) {
      wx.showToast({ title: '请填写所有字段', icon: 'none' });
      return;
    }

    const record = { userId, stationName, timestamp };
    app.globalData.records.push(record);
    wx.showToast({ title: '记录已添加', icon: 'success' });
    
    // 清空输入
    this.setData({ userId: '', stationName: '', timestamp: '' });
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