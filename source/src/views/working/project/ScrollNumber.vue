<style>
    .exp-container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 20px;
        padding: 20px 0;
        background: #eee;
        border-radius: 6px;
    }
    @media screen and (max-width: 530px){
        .exp-container{
            margin-right: 0;
            margin-left: 0;
        }
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">数字滚动效果的实现</h2>
        <div class="content">
            <h3 class="title">效果</h3>
            <div class="exp-container">{{ scrollData.title }} <ScrollNumber :num = 'scrollData.num'></ScrollNumber>{{ scrollData.desc }}</div>
            <p>应用于公司官网的真实效果：<a href="https://www.xiaomodo.com">https://www.xiaomodo.com</a></p>
            <h3 class="title">实现</h3>
            <p>将隐藏的元素显示出来，可以看到数字是这样滚动的：</p>
            <figure class="common"><img style="max-width: 820px;border:1px solid #ccc" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/5ed2510ca788d087abfbf36afe000e95.png"></figure>
            <p>每一列都是0-9的数字再加一个逗号（逗号用于千位的分隔），通过translateY+transition移动到相应的位置，并通过在外层设置的overflow:hidden样式，隐藏当前不需要显示的数字。</p>
            <p>定义组件ScrollNumber，其中的每一列又可以是一个ScrollNumberItem组件（列宽度40px）：</p>
            <pre><code>&lt;div class="scroll-num-wrap" :style="{ width: cursors.length * 40 + 'px' }"&gt;
    &lt;ScrollNumberItem v-for="(v, index) in cursors" :index="v" :key="index">&lt;/ScrollNumberItem&gt;
&lt;/div&gt;</code></pre>
            <p>ScrollNumber组件从外层接收一个num数字，首先要将数字拆分成字符串，并且每三位一个间隔。如486048，应拆分成'486,048'：</p>
            <pre><code>props: {
    num: {
        type: Number,
        default: 0
    }
}</code></pre>
            <pre><code>splitNum () {
    const that = this
    let cursors = (that.num + '').split('')
    for (let i = cursors.length - 2; i >= 0; i = i - 3) { // 每三位增加间隔，数字10的索引代表逗号
        if (i > 1) {
            cursors.splice(i - 1, 0, 10)
        }
    }
    let tempCursors = cursors.map(item => { // 初始每个位置上设置为0
        if (item - 0 < 10) {
            return 0
        } else {
            return item
        }
    })
    that.cursors = tempCursors
    let reallyCursors = cursors.map(item => item - 0) // 真实的索引
    setTimeout(() => {
        that.cursors = reallyCursors
    }, 30)
}</code></pre>
            <p>初始每个位置上设置为0，间隔30ms之后再设置为真实的值，这是因为有变化才能看到数字在滚动的效果。</p>
            <p>下面是ScrollNumberItem的实现，每个数字高度80px：</p>
            <pre><code>&lt;div class="scroll-number-item"&gt;
    &lt;ul :style="{ transform: 'translateY(' + (index * -80 + 'px') + ')', 'transition-duration': duration + 's' }"&gt;
        &lt;li v-for="(item, index) in list" :key="index">{ { item } }&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
            <p>其中data定义如下：</p>
            <pre><code>data () {
    return {
        duration: 0.3,
        list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
    }
}</code></pre>
            <p>从外层接收index属性，并监听index的变化，计算出transition的duration是多少：</p>
            <pre><code>watch: {
    index (newVal, oldVal) {
        const that = this
        that.duration = (Math.abs(newVal - oldVal) / 3 + 1) * 0.3
    }
}</code></pre>
            <p>源码：<a href="https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/ScrollNumber.vue">https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/ScrollNumber.vue</a></p>
            <h3 class="title">使用</h3>
            <p>本文中的效果是这样实现的：</p>
            <pre><code>&lt;div class="exp-container"&gt;{ { scrollData.title } } &lt;ScrollNumber :num = 'scrollData.num'&gt;&lt;/ScrollNumber&gt;{ { scrollData.desc } }&lt;/div&gt;</code></pre>
            <p>data中定义如下状态：</p>
            <pre><code>scrollData: { // 当前的scroll信息
    title: '',
    num: 0,
    desc: ''
},
scrollTimer: null, // 定时器
scrollCount: 0, // 每变化一次+1，用于切换
scrollDataList: [ // 数据源
    { title: '增加', num: 486048, desc: '人' },
    { title: '到店率', num: 95, desc: '%' },
    { title: '信息', num: 875395, desc: '条' }
]</code></pre>
            <p>启动滚动定时器：</p>
            <pre><code>startScrollData () {
    const that = this
    const scrollData = that.scrollData
    const scrollDataList = that.scrollDataList
    // 初始为第一个
    scrollData.title = scrollDataList[0].title
    scrollData.num = scrollDataList[0].num
    scrollData.desc = scrollDataList[0].desc
    let index = 0
    that.scrollTimer = setInterval(() => { // 定义定时器
        index = (that.scrollCount ++) % 3 // 取一下个
        scrollData.title = scrollDataList[index].title
        scrollData.num = scrollDataList[index].num
        scrollData.desc = scrollDataList[index].desc
    }, 3000)
}
</code></pre>
            <p>在页面销毁之前记得将定时器清除：</p>
            <pre><code>beforeDestroy () {
    const that = this
    if (that.scrollTimer) {
        clearInterval(that.scrollTimer)
    }
}</code></pre>
        </div>
        <footer>2018年04月11日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
        <Preview :is-show.sync="showPreview" :list="previewList" :index="previewIndex"></Preview>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    import ScrollNumber from '@/components/ScrollNumber'
    export default {
        extends: Page,
        components: {
            ScrollNumber
        },
        data () {
            return {
                scrollData: {
                    title: '',
                    num: 0,
                    desc: ''
                },
                scrollTimer: null,
                scrollCount: 0,
                scrollDataList: [
                    { title: '增加', num: 4648, desc: '人' },
                    { title: '到店率', num: 95, desc: '%' },
                    { title: '信息', num: 8795, desc: '条' }
                ]
            }
        },
        created () {
            this.startScrollData()
        },
        methods: {
            startScrollData () {
                const that = this
                const scrollData = that.scrollData
                const scrollDataList = that.scrollDataList
                scrollData.title = scrollDataList[0].title
                scrollData.num = scrollDataList[0].num
                scrollData.desc = scrollDataList[0].desc
                let index = 0
                that.scrollTimer = setInterval(() => {
                    index = (that.scrollCount ++) % 3
                    scrollData.title = scrollDataList[index].title
                    scrollData.num = scrollDataList[index].num
                    scrollData.desc = scrollDataList[index].desc
                }, 3000)
            }
        },
        beforeDestroy () {
            const that = this
            if (that.scrollTimer) {
                clearInterval(that.scrollTimer)
            }
        }
    }
</script>
