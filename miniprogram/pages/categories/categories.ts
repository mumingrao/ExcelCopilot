
import { excelFuncsByCategory } from '../../data/funcs';

Page({
  data: {
    funcsByCategory: excelFuncsByCategory
  },
  bindViewTap: function(e) {
    const category = e.mark.category;
    console.log(category);
    wx.navigateTo({
      url: "/pages/category-list/category-list?category=" + category,
      fail: function(e) {
        console.log(e);
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
  bindAppNavigate: function() {
    wx.navigateToMiniProgram({
      appId: "wx577c587e3ea2cbd5",
      envVersion: "release",
      success: (res) => {
        console.log(res);
      }
    });
  }
});
