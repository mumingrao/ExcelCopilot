// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({
  data: {
    prompt: '',
    result: {
      exist: false,
      formula: '',
      description: ''
    },
    requesting: false,
    connected: false,
    tips: ["SUM函数的用法.", 
      "计算结算日到下一票息支付日的天数.", 
      "学生分数高于85分的标记成优秀,少于60分的不及格，其他则是良好.", 
      "将日期显示为星期."]
  },
  onLoad: function() {
    this.setupWebsocket();
  },
  askCopilot: async function () {
    console.log("askCopilot: => ", this.data.prompt);
    let obj = {
      prompt: this.data.prompt
    };
    this.setData({
      result: {
        exist: false,
        formula: "",
        description: ""
      },
      requesting: true
    });
    if (this.data.connected === false) {
      this.setupWebsocket();
      return;
    }
    wx.sendSocketMessage({
      data: JSON.stringify(obj)
    });
  },
  handlePromptInput: function (options: any) {
    let value = options.detail.value;
    this.setData({
      prompt: value,
    })
  },
  copyFormula() {
    console.log("copyFormula");
    wx.setClipboardData({
      data: this.data.result.formula,
      success(res) {
        console.log(res);
        wx.showToast({ title: "复制成功" })
      },
      fail(res) {
        console.log(res);
        wx.showToast({ title: "复制失败" });
      }
    });
  },
  onShareAppMessage: function() {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    return {
      title: "Excel智能助手",
      path: currentPage.route
    }
  },
  onShareTimeline: function() {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    return {
      title: "Excel智能助手",
      path: currentPage.route
    }
  },
  setupWebsocket: function() {
    console.log("setup websocket");
    wx.connectSocket({
      url: "wss://dogmotto.com/v1/generate/code"
    });
    wx.onSocketOpen(() => {
      console.log("Websocket Open.");
      this.setData({
        connected: true
      });
      if (this.data.prompt !== "") {
        this.askCopilot();
      }
    });
    wx.onSocketError((res) => {
      console.log("failed to open websocket: ", res);
      this.setData({
        connected: false
      });
    });
    wx.onSocketClose(() => {
      console.log("websocket closed");
      this.setData({
        connected: false
      });
    });
    wx.onSocketMessage((res) => {
      this.handleWssMessage(res);
    });
  },
  handleWssMessage: function(res) {
    this.setData({
      requesting: false
    });
    const data = JSON.parse(res.data);
    this.setData({
      result: data
    });
  },
  bindTipTap: function(e) {
    const index = Number(e.mark.index);
    const prompt = this.data.tips[index];
    console.log(this.data.tips[index]);
    this.setData({
      prompt
    });
    this.askCopilot();
  }
});
