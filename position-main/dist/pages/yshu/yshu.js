// pages/yshu/yshu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   data: {
  locations: [
    { longitude: 108.449951, latitude: 30.75482411 }
  ],
  mapLocation: { // 添加地图中心位置
    longitude: 108.449951, 
    latitude: 30.75482411
  },

},

    selectedStation: '请选择站点',
    stations: [{
      id: "01",
      text1: "学校门口",
      img_url: "../img/greenBus.png",
    },
    {
      id: "02",
      text1: "明辨1栋",
      img_url: "../img/greenBus.png",
    },
    {
      id: "03",
      text1: "明辨2栋",
      img_url: "../img/greenBus.png",
    },
    {
      id: "04",
      text1: "明辨4栋",
      img_url: "../img/greenBus.png",
    },
    {
      id: "05",
      text1: "篮球场",
      img_url: "../img/greenBus.png",
    },
    {
      id: "06",
      text1: "山顶食堂",
      img_url: "../img/greenBus.png",
    },
    {
      id: "07",
      text1: "博学楼",
      img_url: "../img/greenBus.png",
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getCurrentLocation();
  },
  
 getCurrentLocation() {
  wx.getLocation({
    type: 'wgs84',
    success: res => {
      const { longitude, latitude } = res; // 获取经纬度
      this.setData({
        mapLocation: { longitude, latitude } // 更新地图中心点
      });
      // 这里可以选择更新 locations（如果需要的话）
      this.setData({
        locations: [{ longitude, latitude }]
      });
    },
    fail: err => {
      console.error(err);
      wx.showToast({
        title: '获取位置失败',
        icon: 'none'
      });
    }
  });
},

  
  onStationSelect() {
    const stationNames = this.data.stations.map(station => station.text1);
    wx.showActionSheet({
      itemList: stationNames,
      success: res => {
        if (res.tapIndex !== undefined) {
          this.setData({
            selectedStation: this.data.stations[res.tapIndex]
          });
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  },
  
  submitRequest() {
    // 提交请求逻辑
    wx.showToast({
      title: '请求已发送',
      icon: 'success'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady');
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
});
