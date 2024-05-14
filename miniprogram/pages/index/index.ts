// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Component({
  data: {
    prompt: '',
    answer: {
      exist: false,
      formula: '',
      description: ''
    },
    requesting: false,
  },
  methods: {
    // 事件处理函数
    askCopilot() {
      console.log("ask copilot");
      this.setData({requesting: true });
      wx.request({
        url: 'https://dogmotto.com/v1/formula',
        data: {
          prompt: this.data.prompt,
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          console.log('success =>', res);
          let data = res.data;
          this.setData({
            answer: data,
          });
        },
        fail: res => {
          console.log("fail =>", res);
          this.setData({
            answer: {
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
    handlePromptInput(options: any) {
      let value = options.detail.value;
      this.data.prompt = value;
    },
  },
})
