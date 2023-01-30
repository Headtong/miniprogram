var e = require("../../@babel/runtime/helpers/defineProperty");

getApp();

Page({
    data: {
        expressValue: "",
        startDate: "",
        endDate: "",
        expressMessageList: [],
        companyName: "",
        expressFirm: "",
        sjr: ""
    },
    onLoad: function(e) {
        var s = JSON.parse(e.id);
        this.setData({
            expressValue: s.expressValue,
            startDate: s.startDate,
            endDate: s.endDate,
            companyName: s.companyName,
            sjr: s.nickname
        }), this.req();
    },
    req: function() {
        var s = this;
        console.log(this.data.expressValue, this.data.companyName), wx.request({
            url: "https://express.jwm-yun.com/b/firmOrder",
            data: {
                startDate: this.data.startDate,
                endDate: this.data.endDate,
                sjdw: this.data.expressValue || this.data.companyName,
                sjr: this.data.sjr
            },
            method: "GET",
            success: function(t) {
                if (0 === t.data.recordset.length) wx.showToast({
                    title: "暂时没有当前日期的货单呢...",
                    icon: "none"
                }), setTimeout(function(e) {
                    wx.navigateBack({
                        delta: 0
                    });
                }, 2e3); else {
                    s.setData({
                        expressMessageList: t.data.recordset
                    }), console.log(s.data.expressMessageList);
                    for (var a = 0; a < s.data.expressMessageList.length; a++) {
                        var r = s.data.expressMessageList[a].FJRQ.slice(0, 10);
                        if (s.setData(e({}, "expressMessageList[" + a + "].FJRQ", r)), null === s.data.expressMessageList[a].TktCode) console.log("bushi"); else switch (s.data.expressMessageList[a].TktCode.slice(0, 2)) {
                          case "73":
                            s.setData(e({}, "expressMessageList[" + a + "].expressFirm", "中通"));
                            break;

                          case "JD":
                            s.setData(e({}, "expressMessageList[" + a + "].expressFirm", "京东"));
                            break;

                          default:
                            s.setData(e({}, "expressMessageList[" + a + "].expressFirm", "顺丰"));
                        }
                    }
                    console.log(s.data.expressMessageList);
                }
            },
            fail: function(e) {
                console.error(e);
            }
        });
    },
    clickCopy: function(e) {
        console.log(e), console.log(e.currentTarget.dataset.tktcode), wx.setClipboardData({
            data: e.currentTarget.dataset.tktcode,
            success: function(e) {
                wx.showToast({
                    icon: "none",
                    title: "运单号复制成功！"
                });
            }
        });
    },
    toExpressSrc: function(e) {
        wx.navigateTo({
            url: "../expressSrc/expressSrc"
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