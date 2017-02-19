<style>
  @import './styles/page/index.css';
</style>
<template>
  <div @click="doHideSideMenu()">
    <header>
      <div class="wrap">
        <div class="logo"></div>
        <div class="title">
          <h1>linz blog</h1>
          <h2>你只管努力，剩下的交给时光。</h2>
        </div>
      </div>
      <nav :class="{ fixedTop: isFixedTop }">
        <ul>
          <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
          <li><router-link :to="{ name: 'comments' }">Comments</router-link></li>
          <li><router-link :to="{ name: 'topics' }">Topics</router-link></li>
          <li><router-link :to="{ name: 'articles' }">Articles</router-link></li>
          <!--<li><router-link :to="{ name: 'home' }">Home</router-link></li>-->
        </ul>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <spinner v-show="global.loading"></spinner>
    <div class="side-menu-icon" :class="{ fixedTop: isFixedTop }" @click="doClickMenuBtn($event)"></div>
    <nav class="side-menu" :class="{active: showSizeMenu}" @click="doClickSideMenuWrap($event)">
      <ul>
        <!--<li><router-link :to="{ name: 'home' }">Home</router-link></li>-->
        <li><router-link :to="{ name: 'articles' }">Articles</router-link></li>
        <li><router-link :to="{ name: 'topics' }">Topics</router-link></li>
        <li><router-link :to="{ name: 'comments' }">Comments</router-link></li>
        <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
      </ul>
    </nav>
    <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
      <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
      <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
      <a class="note" title="留言" @click="doShowNoteModal()"></a>
    </nav>
    <div class="note-wrap modal" ref="noteWrap">
      <div>
        <h3>留言<span @click="doCloseNoteModal()">X</span></h3>
        <div class="content">
          <div class="clear-fix"><label>您的称呼：</label><input ref='noteNameEl' v-model="noteName" type="text" placeholder="your name" maxlength="20"/></div>
          <div class="clear-fix"><label>您想说的话：</label><textarea ref='noteContentEl' v-model="noteContent" placeholder="message content" maxlength="2000"></textarea></div>
        </div>
        <div class="footer">
          <a class="ok" @click="doSubmitNoteContent()">提交</a>
          <a class="cancel" @click="doCloseNoteModal()">取消</a>
        </div>
        <div class='page-mask'><div><i></i><i></i><i></i><i></i><i></i></div></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Spinner from './components/spinner'
  import { Global } from './libs/global'
  import { eventHub } from './libs/hub.js'

  module.exports = {
    data: function () {
      return {
        global: Global,
        isFixedTop: false,
        showSizeMenu: false,
        noteName: '',
        noteContent: ''
      }
    },
    components: {
      spinner: Spinner
    },
    mounted: function () {
      var that = this
      that.$nextTick(function () {
        that.global.loading = true
        document.querySelector('header').style.opacity = 1
        document.querySelector('body>footer').style.opacity = 1
        window.addEventListener('scroll', function () {
          that.doHandlerScroll()
        })
      })
    },
    methods: {
      doSubmitNoteContent: function () {
        var that = this
        var global = Global
        var noteName = that.noteName.trim()
        var noteContent = that.noteContent.trim()
        var noteWrapEl = that.$refs.noteWrap
        if (noteName.length == 0) {
          that.$refs.noteNameEl.focus()
          return
        }
        if (noteContent.length == 0) {
          that.$refs.noteContentEl.focus()
          return
        }
        that.noteName = noteName
        that.noteContent = noteContent
        // console.log('提交...')
        noteWrapEl.classList.add('loading')
        var now = (+new Date())
        var appKey = Global.sha(Global.appKey + now) + '.' + now
        that.$http.post('https://d.apicloud.com/mcm/api/comments', {
          articleId: global.currArticleId,
          userName: noteName,
          commentContent: noteContent,
          articleName: global.currArticleName,
          pageRouter: global.currPage
        }, {
          headers: {
            'X-APICloud-AppKey': appKey
          }
        }).then(function (res) {
          noteWrapEl.classList.remove('loading')
          if (res.status == 200 && res.body.articleId) {
            eventHub.$emit('refresh-comments')
            global.tipShow('提交成功！')
            that.doCloseNoteModal()
          } else {
            global.tipShow('提交失败！请稍后再试！')
          }
        }, function () {
          noteWrapEl.classList.remove('loading')
          global.tipShow('提交失败！请稍后再试！')
        })
      },
      doShowNoteModal: function () {
        var that = this
        var noteWrap = this.$refs.noteWrap
        that.noteName = ''
        that.noteContent = ''
        noteWrap.style.display = 'block'
        setTimeout(function () {
          noteWrap.classList.add('active')
        }, 200)
      },
      doCloseNoteModal: function () {
        var noteWrap = this.$refs.noteWrap
        noteWrap.classList.remove('active')
        setTimeout(function () {
          noteWrap.style.display = 'none'
        }, 600)
      },
      doHandlerScroll: function () {
        var body = document.body
        this.isFixedTop = (body && body.scrollTop > 188)
      },
      doClickSideMenuWrap: function (event) {
        event.stopPropagation()
      },
      doHideSideMenu: function () {
        this.showSizeMenu = false
      },
      doClickMenuBtn: function (event) {
        this.showSizeMenu = !this.showSizeMenu
        event.stopPropagation()
      }
    }
  }
</script>
