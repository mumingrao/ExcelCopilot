
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
  }
});