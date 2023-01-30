var t = getApp();

Page({
    data: {
        startDate: "",
        endDate: "",
        TktCodeValue: "",
        companyName: ""
    },
    onLoad: function(t) {},
    onShow: function() {
        var a = this;
        function e(t) {
            var a = new Date();
            return a.setDate(a.getDate() + t), a.getFullYear() + "-" + (a.getMonth() + 1).toString().padStart(2, "0") + "-" + a.getDate().toString().padStart(2, "0");
        }
        wx.request({
            url: "https://express.jwm-yun.com/b/search",
            data: {
                openid: t.globalData.openid
            },
            success: function(t) {
                a.setData({
                    companyName: t.data.recordset[0].companyName
                });
            }
        });
        var n = e(-1), i = e(1);
        this.setData({
            startDate: n,
            endDate: i
        });
    },
    startDateChange: function(t) {
        this.setData({
            startDate: t.detail.value
        });
    },
    endDateChange: function(t) {
        this.setData({
            endDate: t.detail.value
        });
    },
    inputE: function(t) {
        console.log(t.detail.value), this.setData({
            TktCodeValue: t.detail.value
        });
    },
    queryE: function() {
        wx.showLoading({
            title: "加载中，请稍后！"
        }), setTimeout(function(t) {
            wx.hideLoading();
        }, 3500), wx.navigateTo({
            url: "../repairOrder/repairOrder?id=" + JSON.stringify(this.data)
        });
    },
    toIndex: function(t) {
        wx.navigateTo({
            url: "../index/index"
        });
    }
});