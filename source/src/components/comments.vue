<template>
  <ul class="comments" v-show="dataList.length>0">
    <li v-for="item in dataList" :key="item.id">
      <div><span>{{ item.createdAt | timeFormatter }}</span>{{ item.userName }}<a v-if="showDelBtn" @click="doDelete(item.id)">删除</a></div>
      <div v-show="!queryArticle && item.articleName && item.pageRouter">在文章"<router-link :to="{ name: item.pageRouter }">{{ item.articleName }}</router-link>"处留言：</div>
      <div>{{ item.commentContent }}</div>
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
          showDelBtn: false
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
        if (Global.currPageParams.del == 'true') {
          that.showDelBtn = true
        }
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
              that.dataList = res.body || []
              if (!that.hasStarted) {
                that.hasStarted = true
                that.doTimerRefresh() // 定时刷新
              }
            }
          })
        }
      }
    }
</script>
