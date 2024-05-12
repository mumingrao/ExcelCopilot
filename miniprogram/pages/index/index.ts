// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
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
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onChooseAvatar(e: any) {
      const { avatarUrl } = e.detail
      const { nickName } = this.data.userInfo
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    onInputChange(e: any) {
      const nickName = e.detail.value
      const { avatarUrl } = this.data.userInfo
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  },
})
