webpackJsonp([17],{URMT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={extends:n("wkh7").a},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("React学习笔记之一：初入React世界")]),t._v(" "),t._m(0),t._v(" "),n("footer",[t._v("2017年10月29日")]),t._v(" "),n("comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("React简介")]),t._v(" "),n("p",[t._v("React是Facebook在2013年开源的JavaScript库。React将用户界面抽象成一个个组件，开发者通过组合这些组件来构建功能丰富的页面。React并不是完整的MVC/MVVM框架，专注于提供清晰的简洁的视图层解决方案。")]),t._v(" "),n("p",[n("strong",[t._v("Virtual DOM")]),t._v("：在前端开发中，性能消耗最大的就是DOM操作。React将真实DOM树转换成JavaScript对象树。在每次数据更新之后，重新计算Virtual DOM，并和上一次的Virtual DOM做对比，对发生变化的部分做批量更新。（也可以使用"),n("strong",[t._v("shouldComponentUpdate")]),t._v("生命周期回调，减少不必要的对比过程，保证性能。）")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("JSX语法")]),t._v(" "),n("p",[t._v("JSX将HTML语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由浏览器执行。JSX并不是强制需要的，只是让组件的结构更直观。")]),t._v(" "),n("p",[n("strong",[t._v("定义标签时，只允许被一个标签包裹")]),t._v("：最外层只能有一个标签。")]),t._v(" "),n("p",[n("strong",[t._v("标签一定要闭合")]),t._v("：所有标签都必须闭合，自闭合标签img等也要遵循同样规则，可以根据是否有子组件来决定闭合方式。")]),t._v(" "),n("p",[n("strong",[t._v("标签首字母小写对应DOM元素；首字母大写对应自定义组件元素。")])]),t._v(" "),n("p",[n("strong",[t._v("可以通过命名空间的方式使用组件元素")]),t._v("，以解决组件同名冲突的问题：")]),t._v(" "),n("pre",[n("code",[t._v("const App = () => {\n    <MUI.RaisedButton label='default' />\n}")])]),t._v(" "),n("p",[n("strong",[t._v("在一个组件的子元素位置使用注释需要用{}包起来")]),t._v("：")]),t._v(" "),n("pre",[n("code",[t._v("const App = {\n    <Nav>\n        { /* 节点注释 */ }\n        <Person\n            /* 多行\n                注释 */\n        name = '--'\n        />\n    </Nav>\n}")])]),t._v(" "),n("p",[n("strong",[t._v("DOM元素属性class转换成className；for转换成htmlFor")]),t._v("，在JavaScript中这两个是关键词。")]),t._v(" "),n("p",[n("strong",[t._v("在写自定义属性的时候，都由标准写法改为小驼峰写法。")])]),t._v(" "),n("p",[n("strong",[t._v("可以使用ES6的新语法展开属性：")])]),t._v(" "),n("pre",[n("code",[t._v("const data = { name: 'foo', value: 'bar' }\nconst component = <Component name = {data.name} value={data.value} />\n// es6展开\nconst component = <Component {...data} />")])]),t._v(" "),n("p",[n("strong",[t._v("在JSX中往DOM元素传入自定义属性，需要使用data-前缀，不然不会渲染")]),t._v("，自定义组件元素则支持任意属性。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("React组件")]),t._v(" "),n("p",[t._v("React组件由组件的构建方式、组件内部的属性状态和生命周期方法组成。React的组件构建有3种方法：")]),t._v(" "),n("p",[n("strong",[t._v("1、React.createClass")]),t._v("：比较传统，也是兼容性最好的一种方法。")]),t._v(" "),n("pre",[n("code",[t._v("const Button = React.createClass({\n    getDefaultProps () {\n        return { color: 'red', text: 'ok' }\n    },\n    render () {\n        const { color, text } = this.props\n        return (\n            <button className={ `btn btn-${color}` }><em>{ text }</em></buttom>\n        )\n    }\n})")])]),t._v(" "),n("p",[t._v("在应用中调用几次Button，就会创建几次Button实例。")]),t._v(" "),n("p",[n("strong",[t._v("2、ES6 classes")]),t._v("：通过ES6标准的类语法的方式来构建。")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\n    class Button extends Component {\n        constructor(props) {\n            super(props)\n        };\n        static defaultProps = {\n            color: 'red', text: 'ok'\n        };\n        render () {\n            const { color, text } = this.props\n            return (\n                <button className={ `btn btn-${color}` }><em>{ text }</em></button>\n            )\n        }\n}")])]),t._v(" "),n("p",[t._v("与createClass的方式一样，调用类实现的组件会创建实例对象。")]),t._v(" "),n("p",[n("strong",[t._v("3、无状态函数")]),t._v("：不存在state，也没有生命周期方法。始终保持一个实例，避免了不必要的检查和内存分配。")]),t._v(" "),n("pre",[n("code",[t._v("function Button({ color = 'red', text = 'ok' }) {\n    return (\n        <button className=`{ btn btn-${color} }`><em>{ text }</em></button>\n    )\n}")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("React数据流")]),t._v(" "),n("p",[n("strong",[t._v("如果顶层组件初始化props，那么React会向下遍历整棵组件树，重新尝试渲染所有的相关子组件。而state只关心每个组件自己内部的状态，这些状态只能在组件内改变。")])]),t._v(" "),n("p",[t._v("当使用内置的setState方法时，组件会尝试重新渲染。setState是异步方法，一个生命周期内的所有setState方法会合并操作。")]),t._v(" "),n("p",[n("strong",[t._v("props本身是不可变的")]),t._v("，组件的props一定来自于默认属性或者通过父组件的传递。")]),t._v(" "),n("p",[t._v("propTypes用于规范props的类型与必需的状态。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("React生命周期")]),t._v(" "),n("p",[t._v("生命周期泛指自然界和人类社会中各种客官事物的阶段性变化及其规律。")]),t._v(" "),n("p",[n("strong",[t._v("componentWillMount")]),t._v("会在render方法执行之前执行，"),n("strong",[t._v("componentDidMount")]),t._v("则在render方法之后执行。分别代表了渲染前后的时刻。")]),t._v(" "),n("p",[t._v("在componentWillMount中执行setState方法，组件会更新state，但组件只渲染一次，在这里执行是无意义的。可以在constructor里面放入this.state赋值。")]),t._v(" "),n("p",[t._v("初始化组件模板代码：")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component, PropTypes } from 'react'\nclass App extends Component {\n    static propTypes = { ... }\n    static defaultProps = { ... }\n    constructor (props) {\n        super(props)\n        this.state = { ... }\n    }\n    componentWillMount () {\n        // ...\n    }\n    componentDidMount () {\n        // ...\n    }\n    render () {\n        return <div>Hello World!</div>\n    }\n}")])]),t._v(" "),n("p",[t._v("在componentDidMount方法中执行setState，组件会再次更新，但会在初始化过程渲染两次组件。")]),t._v(" "),n("p",[t._v("组件的卸载只有"),n("strong",[t._v("componentWillUnmount")]),t._v("这个卸载之前的方法，可以在里面执行一些清理，如事件回收和清除定时器。")]),t._v(" "),n("p",[n("strong",[t._v("数据更新过程")]),t._v("指的是父组件向下传递props或者组件自身执行setState方法时发生的一系列更新动作。")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component, PropTypes } from 'react'\nclass App extends Component {\n    comonentWillReceiveProps (nextProps) { // this.setState({}) }\n    shouldComponentUpdate (nextProps, nextState) { return true }\n    componentWillUpdate (nextProps, nextState) { ... }\n    componentDidUpdate (prevProps, prevState) { ... }\n    render () { return <div>Hello World</div> }\n}")])]),t._v(" "),n("p",[n("strong",[t._v("如果组件自身的state更新了，会依次执行shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate。")])]),t._v(" "),n("p",[t._v("shouldComponentUpdate是一个特别的方法，可以在此增加必要的判断方法，当返回false时，不再向下执行生命周期方法。")]),t._v(" "),n("p",[t._v("无状态组件没有生命周期方法，意味着也没有shouldComponentUpdate。渲染到该类组件时，每次都会重新渲染。")]),t._v(" "),n("p",[n("strong",[t._v("不能在componentWillUpdate中执行setState。如果组件是由父组件更新props引起更新的，会在shouldComponentUpdate方法之前执行componentWillReceiveProps。")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("React与DOM")]),t._v(" "),n("p",[t._v("ReactDOM的API非常少，只有"),n("strong",[t._v("findDOMNode、unmountComponentAtNode以及render")]),t._v("。")]),t._v(" "),n("p",[t._v("DOM被真正添加到HTML中的生命周期方法只有componentDidMount和componentDidUpdate。React提供了两种获取DOM元素的方法，其一：")]),t._v(" "),n("pre",[n("code",[t._v("DOMElement findDOMNode(ReactComponent component)\n\n// 在当前的组件加载完时获取DOM\nimport React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nclass App extends Component {\n    componentDidMount () {\n        const dom = ReactDOM.findDOMNode(this)\n    }\n    render () {}\n}")])]),t._v(" "),n("p",[t._v("涉及复杂的操作，可以使用原生DOM API。")]),t._v(" "),n("p",[t._v("要将React的Virtual DOM渲染到浏览器当中，需要使用render方法：")]),t._v(" "),n("pre",[n("code",[t._v("// 将元素挂载到container中\nReactComponent render(ReactElement element, DOMElement container, [function callback])")])]),t._v(" "),n("p",[n("strong",[t._v("当组件在初次渲染之后再次更新，React不会把整个组件重新渲染一次，而是会使用高效的DOM diff算法做更新。")])]),t._v(" "),n("p",[n("strong",[t._v("unstable_renderSubtreeIntoContainer")]),t._v("方法的作用是更新组件到传入的DOM节点上。")]),t._v(" "),n("p",[n("strong",[t._v("refs")]),t._v("是React组件一个特殊的prop，可以附加到任何一个组件上。"),n("strong",[t._v("组件在创建时会新建一个该组件的实例，而refs就指向这个实例。")]),t._v("它可以是一个回调函数，这个回调函数会在组件被挂载之后立即执行：")]),t._v(" "),n("pre",[n("code",[t._v("render () {\n    return <input type='text' ref={ (ref)=> this.myTextInput=ref } />\n}")])]),t._v(" "),n("p",[t._v("refs同样支持字符串，对于DOM操作，不仅可以使用findDOMNode获得组件的DOM，还可以使用refs获取组件内部的DOM。")]),t._v(" "),n("pre",[n("code",[t._v("import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nclass App extends Component {\n    componentDidMount () {\n        // myComp是Comp的实例，因此需要用findDOMNode转换为相应的DOM\n        const myComp = this.refs.myComp\n        const myCompDom = ReactDOM.findDOMNode(myComp)\n    }\n    render () {\n        return <div><Comp ref='myComp' /></div>\n    }\n}")])]),t._v(" "),n("p",[n("strong",[t._v("要获取一个React组件的引用，可以使用this获取当前的React组件，使用refs获取子组件。")])]),t._v(" "),n("p",[n("strong",[t._v("DOMNode.contains(node)")]),t._v("：DOM的原生方法，可以判断一个节点是否被包含。")]),t._v(" "),n("pre",[n("code",[t._v("var node = document.querySelector('#app-tip')\nvar body = document.querySelector('body')\nbody.contains(node) // true")])])])}]},p=n("rAbc")(o,r,!1,null,null,null);e.default=p.exports}});