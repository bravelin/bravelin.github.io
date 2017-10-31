<template>
    <div class="page article">
        <h2 class="title">React学习笔记之一：初入React世界</h2>
        <div class="content">
            <h3 class="title">React简介</h3>
            <p>React是Facebook在2013年开源的JavaScript库。React将用户界面抽象成一个个组件，开发者通过组合这些组件来构建功能丰富的页面。React并不是完整的MVC/MVVM框架，专注于提供清晰的简洁的视图层解决方案。</p>
            <p><strong>Virtual DOM</strong>：在前端开发中，性能消耗最大的就是DOM操作。React将真实DOM树转换成JavaScript对象树。在每次数据更新之后，重新计算Virtual DOM，并和上一次的Virtual DOM做对比，对发生变化的部分做批量更新。（也可以使用<strong>shouldComponentUpdate</strong>生命周期回调，减少不必要的对比过程，保证性能。）</p>
            <h3 class="title">JSX语法</h3>
            <p>JSX将HTML语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由浏览器执行。JSX并不是强制需要的，只是让组件的结构更直观。</p>
            <p><strong>定义标签时，只允许被一个标签包裹</strong>：最外层只能有一个标签。</p>
            <p><strong>标签一定要闭合</strong>：所有标签都必须闭合，自闭合标签img等也要遵循同样规则，可以根据是否有子组件来决定闭合方式。</p>
            <p><strong>标签首字母小写对应DOM元素；首字母大写对应自定义组件元素。</strong></p>
            <p><strong>可以通过命名空间的方式使用组件元素</strong>，以解决组件同名冲突的问题：</p>
            <pre><code>const App = () => {
    &lt;MUI.RaisedButton label='default' /&gt;
}</code></pre>
            <p><strong>在一个组件的子元素位置使用注释需要用{}包起来</strong>：</p>
            <pre><code>const App = {
    &lt;Nav&gt;
        { /* 节点注释 */ }
        &lt;Person
            /* 多行
                注释 */
        name = '--'
        /&gt;
    &lt;/Nav&gt;
}</code></pre>
            <p><strong>DOM元素属性class转换成className；for转换成htmlFor</strong>，在JavaScript中这两个是关键词。</p>
            <p><strong>在写自定义属性的时候，都由标准写法改为小驼峰写法。</strong></p>
            <p><strong>可以使用ES6的新语法展开属性：</strong></p>
            <pre><code>const data = { name: 'foo', value: 'bar' }
const component = &lt;Component name = {data.name} value={data.value} /&gt;
// es6展开
const component = &lt;Component {...data} /&gt;</code></pre>
            <p><strong>在JSX中往DOM元素传入自定义属性，需要使用data-前缀，不然不会渲染</strong>，自定义组件元素则支持任意属性。</p>
            <h3 class="title">React组件</h3>
            <p>React组件由组件的构建方式、组件内部的属性状态和生命周期方法组成。React的组件构建有3种方法：</p>
            <p><strong>1、React.createClass</strong>：比较传统，也是兼容性最好的一种方法。</p>
            <pre><code>const Button = React.createClass({
    getDefaultProps () {
        return { color: 'red', text: 'ok' }
    },
    render () {
        const { color, text } = this.props
        return (
            &lt;button className={ `btn btn-${color}` }&gt;&lt;em&gt;{ text }&lt;/em&gt;&lt;/buttom&gt;
        )
    }
})</code></pre>
            <p>在应用中调用几次Button，就会创建几次Button实例。</p>
            <p><strong>2、ES6 classes</strong>：通过ES6标准的类语法的方式来构建。</p>
            <pre><code>import React, { Component } from 'react'
    class Button extends Component {
        constructor(props) {
            super(props)
        };
        static defaultProps = {
            color: 'red', text: 'ok'
        };
        render () {
            const { color, text } = this.props
            return (
                &lt;button className={ `btn btn-${color}` }&gt;&lt;em&gt;{ text }&lt;/em&gt;&lt;/button&gt;
            )
        }
}</code></pre>
            <p>与createClass的方式一样，调用类实现的组件会创建实例对象。</p>
            <p><strong>3、无状态函数</strong>：不存在state，也没有生命周期方法。始终保持一个实例，避免了不必要的检查和内存分配。</p>
            <pre><code>function Button({ color = 'red', text = 'ok' }) {
    return (
        &lt;button className=`{ btn btn-${color} }`&gt;&lt;em&gt;{ text }&lt;/em&gt;&lt;/button&gt;
    )
}</code></pre>
            <h3 class="title">React数据流</h3>
            <p><strong>如果顶层组件初始化props，那么React会向下遍历整棵组件树，重新尝试渲染所有的相关子组件。而state只关心每个组件自己内部的状态，这些状态只能在组件内改变。</strong></p>
            <p>当使用内置的setState方法时，组件会尝试重新渲染。setState是异步方法，一个生命周期内的所有setState方法会合并操作。</p>
            <p><strong>props本身是不可变的</strong>，组件的props一定来自于默认属性或者通过父组件的传递。</p>
            <p>propTypes用于规范props的类型与必需的状态。</p>
            <h3 class="title">React生命周期</h3>
            <p>生命周期泛指自然界和人类社会中各种客官事物的阶段性变化及其规律。</p>
            
        </div>
        <footer>2017年10月29日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>