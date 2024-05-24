
Page({
  data: {

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
