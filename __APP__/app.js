App({
    onLaunch: function() {
        var a = wx.getStorageSync("logs") || [];
        a.unshift(Date.now()), wx.setStorageSync("logs", a), this.globalData.modalName = "Image";
    },
    onHide: function(a) {},
    globalData: {
        num: 1
    }
});