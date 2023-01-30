var a = getApp();

Page({
    data: {
        UserAvatar: "",
        nickname: "",
        companyName: ""
    },
    onLoad: function(e) {
        var t = this;
        console.log(a.globalData.openid), wx.request({
            url: "https://express.jwm-yun.com/b/search",
            data: {
                openid: a.globalData.openid
            },
            success: function(a) {
                t.setData({
                    UserAvatar: a.data.recordset[0].avatar,
                    nickname: a.data.recordset[0].nickname,
                    companyName: a.data.recordset[0].companyName
                });
            },
            fail: function(a) {
                console.error(a);
            }
        });
    },
    chooseAvatarImg: function() {
        var a = this;
        wx.chooseMedia({
            count: 1,
            mediaType: "image",
            success: function(e) {
                console.log(e.tempFiles[0]);
                var t = e.tempFiles[0].tempFilePath;
                a.setData({
                    UserAvatar: t
                });
            }
        });
    },
    editCompany: function(a) {
        this.setData({
            companyName: a.detail.value
        });
    },
    editNickname: function(a) {
        this.setData({
            nickname: a.detail.value
        });
    },
    saveUserInfo: function(e) {
        wx.request({
            url: "https://express.jwm-yun.com/b/userupdate",
            data: {
                openid: a.globalData.openid,
                avatar: this.data.UserAvatar,
                nickname: this.data.nickname,
                companyName: this.data.companyName
            },
            success: function(a) {
                console.log("update database successfully!");
            }
        }), wx.navigateBack({
            delta: 0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});