;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 3:
/***/ (function(module, exports) {

//index.js
var app = getApp();
      Page({
        data: {
          sidebarVisible: true,
          heightArr: 0,
          classfiySelect: "",
          leftText: [{
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
          // 侧边栏
          count: 0,
          longitude: 108.449951,
          latitude: 30.75482411,
          boxDisplay: true,
          repairFeedbackDisplay: false,
          disabled: true,
          markers: [ //标记点的位置
            //位置1
            {
              id: 0,
              iconPath: "../img/mapMarker.png",
              latitude: 30.75460738665743,
              longitude: 108.45080852508545,
              width: 28,
              height: 32,
              title: "位置1"
            },
            //位置2
            {
              id: 1,
              iconPath: "../img/mapMarker.png",
              latitude: 30.754323336062793,
              longitude: 108.45502227544787,
              width: 28,
              height: 32,
              title: "位置2"
            },
            //位置3
            {
              id: 2,
              iconPath: "../img/mapMarker.png",
              latitude: 30.75369758634216,
              longitude: 108.455183878541,
              width: 28,
              height: 32,
              title: "位置3"
            },
            //位置4
            {
              id: 3,
              iconPath: "../img/mapMarker.png",
              latitude: 30.75272201472983,
              longitude: 108.4551912546158,
              width: 28,
              height: 32
            },
            //位置5
            {
              id: 4,
              iconPath: "../img/mapMarker.png",
              latitude: 30.75124164819243,
              longitude: 108.45475271344186,
              width: 28,
              height: 32
            },
            //位置6
            {
              id: 5,
              iconPath: "../img/mapMarker.png",
              latitude: 30.749914580016547,
              longitude: 108.4532768279314,
              width: 28,
              height: 32
            },
            //位置7
            {
              id: 6,
              iconPath: "../img/mapMarker.png",
              latitude: 30.74801799565195,
              longitude: 108.4471144527197,
              width: 28,
              height: 32
            },
            //位置8
            {
              id: 7,
              iconPath: "../img/mapMarker.png",
              latitude: 30.74835735204452,
              longitude: 108.45153607428075,
              width: 28,
              height: 32
            },
          ],
          timer: null,
          feedbackErea: "",
          submitFeedback: [],
          polyline: [{
            points: [
              { longitude: 108.4509234210168, latitude: 30.754826691982412 },
              { longitude: 108.45355640488219, latitude: 30.754678318725414 },
              { longitude: 108.45477577857912, latitude: 30.7549286983912 },
              { longitude: 108.4550671332438, latitude: 30.75418683088857 },
              { longitude: 108.45516425143819, latitude: 30.75388080886571 },
              { longitude: 108.45522899679145, latitude: 30.752907095882897 },
              { longitude: 108.4551426694893, latitude: 30.752118844708402 },
              { longitude: 108.45468783427953, latitude: 30.751063462695264 },
              { longitude: 108.4533675693267, latitude: 30.749930902667852 },
              { longitude: 108.45300121458376, latitude: 30.74973231363305 },
              { longitude: 108.4512078173343, latitude: 30.749229880131157 },
              { longitude: 108.4507755507459, latitude: 30.74882661192453 },
              { longitude: 108.44986742847482, latitude: 30.748194424329228 },
              { longitude: 108.4497850253997, latitude: 30.748083946547016 },
              { longitude: 108.44975206420008, latitude: 30.747987632476274 },
              { longitude: 108.45061564830814, latitude: 30.748075448270676 },
              { longitude: 108.45121883875345, latitude: 30.7482624106225 },
              { longitude: 108.45152867431466, latitude: 30.748372888200603 },
              { longitude: 108.45263354204951, latitude: 30.748090681132936 },
              { longitude: 108.44873669270851, latitude: 30.747987840141406 },
              { longitude: 108.44767606259802, latitude: 30.748094327375885 },
              { longitude: 108.44646674608339, latitude: 30.74781746026297 }
            ],
            color: "#24acf2",
            width: 6,
            dottedLine: false
          }],
          feedbacks: [
            { name: 'location', value: '校车的定位错误；定位与实际位置偏离' },
            { name: 'number', value: '校车车号不对应' }
          ]
        },
        onLoad: function () {
          console.log("onLoad");
          this.mapCtx = wx.createMapContext('myMap');
          const fixedLatitude = 30.75151580349567; // 指定的纬度
          const fixedLongitude = 108.4526317305706; // 指定的经度
          this.setData({
            latitude: fixedLatitude,
            longitude: fixedLongitude
          });
          this.mapCtx.moveToLocation({ // 移动地图到指定位置
            latitude: fixedLatitude,
            longitude: fixedLongitude
          });
           // 侧边栏
           var sysInfo = wx.getSystemInfoSync();
           this.setData({
             classfiySelect: this.data.leftText[0].id,
             screenHeight: sysInfo.windowHeight,
             sidebarVisible: true  //确保侧边栏始终显示
           })
 
           this.length('06')
        },
        // 侧边栏
        //滚动触发
        //侧边栏
scroll: function (e) {
  const scrollTop = e.detail.scrollTop;
  let h = 0;
  let classfiySelect = this.data.leftText[0].id; // 默认选中第一个

  this.data.leftText.forEach((clssfiy) => {
    const itemHeight = this.calculateHeight(clssfiy.id);
    if (scrollTop >= h) {
      classfiySelect = clssfiy.id; // 更新选中的分类
    }
    h += itemHeight || 0;
  });

  this.setData({ classfiySelect });
},

calculateHeight: function (id) {
  const query = wx.createSelectorQuery();
  let heightArr = [];

  query.selectAll('.listHeight').boundingClientRect((rects) => {
    heightArr = rects.map((res) => res.height);
    
    // 保存每个项目的高度
    const cumulativeHeights = heightArr.map((_, idx) =>
      heightArr.slice(0, idx + 1).reduce((sum, height) => sum + height, 0)
    );

    this.setData({ heightArr: cumulativeHeights });
  }).exec();

  const index = this.data.rightData.findIndex(item => item.id === id);
  return index !== -1 ? heightArr[index] : 0; // 返回高度或默认值
},

//点击左边事件
left_list: function (e) {
  const l_id = e.currentTarget.dataset.id;
  this.setData({
    rigId: l_id,
    classfiySelect: l_id
  });
},

fetchLocation: function() {
  var that = this;
  wx.getLocation({
    type: 'gcj02',
    success: function(res) {
      var latitude = res.latitude;
      var longitude = res.longitude;
      console.log("当前位置的经纬度为：", res.latitude, res.longitude);
      that.setData({
        latitude: res.latitude,
        longitude: res.longitude
      });
    },
    fail: function() {
      console.error("获取位置失败");
    }
  });
},

regionchange: function(e) {
  if (e.type === 'end') {
    this.mapCtx.getCenterLocation({
      success: (res) => {
        this.setData({
          templog: res.longitude,
          templat: res.latitude
        });
      }
    });
  }
},
  onReady: function() {
    console.log("onReady");
    this.loginAndFetchBusData();
  },
  loginAndFetchBusData: function() {
    var that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          that.authorizeUser(res.code);
        } else {
          console.error("登录失败");
        }
      },
      fail: function() {
        console.error("wx.login 调用失败");
      }
    });
  },
  
  authorizeUser: function(code) {
    var that = this;
    app.request(app.BASE_URL + '/user/session', 'POST', { code: code }, function(res) {
      wx.setStorageSync('token', res.header.Authorization);
      that.startFetchingBusData();
    }, function() {
      console.error("用户授权失败");
    }, { 'content-type': 'application/json' });
  },
  
  startFetchingBusData: function() {
    var that = this;
    var busPositionUrl = app.BASE_URL + '/bus/all';
    var token = wx.getStorageSync('token');
    that.setData({
      timer: setInterval(function() {
        app.request(busPositionUrl, 'GET', '', function(res) {
          that.updateMarkers(res.data.bused);
        }, function() {
          console.error("获取车辆定位信息失败");
        }, { 'Authorization': token });
      }, 4000),
    });
  },

  updateMarkers: function(buses) {
    var markers = buses.map((bus) => ({
      id: parseInt(bus.type),
      iconPath: "../img/greenBus.png",
      latitude: bus.position.la,
      longitude: bus.position.lo,
      width: 25,
      height: 25
    }));
    this.setData({ markers });
    console.log(this.data.markers);
  },

  onShow: function() {
    console.log("onShow");
  },

  repair: function() {
    this.setData({
      boxDisplay: false,
      repairFeedbackDisplay: true
    });
  },
  jiuu: function() {
    this.setData({
      count: this.data.count + 1
    });
    console.log("当前计数：", this.data.count);

  },

  checkboxChange: function(e) {
    this.setData({
      submitFeedback: e.detail.value
    });
  },

  feedbackErea: function(e) {
    this.setData({
      feedbackErea: e.detail.value
    });
  },

  submitFeedback: function() {
    var that = this;
    var feedbackData = {
      type: that.data.submitFeedback.toString(),
      text: that.data.feedbackErea
    };
    var token = wx.getStorageSync('token');
    app.request(app.BASE_URL + '/feedback', 'POST', feedbackData, function(res) {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000,
        mask: true
      });
      that.setData({
        repairFeedbackDisplay: false,
        boxDisplay: true
      });
    }, function() {
      console.error("反馈提交失败");
    }, { 'Authorization': token });
  },

  repairFeedbackBox: function() {
    this.setData({
      repairFeedbackDisplay: false,
      boxDisplay: true
    });
  },

  Unload: function() {
    clearInterval(this.data.timer);
  },
});

/***/ })

},[[3,0]]]);
