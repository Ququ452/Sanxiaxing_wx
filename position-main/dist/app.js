;require('./runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// app.js
App({
  BASE_URL: "http://localhost:7298/wx",
  onLaunch: function () {
    this.request = __webpack_require__(1).request;
    var agreement = wx.getStorageSync('agreement');
    
    if (agreement) {
      wx.reLaunch({
        url: 'pages/index/index'
      });
    } else {
      console.log("No agreement found"); // 可选择性日志
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var request = function request(url, method, data, succ, _fail, header, dataType) {
  wx.request({
    url: url,
    data: data,
    dataType: dataType,
    header: header,
    method: method,
    success: function (res) {
      if (succ) succ(res);
    },
    fail: function (err) {
      console.error("Request failed: ", err); // 增加错误日志
      if (_fail) _fail(err);
    }
  });
};

module.exports = {
  request: request
};

/***/ })
],[[0,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJCQVNFX1VSTCIsIm9uTGF1bmNoIiwicmVxdWVzdCIsInJlcXVpcmUiLCJ0aGF0IiwiYWdyZWVtZW50Iiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJyZUxhdW5jaCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjIiwiZmFpbCIsImhlYWRlciIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlcyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUdBQSxHQUFHLENBQUM7QUFDRkMsVUFBUSxFQUFFLHdCQURSO0FBRUZDLFVBQVEsRUFBRSxvQkFBWTtBQUNwQixTQUFLQyxPQUFMLEdBQWVDLG1CQUFPLENBQUMsQ0FBRCxDQUFQLENBQThCRCxPQUE3QztBQUNBLFFBQU1FLElBQUksR0FBRyxJQUFiO0FBRUEsUUFBTUMsU0FBUyxHQUFHQyxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsV0FBbEIsQ0FBbEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjs7QUFFQSxRQUFJQSxTQUFKLEVBQWM7QUFDWkMsUUFBRSxDQUFDSSxRQUFILENBQVk7QUFDVkMsV0FBRyxFQUFFO0FBREssT0FBWjtBQUdEO0FBQ0Y7QUFmQyxDQUFELENBQUgsQzs7Ozs7O0FDSEEsSUFBTVQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVVMsR0FBVixFQUFlQyxNQUFmLEVBQXVCQyxJQUF2QixFQUE2QkMsSUFBN0IsRUFBbUNDLEtBQW5DLEVBQXlDQyxNQUF6QyxFQUFpREMsUUFBakQsRUFBMkQ7QUFDekVYLElBQUUsQ0FBQ0osT0FBSCxDQUFXO0FBQ1RTLE9BQUcsRUFBRUEsR0FESTtBQUVURSxRQUFJLEVBQUVBLElBRkc7QUFHVEksWUFBUSxFQUFFQSxRQUhEO0FBSVRELFVBQU0sRUFBRUEsTUFKQztBQUtUSixVQUFNLEVBQUVBLE1BTEM7QUFNVE0sV0FBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7QUFDZCxVQUFJTCxJQUFKLEVBQVVBLElBQUksQ0FBQ0ssR0FBRCxDQUFKO0FBQ1gsS0FSUTtBQVNUSixRQUFJLEVBQUUsY0FBQUssR0FBRyxFQUFJO0FBQ1gsVUFBSUwsS0FBSixFQUFVQSxLQUFJLENBQUNLLEdBQUQsQ0FBSjtBQUNYO0FBWFEsR0FBWDtBQWFELENBZEQ7O0FBZUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmcEIsU0FBTyxFQUFQQTtBQURlLENBQWpCLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAuanNcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5cbkFwcCh7XG4gIEJBU0VfVVJMOiBcImh0dHBzOi8vYnVzLmR1YW5sdi5sdGRcIixcbiAgb25MYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1aXJlKCcuL3V0aWxzL3JlcXVlc3QuanMnKS5yZXF1ZXN0O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgXG4gICAgY29uc3QgYWdyZWVtZW50ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2FncmVlbWVudCcpXG4gICAgY29uc29sZS5sb2coXCJhZ3JlZW1lbnRcIilcbiAgICBjb25zb2xlLmxvZyhhZ3JlZW1lbnQpXG4gIFxuICAgIGlmIChhZ3JlZW1lbnQpe1xuICAgICAgd3gucmVMYXVuY2goe1xuICAgICAgICB1cmw6ICdwYWdlcy9pbmRleC9pbmRleCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSIsImNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAodXJsLCBtZXRob2QsIGRhdGEsIHN1Y2MsIGZhaWwsIGhlYWRlciwgZGF0YVR5cGUpIHtcclxuICB3eC5yZXF1ZXN0KHtcclxuICAgIHVybDogdXJsLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGRhdGFUeXBlOiBkYXRhVHlwZSxcclxuICAgIGhlYWRlcjogaGVhZGVyLFxyXG4gICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICBpZiAoc3VjYykgc3VjYyhyZXMpO1xyXG4gICAgfSxcclxuICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgIGlmIChmYWlsKSBmYWlsKGVycik7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXF1ZXN0XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
