var t = getApp();

Page({
    data: {
        companyName: "",
        expressValue: "",
        imgUserSrc: "",
        nickname: "",
        startDate: "",
        endDate: ""
    },
    onLoad: function(t) {},
    onShow: function(e) {
        var a = this;
        function n(t) {
            var e = new Date();
            return e.setDate(e.getDate() + t), e.getFullYear() + "-" + (e.getMonth() + 1).toString().padStart(2, "0") + "-" + e.getDate().toString().padStart(2, "0");
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
        var i = n(-1), s = n(1);
        this.setData({
            startDate: i,
            endDate: s
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
    queryE: function() {
        wx.showLoading({
            title: "加载中，请稍后！"
        }), setTimeout(function(t) {
            wx.hideLoading();
        }, 3500), wx.navigateTo({
            url: "../express/express?id=" + JSON.stringify(this.data)
        });
    },
    toIndex: function(t) {
        wx.navigateTo({
            url: "../index/index"
        });
    }
});