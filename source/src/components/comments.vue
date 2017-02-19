<template>
  <ul class="comments" v-show="dataList.length>0">
    <li v-for="item in dataList" :key="item.id">
      <div>
        <span>{{ item.createdAt | timeFormatter }}</span>{{ item.userName }}
        <a v-if="showDelBtn" @click="doDelete(item.id)">删除</a>
        <a class='reply' v-if="showReplyBtn && !item.reply" @click="doReply(item.id, item.userName)">回复</a>
      </div>
      <div v-show="!queryArticle && item.articleName && item.pageRouter">在文章"<router-link :to="{ name: item.pageRouter }">{{ item.articleName }}</router-link>"处留言：</div>
      <div>{{ item.commentContent }}</div>
      <template v-if="item.reply">
        <div>{{ item.reply.createdAt | timeFormatter }} linz回复 @{{ item.userName }}</div>
        <div>{{ item.reply.commentContent }}</div>
      </template>
    </li>
  </ul>
</template>
<script>
    import { Global } from '../libs/global'
    import { eventHub } from '../libs/hub'

    export default {
      data: function () {
        return {
          dataList: [],
          timer: null,
          hasStarted: false,
          showDelBtn: false,
          showReplyBtn: false
        }
      },
      props: {
        queryArticle: {
          type: Boolean,
          required: false,
          default: true
        }
      },
      created: function () {
        var that = this
        var pageParams = Global.currPageParams
        if (pageParams.del == 'true') {
          that.showDelBtn = true
        }
        if (pageParams.reply == 'true') {
          that.showReplyBtn = true
        }
        console.log('showReplyBtn：' + that.showReplyBtn)
        if (!that.queryArticle) {
          that.refresh()
        }
        eventHub.$on('refresh-comments', that.refresh)
      },
      beforeDestroy: function () {
        var that = this
        eventHub.$off('refresh-comments', that.refresh)
        if (that.timer) {
          clearTimeout(that.timer)
        }
      },
      methods: {
        doTimerRefresh: function () {
          var that = this
          that.timer = setTimeout(function () {
            that.refresh()
            that.doTimerRefresh()
          }, 20000)
        },
        doReply: function (id, name) {
          eventHub.$emit('pop-reply-modal', {id: id, name: name})
        },
        doDelete: function (id) {
          eventHub.$emit('pop-confirm-del-modal', id)
        },
        refresh: function () { // get data
          var that = this
          var now = (+new Date())
          var global = Global
          var appKey = global.sha(global.appKey + now) + '.' + now
          var filter = {order: 'createdAt DESC'}

          if (that.queryArticle) {
            filter.where = {articleId: global.currArticleId}
          }
          that.$http.get('https://d.apicloud.com/mcm/api/comments', {
            headers: {
              'X-APICloud-AppKey': appKey
            },
            params: {filter: JSON.stringify(filter)}
          }).then(function (res) {
            if (res.status == 200) {
              // console.dir(res.body)
              var list = res.body || []
              var k
              var dataList = []
              var commentIndexObj = {}
              var dataItem
              var commentItem

              for (k = list.length - 1; k >= 0; k--) {
                dataItem = list[k]
                if (!dataItem.replyId) {
                  commentIndexObj[dataItem.id] = dataList.length
                  dataList.push(dataItem)
                } else {
                  commentItem = dataList[commentIndexObj[dataItem.replyId]]
                  if (commentItem) {
                    commentItem.reply = dataItem
                  }
                }
              }
              dataList = dataList.reverse()
              // console.log('dataList len：' + dataList.length)
              // console.dir(dataList)
              that.dataList = dataList
              if (!that.hasStarted) {
                that.hasStarted = true
                // that.doTimerRefresh() // 定时刷新
              }
            }
          })
        }
      }
    }
</script>
