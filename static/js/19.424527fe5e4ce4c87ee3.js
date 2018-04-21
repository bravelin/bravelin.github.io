webpackJsonp([19],{CrFR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("wkh7"),a={components:{Page:s.a},extends:s.a},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("React学习笔记之二：漫谈React")]),t._v(" "),t._m(0),t._v(" "),n("footer",[t._v("2017年11月05日")]),t._v(" "),n("comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("事件系统")]),t._v(" "),n("p",[t._v("Virtual DOM在内存中以对象的形式存在，React实现了一个"),n("strong",[t._v("SyntheticEvent")]),t._v("层。所有的事件都自动绑定到最外层上，如果需要访问原生事件对象，可以使用"),n("strong",[t._v("nativeEvent")]),t._v("属性。")]),t._v(" "),n("p",[t._v("在JSX中，必须以驼峰形式来书写事件的属性名：")]),t._v(" "),n("pre",[n("code",[t._v("<button onClick={this.handClick}>Test</button>")])]),t._v(" "),n("p",[t._v("React并不会像DOM0级事件那样将事件处理器直接绑定到HTML元素之上。"),n("strong",[t._v("而是将所有事件绑定到结构的最外层，使用一个统一的事件监听器。")]),t._v("这个事件监听器维持了一个映射来保存所有组件内的事件监听和处理函数。")]),t._v(" "),n("p",[t._v("在React组件中，每个方法的上下文都会指向该组件的实例，"),n("strong",[t._v("即自动绑定this为当前组件。")]),t._v("在使用ES6 classes或者纯函数时，这种自动绑定就不复存在了，需要"),n("strong",[t._v("手动绑定")]),t._v("：")]),t._v(" "),n("p",[n("strong",[t._v("1、bind方法：")])]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nclass App extends Component {\n    handClick(e, arg) {\n        console.log(e, arg)\n    }\n    render() {\n        return <button onClick={ this.handClick.bind(this, 'test') }>Test</button>\n    }\n}")])]),t._v(" "),n("p",[t._v("如果方法只绑定而不传参，可以使用"),n("strong",[t._v("双冒号语法")]),t._v("：")]),t._v(" "),n("pre",[n("code",[t._v("<button onClick={ ::this.handClick }>Test</button>")])]),t._v(" "),n("p",[n("strong",[t._v("2、在constructor中声明绑定：")])]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nclass App extends Component {\n    constructor (props) {\n        super(props)\n        this.handClick = this.handClick.bind(this)\n    }\n    handClick(e, arg) {\n        console.log(e, arg)\n    }\n    render() {\n        return <button onClick={ this.handClick }>Test</button>\n    }\n}")])]),t._v(" "),n("p",[n("strong",[t._v("3、箭头函数：")]),t._v("箭头函数自动绑定了定义此函数作用域的this，因此不必再对其使用bind方法：")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nclass App extends Component {\n    const handClick = (e) => {\n        console.log(e, arg)\n    }\n    render() {\n        return <button onClick={ this.handClick }>Test</button>\n    }\n}")])]),t._v(" "),n("p",[t._v("在React中使用DOM原生事件时，"),n("strong",[t._v("一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。尽量避免在React中混用合成事件和原生DOM事件。")])]),t._v(" "),n("p",[t._v("React的合成事件只是原生DOM事件系统的一个子集，"),n("strong",[t._v("并没有实现事件捕获，仅仅支持事件冒泡机制。")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("表单")]),t._v(" "),n("p",[t._v("文本框的应用：")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nclass App extends Component {\n    constructor (props) {\n        super(props)\n        this.handleInputChange = this.handleInputChange.bind(this)\n        this.handleTextareaChange = this.handleTextareaChange.bind(this)\n        this.state = {\n            inputValue: '',\n            textareaValue: ''\n        }\n    }\n    handleInputChange (e) { // 同步值\n        this.setState({\n            inputValue: e.target.value\n        })\n    }\n    handleTextareaChange (e) {\n        this.setState({\n            textareaValue: e.target.value\n        })\n    }\n    render () {\n        const { inputValue, textareaValue } = this.state\n        return (\n            <div>\n                <input type=\"text\" value={ inputValue } onChange={ this.handleInputChange }/>\n                <textarea value={ textareaValue } onChange={ this.handleTextareaChange }/>\n            </div>\n        )\n    }\n}")])]),t._v(" "),n("p",[t._v("每当表单的状态发生改变时，都会将表单对应的值写入到state中，这种组件称之为"),n("strong",[t._v("受控组件")]),t._v("。在受控组件中，组件渲染出的状态与它的value或checked属性相对应。受控组件更新state的流程：")]),t._v(" "),n("p",[t._v("1、可以在初始state中设置表单的默认值；")]),t._v(" "),n("p",[t._v("2、对表单增加onChange事件监听；")]),t._v(" "),n("p",[t._v("3、事件处理器通过合成事件e拿到改变之后的状态，并更新应用的state；")]),t._v(" "),n("p",[t._v("4、setState触发视图的重新渲染，完成表单组件的更新。")]),t._v(" "),n("p",[t._v("可以在执行最后一步的setState之前，对表单值进行清洗和校验：")]),t._v(" "),n("pre",[n("code",[t._v("handleChange (e) {\n    this.setState({\n        value: e.target.value.substring(0, 10).toUpperCase()\n    })\n}")])]),t._v(" "),n("p",[t._v("如果一个表单组件没有value（checked）props，可称之为"),n("strong",[t._v("非受控组件")]),t._v("。因为其值不受state或者props控制，通常需要为其添加ref prop来访问渲染之后的DOM元素。在React中不提倡使用非受控组件。")]),t._v(" "),n("p",[t._v("表单组件的三个状态属性：")]),t._v(" "),n("p",[n("strong",[t._v("value")]),t._v("：type为text的input、textarea、select组件；")]),t._v(" "),n("p",[n("strong",[t._v("checked")]),t._v("：type为radio或者checkbox的组件；")]),t._v(" "),n("p",[n("strong",[t._v("selected")]),t._v("：作用于select组件下的option，React并不建议使用这种方式定义select组件的状态。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("样式处理")]),t._v(" "),n("p",[t._v("在React中添加样式需要设置className prop，行内样式则使用style prop来设置。")]),t._v(" "),n("pre",[n("code",[t._v("const style = {\n    color: 'white',\n    backgroundImage: `url(${ imgUrl })`,\n    WebkitTransition: 'all', // 会转换成 -webkit-transition\n    msTransition: 'all' // ms是唯一使用小写的浏览器前缀\n}\nconst component = <Component style={ style } />")])]),t._v(" "),n("p",[t._v("当设置width和height之类的与大小有关的样式时，大部分会以像素为单位，React自动对这样的属性添加px：")]),t._v(" "),n("pre",[n("code",[t._v("const style = { height: 10 }")])]),t._v(" "),n("p",[t._v("在React中一般使用classnames库来操作类：")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nimport classNames from 'classnames'\nclass Button extends Component {\n    render () {\n        const btnCls = classNames({\n            'btn': true,\n            'btn-pressed': this.state.isPressed,\n            'btn-over': this.state.isHover\n        })\n        return <button className={ btnCls }>ok</button>\n    }\n}")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("组件间通信")]),t._v(" "),n("p",[n("strong",[t._v("1、父组件向子组件通信：")]),t._v("父组件通过props向子组件传递需要的信息。")]),t._v(" "),n("p",[n("strong",[t._v("2、子组件向父组件通信：")]),t._v("有两种方法，利用"),n("strong",[t._v("回调函数")]),t._v("或者"),n("strong",[t._v("自定义事件机制（较复杂一点）")])]),t._v(" "),n("p",[t._v("回调的例子：")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\n// 子组件ListItem\nclass ListItem extends Component {\n    static defaultProps = { text: '', checked: false }\n    render () {\n        return ( // checked状态没有放到state里面，onChange 回调父组件的处理方法\n            <li>\n                <input type=\"checkbox\" checked={ this.props.checked } onChange={ this.props.onChange }/>\n                <span>{ this.props.text }</span>\n            </li>\n        )\n    }\n}\n\n// 父组件List\nclass List extends Component {\n    static defaultProps = { list: [], handleItemChange: () => {} }\n    constructor (props) {\n        super(props)\n        this.state = {\n            list: this.props.list.map(entry => { text: entry.text, checked: entry.checked })\n        }\n    }\n    onItemChange (item) {\n        const { list } = this.state\n        this.setState({\n            list: list.map(entry => {\n                text: entry.text,\n                checked: item.text == entry.text ? !entry.checked : entry.checked \n            })\n        })\n        this.props.handleItemChange(entry) // List的父组件回调\n    }\n    render () {\n        return (\n            <ul>\n                { this.state.list.map((entry, index) => (\n                    <ListItem key={`list-${index}`} value={ entry.text } checked={ entry.checked } onChange={ this.onItemChange.bind(this, entry) }/>\n                ))}\n            </ul>\n        )\n    }\n}\n")])]),t._v(" "),n("p",[n("strong",[t._v("3、跨级组件通信")]),t._v("：层层传递太冗余。可以利用全局的context，但并不推荐使用。")]),t._v(" "),n("p",[n("strong",[t._v("4、没有嵌套关系的组件通信")]),t._v("：利用自定义事件机制，需要注意的是，"),n("strong",[t._v("在componentDidMount中订阅事件，在componentWillUnmount事件中取消订阅的事件。")])]),t._v(" "),n("p",[t._v("对于React来说，EventEmitter只需要单例就可以了：")]),t._v(" "),n("pre",[n("code",[t._v("import { EventEmitter } from 'events'\nexport default new EventEmitter")])]),t._v(" "),n("p",[t._v("各组件就可以使用上面的EventEmitter实例了，与Vue类似：")]),t._v(" "),n("pre",[n("code",[t._v("onItemChange (item) {\n    const { list } = this.state\n    this.setState({\n        list: list.map(entry => {\n            text: entry.text,\n            checked: item.text == entry.text ? !entry.checked : entry.checked \n        })\n    })\n    emitter.emitEvent('ItemChange', entry) // 事件名称和数据\n}")])])])}]},o=n("U5Ua")(a,r,!1,null,null,null);e.default=o.exports}});