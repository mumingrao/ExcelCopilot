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
    }
  },
  methods: {
    // 事件处理函数
    askCopilot() {
      console.log("ask copilot");
      const answer = {
        exist: true,
        formula: '=A1+B1',
        description: '在Excel中，如果你想要将两列相加，你可以使用加号(+)来连接两个单元格引用。例如，如果你想将A列和B列的第一行相加，这个公式会将A1单元格的值和B1单元格的值相加，并将结果放在C1单元格中。'
      };
      this.setData({
        answer: answer,
      })
      /**
      wx.request({
        url: 'http://localhost:5566/v1/formula',
        data: {
          prompt: this.data.prompt,
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          console.log('success =>', res);
        },
        fail: res => {
          console.log("fail =>", res);
        },
        complete: res => {
          console.log("complete =>", res);
        }
      })
      */
    },
    handlePromptInput(options: any) {
      let value = options.detail.value;
      this.data.prompt = value;
    },
  },
})
