<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之四：正则的扩展</h2>
        <div class="content">
            <h3 class="title">RegExp构造函数</h3>
            <p>ES6允许RegExp构造函数接受正则表达式作为参数，而不仅仅是字符串：var reg = new RegExp(/xyz/i)。</p>
            <p>如果使用构造函数的第二个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式修饰符。只使用新指定的修饰符：new RegExp(/abc/ig, 'i')</p>
            <h3 class="title">字符串的正则方法</h3>
            <p>字符串对象的match()、replace()、search()和split()方法可以使用正则表达式。</p>
            <h3 class="title">u修饰符</h3>
            <p>新增的u修饰符，含义为"Unicode模式"，用来处理大于\uffff的Unicode字符。</p>
            <pre><code>/^\uD83D/u.test('\uD83D\uDC2A')  // false
/^\uD83D/.test('\uD83D\uDC2A')  // true</code></pre>
            <p>"83D2A"是一个4字节的UTF-16编码，代表一个字符。ES5将其识别成两个字符，因此第二个正则为true。增加了u修饰符，ES6将其识别为一个字符，所以第一个正则为false。</p>
            <p><strong>点字符是匹配除换行符以外的任意单个字符。</strong>对于码点大于0xffff的Unicode字符，点字符不能识别，必须加上u修饰符。</p>
            <p>ES6新增了使用大括号的Unicode字符表示法，这种表示法在正则中必须加上u修饰符才能识别，否则会被解读为量词。</p>
            <pre><code>/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
/^\u{3}$/.test('uuu') // true</code></pre>
            <p>u修饰符也影响到预定义模式能否正确识别码点大于0xfffff的Unicode字符。</p>
            <h3 class="title">y修饰符</h3>
            <p>称为粘连（sticky）修饰符。与g修饰符类似，也是全局匹配。后一次匹配都成上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就行，<strong>而y修饰符会确保匹配从剩余的第一个位置开始。</strong></p>
            <pre><code>var s = 'aaa_aa_a'
var r1 = /a+/g
var r2 = /a+/y

r1.exec(s) // ['aaa']
r2.exec(s) // ['aaa']

r1.exec(s) // ['aa']
r2.exec(s) // null

/b/y.exec('aba') // null</code></pre>
            <p>第一次匹配的结果相同，第二次就不一样了。进一步说，y修饰符隐藏了头部的的匹配标志（^）</p>
            <p>在split方法中使用y修饰符，原字符串必须以分隔符开头。意味着只要匹配成功，数组的第一个成员定是空字符串。</p>
            <pre><code>'x##'.split(/#/y) // 没有找到匹配 ['x##']
'##x'.split(/#/y) // 找到两个匹配 ['', '', 'x']
'#x#'.split(/#/y) // ['', 'x#']</code></pre>
            <p>replace例子：</p>
            <pre><code>var reg = /a/gy
'aaxa'.replace(reg, '-') // '--xa'</code></pre>
            <h3 class="title">sticky属性</h3>
            <p>ES6正则对象新增的这个属性表示是否设置了y修饰符。</p>
            <pre><code>var reg = /abc/y
reg.sticky // true</code></pre>
            <h3 class="title">flags属性</h3>
            <p>此属性返回正则表达式的修饰符。</p>
            <pre><code>/abc/ig.source // source属性返回正则表达式的正文 abc
/abc/ig.flags // flags属性返回修饰符 gi</code></pre>
        </div>
        <footer>2017年03月13日</footer>
        <comments></comments>
    </div>
</template>
<script>
    module.exports = {
        mounted: function () {
            this.$nextTick(function () {
                var codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    for (let k = 0; k < codes.length; k++) {
                        hljs.highlightBlock(codes[k])
                    }
                }
            })
        }
    }
</script>
