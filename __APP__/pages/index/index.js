var e = getApp();

Page({
    data: {
        imgUserSrc: "",
        nickname: ""
    },
    onLoad: function(a) {
        this.setData({
            modalName: e.globalData.modalName
        });
    },
    onShow: function(a) {
        var t = this;
        setTimeout(function(e) {
            t.setData({
                modalName: null
            });
        }, 3000), wx.showLoading({
            title: "加载中，请稍候..."
        }), wx.login({
            success: function(a) {
                console.log(a), wx.request({
                    url: "https://express.jwm-yun.com/b/openid",
                    data: {
                        js_code: a.code
                    },
                    mothod: "GET",
                    success: function(a) {
                        console.log(a.data), e.globalData.openid = a.data, wx.request({
                            url: "https://express.jwm-yun.com/b/search",
                            data: {
                                openid: e.globalData.openid
                            },
                            success: function(a) {
                                wx.hideLoading(), console.log(a.data.recordset), console.log(0 === a.data.recordset.length), 
                                0 === a.data.recordset.length ? (setTimeout(function(e) {
                                    wx.showToast({
                                        icon: "none",
                                        title: "请先注册账号，才能查询信息！"
                                    });
                                }, 500), setTimeout(function(e) {
                                    wx.navigateTo({
                                        url: "../register/register"
                                    });
                                }, 3000), t.setData({
                                    nickname: "请您先登录！",
                                    imgUserSrc: "../images/avatar.png"
                                })) : wx.request({
                                    url: "https://express.jwm-yun.com/b/search",
                                    data: {
                                        openid: e.globalData.openid
                                    },
                                    success: function(e) {
                                        console.log(e.data), t.setData({
                                            imgUserSrc: e.data.recordset[0].avatar,
                                            nickname: e.data.recordset[0].nickname,
                                            companyName: e.data.recordset[0].companyName
                                        });
                                    },
                                    fail: function(e) {
                                        console.error(e);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    userInfo: function() {
        void 0 === this.data.companyName ? wx.navigateTo({
            url: "../register/register"
        }) : wx.navigateTo({
            url: "../user/user"
        });
    },
    navExpress: function(e) {
        wx.navigateTo({
            url: "../expressSrc/expressSrc"
        });
    },
    navRepair: function(e) {
        wx.navigateTo({
            url: "../repairSrc/repairSrc"
        });
    },
    showBanner: function(e) {
        this.setData({
            modalName: "Image"
        });
    },
    hideModal: function(e) {
        this.setData({
            modalName: null
        });
    }
});