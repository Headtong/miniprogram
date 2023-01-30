var a = getApp();

Page({
    data: {
        avatarUrl: "../images/avatar.png",
        userInfo: "",
        companyName: "",
        disabled: !0,
        plain: !0
    },
    company: function(a) {
        this.setData({
            companyName: a.detail.value
        }), console.log(this.data.companyName), "" != this.data.companyName && "" != this.data.userInfo ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    judgefirm: function(a) {
        console.log(a.detail.value), wx.request({
            url: "https://express.jwm-yun.com/b/firmId",
            data: {
                value: a.detail.value
            },
            success: function(a) {
                0 === a.data.recordset.length && wx.showToast({
                    title: "请输入公司全称，否则无法查询数据！",
                    icon: "none"
                });
            }
        });
    },
    nickname: function(a) {
        console.log(a), this.setData({
            userInfo: a.detail.value
        }), console.log(this.data.userInfo), "" != this.data.companyName && "" != this.data.userInfo ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    chooseavatar: function(a) {
        var t = a.detail.avatarUrl;
        this.setData({
            avatarUrl: t
        });
    },
    getUserlnfo: function(t) {
        var e = this;
        console.log(t), this.setData({
            companyName: t.detail.value.inputCompany,
            userInfo: t.detail.value.inputNickname
        }), console.log(this.data.avatarUrl), wx.login({
            success: function(t) {
                console.log(t), wx.request({
                    url: "https://express.jwm-yun.com/b/openid",
                    header: {
                        "content-type": "application/json"
                    },
                    data: {
                        js_code: t.code
                    },
                    mothod: "GET",
                    success: function(t) {
                        console.log(t.data), a.globalData.openid = t.data, wx.request({
                            url: "https://express.jwm-yun.com/b/userInfo",
                            data: {
                                avatar: e.data.avatarUrl,
                                companyName: e.data.companyName,
                                nickname: e.data.userInfo,
                                openid: t.data
                            },
                            success: function(a) {
                                console.log("storage database successfully!");
                            }
                        });
                    },
                    fail: function(a) {
                        console.error(a);
                    }
                });
            }
        }), wx.setStorageSync("key", this.data.companyName), wx.setStorageSync("key", this.data.avatarSrcUrl), 
        wx.setStorageSync("key", t.detail.value.inputNickname), wx.navigateBack({
            delta: 0
        });
    },
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});