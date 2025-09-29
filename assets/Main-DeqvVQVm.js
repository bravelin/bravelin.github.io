import{_ as s,s as a,x as o,h as r,o as c,f as n,y as t}from"./index-CxcENImR.js";const u={};function p(i,e){const l=r("MyArticle");return c(),a(l,{title:"React学习笔记之二：漫谈React",date:"2017年11月05日"},{default:o(()=>[...e[0]||(e[0]=[n("div",{class:"_article-content"},[n("h3",{class:"title"},"事件系统"),n("p",null,[t("Virtual DOM在内存中以对象的形式存在，React实现了一个 "),n("strong",null,"SyntheticEvent"),t("层。所有的事件都自动绑定到最外层上，如果需要访问原生事件对象，可以使用 "),n("strong",null,"nativeEvent"),t("属性。")]),n("p",null,"在JSX中，必须以驼峰形式来书写事件的属性名："),n("pre",null,[n("code",null,"<button onClick={this.handClick}>Test</button>")]),n("p",null,[t("React并不会像DOM0级事件那样将事件处理器直接绑定到HTML元素之上。 "),n("strong",null,"而是将所有事件绑定到结构的最外层，使用一个统一的事件监听器。"),t("这个事件监听器维持了一个映射来保存所有组件内的事件监听和处理函数。")]),n("p",null,[t("在React组件中，每个方法的上下文都会指向该组件的实例， "),n("strong",null,"即自动绑定this为当前组件。"),t("在使用ES6 classes或者纯函数时，这种自动绑定就不复存在了，需要 "),n("strong",null,"手动绑定"),t("：")]),n("p",null,[n("strong",null,"1、bind方法：")]),n("pre",null,[n("code",null,`import React, { Component } from 'react'
class App extends Component {
    handClick(e, arg) {
        console.log(e, arg)
    }
    render() {
        return <button onClick={ this.handClick.bind(this, 'test') }>Test</button>
    }
}`)]),n("p",null,[t("如果方法只绑定而不传参，可以使用 "),n("strong",null,"双冒号语法"),t("：")]),n("pre",null,[n("code",null,"<button onClick={ ::this.handClick }>Test</button>")]),n("p",null,[n("strong",null,"2、在constructor中声明绑定：")]),n("pre",null,[n("code",null,`import React, { Component } from 'react'
class App extends Component {
    constructor (props) {
        super(props)
        this.handClick = this.handClick.bind(this)
    }
    handClick(e, arg) {
        console.log(e, arg)
    }
    render() {
        return <button onClick={ this.handClick }>Test</button>
    }
}`)]),n("p",null,[n("strong",null,"3、箭头函数："),t("箭头函数自动绑定了定义此函数作用域的this，因此不必再对其使用bind方法：")]),n("pre",null,[n("code",null,`import React, { Component } from 'react'
class App extends Component {
    const handClick = (e) => {
        console.log(e, arg)
    }
    render() {
        return <button onClick={ this.handClick }>Test</button>
    }
}`)]),n("p",null,[t("在React中使用DOM原生事件时， "),n("strong",null,"一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。尽量避免在React中混用合成事件和原生DOM事件。")]),n("p",null,[t("React的合成事件只是原生DOM事件系统的一个子集， "),n("strong",null,"并没有实现事件捕获，仅仅支持事件冒泡机制。")]),n("h3",{class:"title"},"表单"),n("p",null,"文本框的应用："),n("pre",null,[n("code",null,`import React, { Component } from 'react'
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
            <div>
                <input type="text" value={ inputValue } onChange={ this.handleInputChange }/>
                <textarea value={ textareaValue } onChange={ this.handleTextareaChange }/>
            </div>
        )
    }
}`)]),n("p",null,[t("每当表单的状态发生改变时，都会将表单对应的值写入到state中，这种组件称之为 "),n("strong",null,"受控组件"),t("。在受控组件中，组件渲染出的状态与它的value或checked属性相对应。受控组件更新state的流程：")]),n("p",null,"1、可以在初始state中设置表单的默认值；"),n("p",null,"2、对表单增加onChange事件监听；"),n("p",null,"3、事件处理器通过合成事件e拿到改变之后的状态，并更新应用的state；"),n("p",null,"4、setState触发视图的重新渲染，完成表单组件的更新。"),n("p",null,"可以在执行最后一步的setState之前，对表单值进行清洗和校验："),n("pre",null,[n("code",null,`handleChange (e) {
    this.setState({
        value: e.target.value.substring(0, 10).toUpperCase()
    })
}`)]),n("p",null,[t("如果一个表单组件没有value（checked）props，可称之为 "),n("strong",null,"非受控组件"),t("。因为其值不受state或者props控制，通常需要为其添加ref prop来访问渲染之后的DOM元素。在React中不提倡使用非受控组件。")]),n("p",null,"表单组件的三个状态属性："),n("p",null,[n("strong",null,"value"),t("：type为text的input、textarea、select组件；")]),n("p",null,[n("strong",null,"checked"),t("：type为radio或者checkbox的组件；")]),n("p",null,[n("strong",null,"selected"),t("：作用于select组件下的option，React并不建议使用这种方式定义select组件的状态。")]),n("h3",{class:"title"},"样式处理"),n("p",null,"在React中添加样式需要设置className prop，行内样式则使用style prop来设置。"),n("pre",null,[n("code",null,`const style = {
    color: 'white',
    backgroundImage: \`url(\${ imgUrl })\`,
    WebkitTransition: 'all', // 会转换成 -webkit-transition
    msTransition: 'all' // ms是唯一使用小写的浏览器前缀
}
const component = <Component style={ style } />`)]),n("p",null,"当设置width和height之类的与大小有关的样式时，大部分会以像素为单位，React自动对这样的属性添加px："),n("pre",null,[n("code",null,"const style = { height: 10 }")]),n("p",null,"在React中一般使用classnames库来操作类："),n("pre",null,[n("code",null,`import React, { Component } from 'react'
import classNames from 'classnames'
class Button extends Component {
    render () {
        const btnCls = classNames({
            'btn': true,
            'btn-pressed': this.state.isPressed,
            'btn-over': this.state.isHover
        })
        return <button className={ btnCls }>ok</button>
    }
}`)]),n("h3",{class:"title"},"组件间通信"),n("p",null,[n("strong",null,"1、父组件向子组件通信："),t("父组件通过props向子组件传递需要的信息。")]),n("p",null,[n("strong",null,"2、子组件向父组件通信："),t("有两种方法，利用 "),n("strong",null,"回调函数"),t("或者 "),n("strong",null,"自定义事件机制（较复杂一点）")]),n("p",null,"回调的例子："),n("pre",null,[n("code",null,`import React, { Component } from 'react'
// 子组件ListItem
class ListItem extends Component {
    static defaultProps = { text: '', checked: false }
    render () {
        return ( // checked状态没有放到state里面，onChange 回调父组件的处理方法
            <li>
                <input type="checkbox" checked={ this.props.checked } onChange={ this.props.onChange }/>
                <span>{ this.props.text }</span>
            </li>
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
            <ul>
                { this.state.list.map((entry, index) => (
                    <ListItem key={\`list-\${index}\`} value={ entry.text } checked={ entry.checked } onChange={ this.onItemChange.bind(this, entry) }/>
                ))}
            </ul>
        )
    }
}
`)]),n("p",null,[n("strong",null,"3、跨级组件通信"),t("：层层传递太冗余。可以利用全局的context，但并不推荐使用。")]),n("p",null,[n("strong",null,"4、没有嵌套关系的组件通信"),t("：利用自定义事件机制，需要注意的是， "),n("strong",null,"在componentDidMount中订阅事件，在componentWillUnmount事件中取消订阅的事件。")]),n("p",null,"对于React来说，EventEmitter只需要单例就可以了："),n("pre",null,[n("code",null,`import { EventEmitter } from 'events'
export default new EventEmitter`)]),n("p",null,"各组件就可以使用上面的EventEmitter实例了，与Vue类似："),n("pre",null,[n("code",null,`onItemChange (item) {
    const { list } = this.state
    this.setState({
        list: list.map(entry => {
            text: entry.text,
            checked: item.text == entry.text ? !entry.checked : entry.checked
        })
    })
    emitter.emitEvent('ItemChange', entry) // 事件名称和数据
}`)])],-1)])]),_:1})}const d=s(u,[["render",p]]);export{d as default};
