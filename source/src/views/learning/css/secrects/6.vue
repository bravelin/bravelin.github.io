<template>
    <div class="page article">
        <h2 class="title">CSS揭秘笔记之六：用户体验</h2>
        <div class="content" :class="{'blur': showPop }">
            <h3 class="title">选择合适的鼠标光标</h3>
            <p>CSS2.1中提供的内建光标：<em>default、crosshair、help、move、pointer、progress、text、wait、e-resize、ne-resize、nw-resize、n-resize、se-resize、sw-resize、s-resize、w-resize</em>
            </p>
            <p>CSS3中新增的内建光标：<em>none、context-menu、cell、verticle-text、alias、copy、no-drop、not-allowed、ew-resize、ns-resize、nesw-resize、nwse-resize、col-resize、row-resize、all-scroll、zoom-in、zoom-out</em>
            </p>
            <p>提示禁用状态可以使用cursor：not-allowed；隐藏鼠标光标可以使用cursor：none。</p>
            <h3 class="title">扩大可点击区域</h3>
            <p>对于较小的区域，将其热区向外扩张可以带来可用性的提升。一种扩张的方式是使用透明的边框（如果需要边框，可以使用内嵌投影实现）</p>
            <div class="exp expand-hot-area expand-1">
                <div>+</div>
            </div>
            <pre><code>border:10px solid transparent;
background-clip: padding-box;
box-shadow: 0 0 0 1px rgba(0,0,0,0.7) inset;</code></pre>
            <p>另外一个方案是使用伪元素（设置为透明，覆盖在元素上部），伪元素同样可以代表其宿主元素响应鼠标交互。</p>
            <div class="exp expand-hot-area expand-2">
                <div>+</div>
            </div>
            <pre><code>position: relative;
&:before{
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
}</code></pre>
            <h3 class="title">自定义复选框</h3>
            <p>浏览器默认的复选框和单选框样式都是无法设置的。下面所说的方案是借助组合选择符来给其他元素设置样式。当label元素与复选框关联之后，可以起到触发开关的作用。</p>
            <p>设定DOM结构如下：</p>
            <pre><code>&lt;input type='checkbox' id='awesome' /&gt;
&lt;label for='awesome'&gt;Awesome!&lt;/label&gt;</code></pre>
            <div class="exp checkbox"><input type="checkbox" id="awesome"/><label for="awesome">Awesome！</label></div>
            <p>设置样式：（checkbox需要隐藏，当不能使用display: none）</p>
            <pre><code>input[type="checkbox"] + label::before{
    content: "\a0";
    display: inline-block;
    vertical-align: 0.1em;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.4em;
    border-radius: 0.2em;
    background: silver;
    text-indent: 0.15em;
    line-height: 0.65;
    cursor: pointer;
  }
  input[type="checkbox"]{
    position: absolute;
    clip: rect(0,0,0,0);
  }
  input[type="checkbox"]:checked + label::before{
    content: "\2713";
    background: yellowgreen;
  }</code></pre>
            <h3 class="title">通过模糊来弱化背景</h3>
            <p>通常的弹出层是通过一层半透明的遮罩将后面的整体调暗以突显某个特定的UI元素。</p>
            <p>当我们的视线聚焦在距离较近的物体上时，远处的背景是虚化的。</p>
            <div class="exp shadow-bg">
                <button @click="changePop(true)">点击弹出</button>
            </div>
            <p>
                实现的方案是将需要模糊处理的所有元素包裹在一个元素里面，当弹出层出现时使用模糊滤镜。下面是当前页面的实现方式，当弹出时div.content会增加blur样式：（div.content并没有包裹住页面上一些元素。）</p>
            <pre><code>div.content{
  transition: 0.6s filter, transform 0.6s ease-out;
  &.blur{
    filter: blur(4px);
    transform: scale(0.96,0.96);
  }
}</code></pre>
        </div>
        <footer>2016年12月20日</footer>
        <Comments></Comments>
        <div class="pop-modal" :class="{'active': showPop }" @click="changePop(false)">
            <div @click="doClickWrap($event)">你好！明天！</div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                showPop: false
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                var codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    for (var k = 0; k < codes.length; k++) {
                        hljs.highlightBlock(codes[k])
                    }
                }
            })
        },
        methods: {
            changePop: function (type) {
                this.showPop = type
            },
            doClickWrap: function (event) {
                event.stopPropagation()
            }
        }
    }
</script>
