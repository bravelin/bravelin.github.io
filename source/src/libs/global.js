import eventHub from './hub.js'
// import Config from './config'
import Vue from 'vue'

export default {
    loading: false,
    tip: null,
    showArticleNavMenu: false,
    prevArticle: '',
    nextArticle: '',
    currArticleId: '',
    currArticleName: '',
    currPage: '',
    currPageParams: '',
    shareTitle: 'Lin\'s Notes',
    shareImg: '/static/assets/header.jpg',
    hasCatalog: false, // 是否存在目录
    articleList: [],
    sentenceList: [],
    getSentences () {
        const that = this
        Vue.http.get('api/v1/sentences', {
            params: { status: 'online' }
        }).then(res => {
            that.sentenceList.push(...res.body.dataList)
        })
    },
    getArticles () {
        const that = this
        that.loading = true
        Vue.http.get('api/v1/articles', {
            params: {
                status: 'online'
            }
        }).then(res => {
            that.articleList.push(...res.body.dataList)
            that.loading = false
        })
    },
    setArticleNavMenu (routerName) {
        const that = this
        that.showArticleNavMenu = true
        let list = that.articleList
        for (let i = 0; i < list.length; i++) {
            if (list[i].routerName == routerName) {
                that.currArticleId = list[i].id
                that.currArticleName = list[i].title
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

        setTimeout(() => {
            eventHub.$emit('refresh-comments')
        }, 4000)
    },
    tipShow (content, time) {
        let _tip = this.tip
        if (!_tip) {
            _tip = this.tip = document.querySelector('#app-tip')
        }
        _tip.children[0].innerHTML = content
        _tip.classList.add('active')
        setTimeout(() => {
            _tip.classList.remove('active')
        }, (time || 3000))
    },
    shareConfig (title, imgUrl) {
        document.title = title
    }
}
