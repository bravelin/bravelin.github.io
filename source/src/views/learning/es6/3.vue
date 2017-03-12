<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之三：字符串的扩展</h2>
        <div class="content">
            <h3 class="title">字符的Unicode表示法</h3>
            <p>JS中可以使用\uxxxx表示一个字符，但这个表示法仅限于\u0000-\uffff之间的字符，超出这个范围的字符，必须用2个双字节的形式表达。</p>
            <pre><code>"\uD842\uDFB7" // "𠮷"
"\u20BB7"  // "₻7"
"\u{20BB7}" // "𠮷"</code></pre>
            <p>如果直接在\u后面跟上超过0xffff的数值，JS会理解成\u20BB+7。在ES6中，将码点放入大括号中即可正确解读该字符，并且大括号表示法与四字节的UTF-16编码是等价的。</p>
            <p>可以使用以下六种方式表示一个字符：</p>
            <pre><code>'\z'
'\172'  // 八进制
'\x7A'  // 十六进制
'\u007A'
'\u{7A}'</code></pre>
            <h3 class="title">codePointAt()</h3>
            <p>在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于那些需要4个字节存储的字符（码点大于0xFFFF），JS会认为它们是两个字符：</p>
            <pre><code>var s = '\u{20BB7}'
s.length // 2
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
s.codePointAt(0) // 134071</code></pre>
            <p>codePointAt可以正确处理4个字节存储的字符，返回一个字符的码点（十进制表示）。而对于两个字节存储的常规字符，它的返回结果与charCodeAt一样。</p>
            <pre><code>var s = '\u{20BB7}a' // 在JS中长度是3
s.codePointAt(0).toString(16) // 20BB7
s.codePointAt(2).toString(16) // 61，正确序号其实是1</code></pre>
            <p>可以使用for of循环遍历字符：</p>
            <pre><code>var s = '\u{20BB7}a'
for(let ch of s){ console.log(ch.codePointAt(0).toString(16)) }</code></pre>
            <p>测试一个字符是由两个字节组成还是四个字节组成：</p>
            <pre><code>function is32Bit(c) { return c.codePointAt(0) > 0xffff }</code></pre>
        </div>
        <footer>2017年03月11日</footer>
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
