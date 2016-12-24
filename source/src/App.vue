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
          <h2>生命可以随心所欲，但不能随波逐流</h2>
        </div>
      </div>
      <nav :class="{ fixedTop: isFixedTop }">
        <ul>
          <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
          <li><router-link :to="{ name: 'summary' }">Summary</router-link></li>
          <li><router-link :to="{ name: 'notes' }">Notes</router-link></li>
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
        <li><router-link :to="{ name: 'notes' }">Notes</router-link></li>
        <li><router-link :to="{ name: 'summary' }">Summary</router-link></li>
        <li><router-link :to="{ name: 'about' }">About Me</router-link></li>
      </ul>
    </nav>
    <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
      <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
      <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
    </nav>
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
