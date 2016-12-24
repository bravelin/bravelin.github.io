import articleList from '../data/list'

exports.Global = {
  loading: false,
  tip: null,
  showArticleNavMenu: false,
  prevArticle: '',
  nextArticle: '',
  setArticleNavMenu: function (routerName) {
    var that = this
    that.showArticleNavMenu = true
    var list = articleList.list
    for (var i = 0; i < list.length; i++) {
      if (list[i].routerName == routerName) {
        if (i > 0) {
          that.prevArticle = list[i - 1].routerName
        } else {
          that.prevArticle = ''
        }
        if (i < list.length - 1) {
          that.nextArticle = list[i + 1].routerName
        } else {
          that.nextArticle = ''
        }
        break
      }
    }
  },
  tipShow: function (content, time) {
    var _tip = this.tip
    if (!_tip) {
      _tip = this.tip = document.querySelector('#app-tip')
    }
    _tip.children[0].innerHTML = content
    _tip.classList.add('active')
    setTimeout(function () {
      _tip.classList.remove('active')
    }, (time || 3000))
  }
}
