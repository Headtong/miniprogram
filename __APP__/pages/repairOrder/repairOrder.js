var a = require("../../@babel/runtime/helpers/defineProperty"), e = require("../../utils/saleTel.js");

Page({
    data: {
        repairValue: [],
        companyName: "",
        tktcode: "",
        startdate: "",
        enddate: "",
        salers: [],
        color: ""
    },
    onLoad: function(r) {
        var t = this;
        console.log(e.saleTel);
        var i = JSON.parse(r.id);
        this.setData({
            salers: e.saleTel,
            companyName: i.companyName,
            tktcode: i.TktCodeValue,
            startdate: i.startDate,
            enddate: i.endDate,
            repairValue: []
        }), console.log("" === this.data.tktcode), "" === this.data.tktcode && wx.request({
            url: "https://express.jwm-yun.com/b/repairOrder",
            data: {
                companyName: this.data.companyName,
                startdate: this.data.startdate,
                enddate: this.data.enddate
            },
            success: function(e) {
                var r, i, l, s;
                if (console.log(e.data.recordset), t.setData({
                    repairValue: e.data.recordset
                }), console.log(0 === t.data.repairValue.length), 0 === t.data.repairValue.length) wx.showToast({
                    icon: "none",
                    title: "暂时没有这个时间段的返修单呢..."
                }), setTimeout(function(a) {
                    wx.navigateBack({
                        delta: 0
                    });
                }, 1e3); else {
                    for (var o = 0; o < t.data.repairValue.length; o++) {
                        var u = t.data.repairValue[o].DHRQ.slice(0, 10);
                        switch (t.data.repairValue[o].State) {
                          case 2:
                            t.setData((a(r = {}, "repairValue[" + o + "].inCharge", 2), a(r, "repairValue[" + o + "].ChargeD", "收费完成"), 
                            a(r, "repairValue[" + o + "].describe", "维修中，今日发走！"), a(r, "repairValue[" + o + "].imgBgi", "../images/wait.png"), 
                            a(r, "repairValue[" + o + "].btnColor", "#3372b6"), a(r, "repairValue[" + o + "].DHRQ", u), 
                            r));
                            break;

                          case 3:
                            t.setData((a(i = {}, "repairValue[" + o + "].inCharge", 1), a(i, "repairValue[" + o + "].ChargeD", "待收费"), 
                            a(i, "repairValue[" + o + "].describe", "您的返修件经检查需要付费维修，请您尽快联系销售人员！"), a(i, "repairValue[" + o + "].imgBgi", "../images/trust.png"), 
                            a(i, "repairValue[" + o + "].btnColor", "#dc7428"), a(i, "repairValue[" + o + "].payExcode", "../images/excode.jpg"), 
                            a(i, "repairValue[" + o + "].DHRQ", u), i));
                            break;

                          case 1:
                            t.setData((a(l = {}, "repairValue[" + o + "].inCharge", 0), a(l, "repairValue[" + o + "].ChargeD", "免费"), 
                            a(l, "repairValue[" + o + "].describe", "维修中！"), a(l, "repairValue[" + o + "].imgBgi", "../images/free.png"), 
                            a(l, "repairValue[" + o + "].btnColor", "#039B67"), a(l, "repairValue[" + o + "].DHRQ", u), 
                            l));
                            break;

                          case 10:
                            t.setData((a(s = {}, "repairValue[" + o + "].inCharge", 10), a(s, "repairValue[" + o + "].ChargeD", "维修完成"), 
                            a(s, "repairValue[" + o + "].describe", "维修已完成"), a(s, "repairValue[" + o + "].imgBgi", "../images/free.png"), 
                            a(s, "repairValue[" + o + "].btnColor", "#039B67"), a(s, "repairValue[" + o + "].DHRQ", u), 
                            s));
                        }
                    }
                    var n = {};
                    for (o = 0; o < t.data.salers.length; o++) n[t.data.salers[o].saler] = t.data.salers[o].phone;
                    for (o = 0; o < t.data.repairValue.length; o++) t.setData(a({}, "repairValue[" + o + "].phone", n[t.data.repairValue[o].XSRY]));
                }
                console.log(t.data.repairValue);
            }
        }), "" !== this.data.tktcode && wx.request({
            url: "https://express.jwm-yun.com/b/repairTktCode",
            data: {
                tktcode: this.data.tktcode
            },
            success: function(e) {
                var r, i, l, s;
                if (t.setData({
                    repairValue: e.data.recordset
                }), console.log(e.data.recordset), console.log(t.data.repairValue.length), 0 === t.data.repairValue.length) wx.showToast({
                    icon: "none",
                    title: "暂时没有这个返修单呢..."
                }), setTimeout(function(a) {
                    wx.navigateBack({
                        delta: 0
                    });
                }, 1e3); else {
                    for (var o = 0; o < t.data.repairValue.length; o++) {
                        var u = t.data.repairValue[o].DHRQ.slice(0, 10);
                        switch (t.data.repairValue[o].State) {
                          case 2:
                            t.setData((a(r = {}, "repairValue[" + o + "].inCharge", 2), a(r, "repairValue[" + o + "].ChargeD", "收费完成"), 
                            a(r, "repairValue[" + o + "].describe", "维修中，今日发走！"), a(r, "repairValue[" + o + "].imgBgi", "../images/wait.png"), 
                            a(r, "repairValue[" + o + "].btnColor", "#3372b6"), a(r, "repairValue[" + o + "].DHRQ", u), 
                            r));
                            break;

                          case 3:
                            t.setData((a(i = {}, "repairValue[" + o + "].inCharge", 1), a(i, "repairValue[" + o + "].ChargeD", "待收费"), 
                            a(i, "repairValue[" + o + "].describe", "您的返修件经检查需要付费维修，请您尽快联系销售人员！"), a(i, "repairValue[" + o + "].imgBgi", "../images/trust.png"), 
                            a(i, "repairValue[" + o + "].btnColor", "#dc7428"), a(i, "repairValue[" + o + "].payExcode", "../images/excode.jpg"), 
                            a(i, "repairValue[" + o + "].DHRQ", u), i));
                            break;

                          case 1:
                            t.setData((a(l = {}, "repairValue[" + o + "].inCharge", 0), a(l, "repairValue[" + o + "].ChargeD", "免费"), 
                            a(l, "repairValue[" + o + "].describe", "维修中！"), a(l, "repairValue[" + o + "].imgBgi", "../images/free.png"), 
                            a(l, "repairValue[" + o + "].btnColor", "#039B67"), a(l, "repairValue[" + o + "].DHRQ", u), 
                            l));
                            break;

                          case 10:
                            t.setData((a(s = {}, "repairValue[" + o + "].inCharge", 10), a(s, "repairValue[" + o + "].ChargeD", "维修完成"), 
                            a(s, "repairValue[" + o + "].describe", "维修已完成"), a(s, "repairValue[" + o + "].imgBgi", "../images/free.png"), 
                            a(s, "repairValue[" + o + "].btnColor", "#039B67"), a(s, "repairValue[" + o + "].DHRQ", u), 
                            s));
                        }
                    }
                    var n = {};
                    for (o = 0; o < t.data.salers.length; o++) n[t.data.salers[o].saler] = t.data.salers[o].phone;
                    for (o = 0; o < t.data.repairValue.length; o++) t.setData(a({}, "repairValue[" + o + "].phone", n[t.data.repairValue[o].XSRY]));
                }
            }
        });
    },
    torepairSrc: function(a) {
        wx.navigateTo({
            url: "../repairSrc/repairSrc"
        });
    },
    showModal: function(e) {
        for (var r = 0; r < this.data.repairValue.length; r++) e.currentTarget.dataset.index === r + 1 && this.setData(a({}, "repairValue[" + r + "].modalName", e.currentTarget.dataset.target));
        console.log(this.data.repairValue);
    },
    showModal1: function(e) {
        for (var r = 0; r < this.data.repairValue.length; r++) e.currentTarget.dataset.index === r + 1 && this.setData(a({}, "repairValue[" + r + "].modalName1", e.currentTarget.dataset.target));
    },
    hideModal: function(e) {
        for (var r = 0; r < this.data.repairValue.length; r++) {
            var t;
            this.setData((a(t = {}, "repairValue[" + r + "].modalName", null), a(t, "repairValue[" + r + "].modalName1", null), 
            t));
        }
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});