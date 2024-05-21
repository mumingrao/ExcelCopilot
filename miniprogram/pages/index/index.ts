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
    requesting: false
  },
  askCopilot: async function () {
    console.log("askCopilot: => ", this.data.prompt);
    this.setData({ requesting: true });
    wx.request({
      url: "https://dogmotto.com/v1/formula",
      data: {
        prompt: this.data.prompt,
      },
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        console.log("success =>", res);
        let data = res.data;
        this.setData({
          result: data,
        });
      },
      fail: res => {
        console.log("fail =>", res);
        this.setData({
          result: {
            description: "网络错误,请稍后再试.",
          }
        })
      },
      complete: res => {
        console.log("complete =>", res);
        this.setData({requesting: false });
      }
    })
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
  }
});
