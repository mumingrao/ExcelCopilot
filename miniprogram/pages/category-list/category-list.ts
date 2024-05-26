
import { loadFuncsByCategory } from '../../data/funcs';

Page({
  data: {
    category: '',
    funcsList: []
  },
  onLoad: function(options) {
    const category = options.category;
    this.loadFuncsByCategory(category as string);
  },
  loadFuncsByCategory: function(category: string) {
    console.log("category =", category);
    const funcs = loadFuncsByCategory(category);
    this.setData({
      category: category,
      funcsList: funcs
    })
  },
  bindViewTap: function(e) {
    const name = e.mark.name;
    console.log("func name = ", name);
    wx.navigateTo({
      url: "/pages/func-detail/func-detail?name=" + name
    });
  }
});