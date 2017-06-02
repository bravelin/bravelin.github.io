<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之十：Proxy和Reflect</h2>
        <div class="content">
            <h3 class="title">Proxy概述</h3>
            <p>用于修改某些操作的默认行为，在目标对象之前架设一“拦截”层，外界对该对象的访问都必须先通过这层拦截。<strong>提供一种机制，可以对外界的访问进行过滤和拦截。</strong></p>
            <p>ES6提供原生的Proxy构造函数，用于生成Proxy实例。</p>
            <pre><code>var proxy = new Proxy(target, handler) // target拦截的目标对象</code></pre>
            <p>拦截读取属性：</p>
            <pre><code>var proxy = new Proxy({}, {
        get: function (target, property) {
            return 35
        }
    })
    proxy.time // 35
    proxy.abc // 35</code></pre>
            <p><strong>要使Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象。</strong></p>
            <p>如果handler没有设置任何拦截，等同于直接通向原对象：</p>
            <pre><code>var target = {}
    var handler = {}
    var proxy = new Proxy(target, handler)
    proxy.a = 'b'
    target.a // 'b'</code></pre>
            <p>目标对象可以是函数。</p>
            <h3 class="title">Reflect概述</h3>
            <p>也是ES6为了操作对象而提供的新的API，设计目标如下：</p>
            <p>1、将Object对象一些属于语言层面的方法放到Reflect对象上；</p>
            <p>2、修改某些Object方法的返回结果，让其变得更合理；</p>
            <p>3、让Object操作都变成函数行为，如 name in obj和delete obj[name]变成Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)；</p>
            <p>4、Reflect对象的方法和Proxy对象的方法一一对应。可以使Proxy对象方便地调用Reflect方法完成默认行为。</p>
        </div>
        <footer>2017年05月14日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>
