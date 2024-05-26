Page({
  data: {
    name: "",
    description: "",
    requesting: true
  },
  onLoad: function(options) {
    const name = options.name;
    this.setData({
      name,
      requesting: true
    });
    this.askCopilot(name as string);
  },
  askCopilot: function(name: string) {
    const prompt = `${name}函数的使用方法.`;
    wx.request({
      url: "https://dogmotto.com/v1/formula",
      data: {
        prompt: prompt,
      },
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        console.log(res.data);
        const description = res.data.description;
        this.setData({
          description: description || "服务出错,请您稍后再试."
        });
      },
      fail: res => {
        console.log(res);
        this.setData({
          description: "网络问题,请您稍后再试."
        });
      },
      complete: res => {
        console.log(res);
        this.setData({
          requesting: false
        });
      }
    });
  }
});