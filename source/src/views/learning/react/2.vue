<template>
    <div class="page article">
        <h2 class="title">React学习笔记之二：漫谈React</h2>
        <div class="content">
            <h3 class="title">事件系统</h3>
            <p>Virtual DOM在内存中以对象的形式存在，React实现了一个<strong>SyntheticEvent</strong>层。所有的事件都自动绑定到最外层上，如果需要访问原生事件对象，可以使用<strong>nativeEvent</strong>属性。</p>
            <p>在JSX中，必须以驼峰形式来书写事件的属性名：</p>
            <pre><code>&lt;button onClick={this.handClick}&gt;Test&lt;/button&gt;</code></pre>
            <p>React并不会像DOM0级事件那样将事件处理器直接绑定到HTML元素之上。<strong>而是将所有事件绑定到结构的最外层，使用一个统一的事件监听器。</strong>这个事件监听器维持了一个映射来保存所有组件内的事件监听和处理函数。</p>
            <p>在React组件中，每个方法的上下文都会指向该组件的实例，<strong>即自动绑定this为当前组件。</strong>在使用ES6 classes或者纯函数时，这种自动绑定就不复存在了，需要<strong>手动绑定</strong>：</p>
            <p><strong>1、bind方法：</strong></p>
            <pre><code>import React, { Component } from 'react'
    class App extends Component {
        handClick(e, arg) {
            console.log(e, arg)
        }
        render() {
            return &lt;button onClick={ this.handClick.bind(this, 'test') }&gt;Test&lt;/button&gt;
        }
    }</code></pre>
            <p>如果方法只绑定而不传参，可以使用<strong>双冒号语法</strong>：</p>
            <pre><code>&lt;button onClick={ ::this.handClick }&gt;Test&lt;/button&gt;</code></pre>
            <p><strong>2、在constructor中声明绑定：</strong></p>
            <pre><code>import React, { Component } from 'react'
    class App extends Component {
        constructor (props) {
            super(props)
            this.handClick = this.handClick.bind(this)
        }
        handClick(e, arg) {
            console.log(e, arg)
        }
        render() {
            return &lt;button onClick={ this.handClick }&gt;Test&lt;/button&gt;
        }
    }</code></pre>
                <p><strong>3、箭头函数：</strong>箭头函数自动绑定了定义此函数作用域的this，因此不必再对其使用bind方法：</p>
                <pre><code>import React, { Component } from 'react'
    class App extends Component {
        const handClick = (e) => {
            console.log(e, arg)
        }
        render() {
            return &lt;button onClick={ this.handClick }&gt;Test&lt;/button&gt;
        }
    }</code></pre>
        </div>
        <footer>2017年11月05日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>