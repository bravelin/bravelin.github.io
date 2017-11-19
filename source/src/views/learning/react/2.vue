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
                <p>在React中使用DOM原生事件时，<strong>一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。尽量避免在React中混用合成事件和原生DOM事件。</strong></p>
                <p>React的合成事件只是原生DOM事件系统的一个子集，<strong>并没有实现事件捕获，仅仅支持事件冒泡机制。</strong></p>
                <h3 class="title">表单</h3>
                <p>文本框的应用：</p>
                <pre><code>import React, { Component } from 'react'
    class App extends Component {
        constructor (props) {
            super(props)
            this.handleInputChange = this.handleInputChange.bind(this)
            this.handleTextareaChange = this.handleTextareaChange.bind(this)
            this.state = {
                inputValue: '',
                textareaValue: ''
            }
        }
        handleInputChange (e) { // 同步值
            this.setState({
                inputValue: e.target.value
            })
        }
        handleTextareaChange (e) {
            this.setState({
                textareaValue: e.target.value
            })
        }
        render () {
            const { inputValue, textareaValue } = this.state
            return (
                &lt;div&gt;
                    &lt;input type="text" value={ inputValue } onChange={ this.handleInputChange }/&gt;
                    &lt;textarea value={ textareaValue } onChange={ this.handleTextareaChange }/&gt;
                &lt;/div&gt;
            )
        }
    }</code></pre>
            <p>每当表单的状态发生改变时，都会将表单对应的值写入到state中，这种组件称之为<strong>受控组件</strong>。在受控组件中，组件渲染出的状态与它的value或checked属性相对应。受控组件更新state的流程：</p>
            <p>1、可以在初始state中设置表单的默认值；</p>
            <p>2、对表单增加onChange事件监听；</p>
            <p>3、事件处理器通过合成事件e拿到改变之后的状态，并更新应用的state；</p>
            <p>4、setState触发视图的重新渲染，完成表单组件的更新。</p>
            <p>可以在执行最后一步的setState之前，对表单值进行清洗和校验：</p>
            <pre><code>handleChange (e) {
    this.setState({
        value: e.target.value.substring(0, 10).toUpperCase()
    })
}</code></pre>
            <p>如果一个表单组件没有value（checked）props，可称之为<strong>非受控组件</strong>。因为其值不受state或者props控制，通常需要为其添加ref prop来访问渲染之后的DOM元素。在React中不提倡使用非受控组件。</p>
            <p>表单组件的三个状态属性：</p>
            <p><strong>value</strong>：type为text的input、textarea、select组件；</p>
            <p><strong>checked</strong>：type为radio或者checkbox的组件；</p>
            <p><strong>selected</strong>：作用于select组件下的option，React并不建议使用这种方式定义select组件的状态。</p>
            <h3 class="title">样式处理</h3>
            <p>在React中添加样式需要设置className prop，行内样式则使用style prop来设置。</p>
            <pre><code>const style = {
    color: 'white',
    backgroundImage: `url(${ imgUrl })`,
    WebkitTransition: 'all', // 会转换成 -webkit-transition
    msTransition: 'all' // ms是唯一使用小写的浏览器前缀
}
const component = &lt;Component style={ style } /&gt;</code></pre>
            <p>当设置width和height之类的与大小有关的样式时，大部分会以像素为单位，React自动对这样的属性添加px：</p>
            <pre><code>const style = { height: 10 }</code></pre>
            <p>在React中一般使用classnames库来操作类：</p>
            <pre><code>import React, { Component } from 'react'
import classNames from 'classnames'
class Button extends Component {
    render () {
        const btnCls = classNames({
            'btn': true,
            'btn-pressed': this.state.isPressed,
            'btn-over': this.state.isHover
        })
        return &lt;button className={ btnCls }&gt;ok&lt;/button&gt;
    }
}</code></pre>
            <h3 class="title">组件间通信</h3>
            <p><strong>1、父组件向子组件通信：</strong>父组件通过props向子组件传递需要的信息。</p>
            <p><strong>2、子组件向父组件通信：</strong>有两种方法，利用<strong>回调函数</strong>或者<strong>自定义事件机制（较复杂一点）</strong></p>
            <p>回调的例子：</p>
            <pre><code>import React, { Component } from 'react'
// 子组件ListItem
class ListItem extends Component {
    static defaultProps = { text: '', checked: false }
    render () {
        return ( // checked状态没有放到state里面，onChange 回调父组件的处理方法
            &lt;li&gt;
                &lt;input type="checkbox" checked={ this.props.checked } onChange={ this.props.onChange }/&gt;
                &lt;span&gt;{ this.props.text }&lt;/span&gt;
            &lt;/li&gt;
        )
    }
}

// 父组件List
class List extends Component {
    static defaultProps = { list: [], handleItemChange: () => {} }
    constructor (props) {
        super(props)
        this.state = {
            list: this.props.list.map(entry => { text: entry.text, checked: entry.checked })
        }
    }
    onItemChange (item) {
        const { list } = this.state
        this.setState({
            list: list.map(entry => {
                text: entry.text,
                checked: item.text == entry.text ? !entry.checked : entry.checked 
            })
        })
        this.props.handleItemChange(entry) // List的父组件回调
    }
    render () {
        return (
            &lt;ul&gt;
                { this.state.list.map((entry, index) => (
                    &lt;ListItem key={`list-${index}`} value={ entry.text } checked={ entry.checked } onChange={ this.onItemChange.bind(this, entry) }/&gt;
                ))}
            &lt;/ul&gt;
        )
    }
}
</code></pre>
            <p><strong>3、跨级组件通信</strong>：层层传递太冗余。可以利用全局的context，但并不推荐使用。</p>
            <p><strong>4、没有嵌套关系的组件通信</strong>：利用自定义事件机制，需要注意的是，<strong>在componentDidMount中订阅事件，在componentWillUnmount事件中取消订阅的事件。</strong></p>
            <p>对于React来说，EventEmitter只需要单例就可以了：</p>
            <pre><code>import { EventEmitter } from 'events'
export default new EventEmitter</code></pre>
            <p>各组件就可以使用上面的EventEmitter实例了，与Vue类似：</p>
            <pre><code>onItemChange (item) {
    const { list } = this.state
    this.setState({
        list: list.map(entry => {
            text: entry.text,
            checked: item.text == entry.text ? !entry.checked : entry.checked 
        })
    })
    emitter.emitEvent('ItemChange', entry) // 事件名称和数据
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