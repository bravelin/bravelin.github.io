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
          <li><router-link :to="{ name: 'topics' }">Topics</router-link></li>
          <li><router-link :to="{ name: 'articles' }">Articles</router-link></li>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
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
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'articles' }">Articles</router-link></li>
        <li><router-link :to="{ name: 'topics' }">Topics</router-link></li>
        <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
      </ul>
    </nav>
    <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
      <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
      <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
      <a class="note" title="留言" @click="doShowNoteModal()"></a>
    </nav>
    <div class="note-wrap" ref="noteWrap">
      <div>
        <h3>留言<span @click="doCloseNoteModal()">X</span></h3>
        <div class="content">
          <div class="clear-fix"><label>您的姓名：</label><input type="text" placeholder="your name" maxlength="20"/></div>
          <div class="clear-fix"><label>您想说的话：</label><textarea placeholder="message content" maxlength="2000"></textarea></div>
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

  module.exports = {
    data: function () {
      return {
        global: Global,
        isFixedTop: false,
        showSizeMenu: false
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
      doShowNoteModal: function () {
        var noteWrap = this.$refs.noteWrap
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
