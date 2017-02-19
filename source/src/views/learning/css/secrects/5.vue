<template>
  <div class="page article">
    <h2 class="title">《CSS 揭秘》笔记之五：字体排印</h2>
    <div class="content">
      <h3 class="title">连字符断行</h3>
      <p>使用样式text-align：justify设置两端对齐时，会出行单词孤岛现象。</p>
      <p>CSS3的新属性hyphens（3个值：none、manual、auto，manual为默认值），可以实现断词折行的效果。但是浏览器兼容性不是很好，chrome目前不支持。除此之外，也可以手动设置软连字符：&amp;shy。</p>
      <h3 class="title">插入换行</h3>
      <p>使用伪元素+CSS3选择符可以实现结构整洁的换行功能：</p>
      <div class="exp break-line">
        <div>
          <dl>
            <dt>Name：</dt><dd>Lea Verou</dd>
            <dt>Email：</dt><dd>lea@verou.com</dd>
            <dt>Location：</dt><dd>Earth</dd>
          </dl>
        </div>
      </div>
      <pre><code>dt,dd{
  display: inline;
}
dd{
  font-weight: bold;
}
dd + dt::before{
  content: "\A";
  white-space: pre;
}
dd + dd::before{
  content: "";
  font-weight: normal;
}</code></pre>
      <h3 class="title">文本行的斑马条纹</h3>
      <p>使用水平条纹背景，将background-size设置为line-height的两倍，并设置background-position以content-box为边缘。可以实现此效果：</p>
      <div class="exp stripe-text">豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。</div>
      <pre><code>padding: 0.8em;
line-height: 2;
background-image: linear-gradient(rgba(246,246,174,0.9) 50%, transparent 0);
background-size: auto 4em;
background-origin: content-box;</code></pre>
      <h3 class="title">调整Tab的宽度</h3>
      <p>CSS3有一个新属性：tab-size可以控制tab的字符数，如tab-size：2，一般用于代码段的缩进效果。</p>
      <p>可以通过这种方式获取字符的unicode编码：'&'.charCodeAt(0).toString(16)。</p>
      <h3 class="title">自定义下划线</h3>
      <p>文本的下划线在不同浏览器下的渲染效果大相庭径。类似文本的斑马条纹，可以使用渐变生成文本的下划线：</p>
      <pre><code>padding: 0.8em;
line-height: 2;
background: #eee linear-gradient(#f96, #f96) no-repeat 0 2.8rem;
background-size: 100% 1px;
border: 1px solid #eee;</code></pre>
      <p>在第一行字加红色的下划线：</p>
      <div class="exp underline-text-1">时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。</div>
      <p>虚线的下划线：</p>
      <pre><code>padding: 0.8em;
line-height: 2;
background: #eee linear-gradient(90deg, #f96 60%, transparent 0) repeat-x 0 2.8rem;
background-size: 0.4em 1px;
border: 1px solid #eee;</code></pre>
      <div class="exp underline-text-2">披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。</div>
      <h3 class="title">现实中的文字效果</h3>
      <p><strong>空心字效果：</strong>使用多个text-shadow，分别为这些投影加上不同方向的少量偏移。</p>
      <div class="exp text-effect-1">CSS</div>
      <pre><code>text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;</code></pre>
      <p>对于越粗的描边，这种方式越糟糕。这种情况下使用SVG效果比较好。</p>
      <p><strong>文字外发光效果：</strong></p>
      <div class="exp text-effect-2">Glow</div>
      <p>鼠标悬停下的发光效果：</p>
      <div class="exp text-effect-3">Dizzy</div>
      <pre><code>background: #203;
text-align: center;
font-size: 56px;
color: #ffc;
transition: 1s;
&:hover{
  color: transparent;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}</code></pre>
      <p><strong>文字凸起效果：</strong>使用一长串累加的投影，不设模糊并以1px的跨度逐渐错开，使之逐渐变暗，然后在底部加一层强烈模糊的投影，从而模拟出完整的立体效果。</p>
      <div class="exp text-effect-4">CSS 3D</div>
      <pre><code>text-shadow: 0 1px hsl(0,0%, 85%),0 2px hsl(0,0%, 80%),
    0 3px hsl(0,0%, 75%),0 4px hsl(0,0%, 70%),
    0 5px hsl(0,0%, 65%), 0 5px 10px black;</code></pre>
        <p>另外一种效果：</p>
      <div class="exp text-effect-5">RETRO</div>
      <pre><code>text-shadow: 1px 1px black, 2px 2px black,
    3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black,
    7px 7px black, 8px 8px black;</code></pre>
      </div>
    <footer>2016年12月05日</footer>
    <comments></comments>
  </div>
</template>
<script>
  import { Global } from '../../../../libs/global'

  module.exports = {
    mounted: function () {
      this.$nextTick(function () {
        var codes = document.querySelectorAll('code')
        if (codes.length > 0) {
          for (var k = 0; k < codes.length; k++) {
            hljs.highlightBlock(codes[k])
          }
        }
      })
      Global.setArticleNavMenu('learning-css-secrects-5')
    }
  }
</script>
