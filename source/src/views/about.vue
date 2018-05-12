<style scope>
  .encourage{
    margin-top: 20px;
  }
  .encourage>img{
    display: block;
    width: 96%;
    max-width: 430px;
    margin: 12px auto;
  }
  .encourage>figcaption{
    font-size: 14px;
    font-style: italic;
    text-align: center;
  }
  .page.article{
    background: none;
  }
  h2.title, div.content, footer{
    background: #fff;
  }
</style>
<template>
  <div class="page article home-page">
    <banner></banner>
    <h2 class="title">About Me</h2>
    <div class="content">
      <p>一名普通的Programmer，2011届计科毕业。目前专注于Web前端开发。<p>
      <p>北漂三年，2015年夏至深圳，就职于石豆软件。</p>
      <p>业余喜欢历史、音乐，看起来一副永远不成熟的样子。</p>
      <p>不善言辞。</p>
      <p>博客是自己用Vue构建的单页模式应用，没有使用Hexo、Ghost之类的博客生成工具，主要是考虑那些工具生成的页面不支持在线预览一些需要JS脚本支持的功能。</p>
      <p>所有样式也都是自己随心所欲设计的。</p>
      <p>功能比较单一，主要想记录一些技术知识点，另一方面则是记录逝去时光中的人和事以及所感所想。</p>
      <p>可以留言、评论。</p>
      <figure class="encourage">
        <img src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/fce52cf3b9920b7d165cfd2ac6949a81.jpg"/>
        <figcaption>心之何如，有似万丈迷津，遥亘千里，其中并无舟子可以渡人，除了自渡，他人爱莫能助。</figcaption>
      </figure>
    </div>
    <footer>2016年05月10日</footer>
  </div>
</template>
<script>
import banner from '@/views/banner'
export default {
    components: {
        banner
    }
}
</script>
