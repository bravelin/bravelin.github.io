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
            <h3 class="title">String.fromCodePoint</h3>
            <p>ES5的String.fromCharCode方法用于从码点返回对应字符，但这个方法不能识别32位的UTF-16字符。String.fromCodePoint方法则可以。在作用上，与codePointAt方法相反。</p>
            <h3 class="title">字符串的遍历器接口</h3>
            <p>ES6为字符串提供了遍历器接口，使字符串可以由for...of循环遍历。</p>
            <pre><code>for(let codePoint of 'foo') { console.log(codePoint) }
// 'f'
// 'o'
// 'o'</code></pre>
            <p>这个遍历器的最大优点是可以识别大于0xFFFF的码点。</p>
            <h3 class="title">at()</h3>
            <p>ES5中的charAt方法返回字符串给定位置的字符，该方法不能识别大于0xffff的字符。at方法则可以识别。</p>
            <h3 class="title">includes()、startsWidth()、endsWidth()</h3>
            <p>除了indexOf()之外，es6提供的这3种方法也可以确定一个字符串是否包含在另外的一个字符串中。</p>
            <p>includes()：返回布尔值，表示是否找到了参数字符串。</p>
            <p>startsWidth()：返回布尔值，表示参数字符串是否在源字符串的头部。</p>
            <p>endsWidth()：返回布尔值，表示参数字符串是否在源字符串的尾部。</p>
            <p><strong>这3个方法都支持第二个参数n，表示开始搜索的位置。(endsWidth的n表示前n个字符)</strong></p>
            <h3 class="title">repeat()</h3>
            <p>repeat方法返回一个新的字符串，表示将原字符重复n次。（参数会被转成整数。）</p>
            <h3 class="title">padStart()、padEnd()</h3>
            <p>ES7推出了字符串补全功能，如果某个字符串未达到指定的长度，则在头部或者尾部补全之。</p>
            <pre><code>'x'.padStart(5,'ab') // ababx
'x'.padEnd(5,'ab') // xabab</code></pre>
            <p>第一个参数指定字符串的最小长度，第二个参数（默认为空格）则是用来补全的字符串。</p>
            <h3 class="title">模板字符串</h3>
            <p>模板字符串（template string）是增强版的字符串，使用反撇号（`：一般和~是同一个按键）标识。它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量：</p>
            <pre><code>`In JavaScript '\n' is a line-feed` // 普通字符串

// 多行字符串，可以直接换行
`In JavaScript this is
    not legal`

// 在字符串中嵌入变量
var name = 'bob', time = 'today'
`Hello ${name}, how are you ${time}` // Hello bob, how are you today</code></pre>
            <p><strong>如果在模板字符串中使用反撇号，则前面需要使用反斜杠转义。</strong>如果使用模板字符串表示多行字符，则所有的缩进和空格都会保留在输出中。</p>
            <p>在模板字符串中嵌入变量，需要写在<strong> ${} </strong>中。大括号内可以放入任意的JavaScript表达式（甚至调用函数），可以进行运算，以及引用对象的属性。</p>
            <pre><code>var x = 1, y = 2
`${x} + ${y} = ${ x+ y}`

function fn() { return 'good luck!' }
`foo ${fn()} boo` // foo good luck! boo</code></pre>
            <p>如果大括号中的对象不是字符串，则会调用对象的toString()方法转为字符串。如果引用的对象没有声明，则报错。</p>
            <h3 class="title">模板编译</h3>
            <p>待编译的模板：</p>
            <pre><code>var template = `
&lt;ul&gt;
    &lt;% for(var i = 0; i < data.length; i++) { %&gt;
        &lt;li&gt;&lt;%= data[i] %&gt;&lt;/li&gt;
    &lt;% } %&gt;
&lt;/ul&gt;
                `</code></pre>
            <p>使用正则表达式将其转为JavaScript表达式字符串：</p>
            <pre><code>var evalExpr = /<%=(.+?)%>/g
var expr = /<%([\s\S]+?)%>/g
template = template.replace(evalExpr, '`); \n echo( $1 ); \n echo(`').replace(expr, '`); \n $1 \n echo(`')
template = 'echo(`' + template + '`)'</code></pre>
            <p>处理之后的结果是：</p>
            <pre><code>echo(`&lt;ul&gt;`);
for(var i = 0; i < data.length; i++) {
     echo(`&lt;li&gt;`);
     echo(  data[i]  );
     echo(`&lt;/li&gt;`);
}
echo(`&lt;/ul&gt;`)</code></pre>
            <p>最终的脚本：</p>
            <pre><code>var script = `(function parse(data){
    var output = ''
    function echo (html) { output += html }
    ${ template }
    return output
})`</code></pre>
            <h3 class="title">标签模板（tagged template）</h3>
            <p>模板字符串可以紧跟在一个函数名的后面，该函数将被调用来处理这个模板字符串。</p>
            <p><strong>标签模板其实不是模板，而是函数调用的一种形式。"标签"指的是函数，紧跟在后面的模板字符串就是它的参数。</strong></p>
            <pre><code>var a = 5, b = 10
tag `Hello ${ a + b } world ${ a * b }`

function tag (stringArr, ...values) {}
// 实际上是 tag (['Hello ', ' world', ''], 15, 50)</code></pre>
            <p>tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分。其他参数是模板字符串中各个变量被替换之后的值。</p>
            <p>tag函数的第一个参数有一个raw属性，也指向一个数组。该数组的成员与此参数数组几乎完全一致。两者唯一的区别，是字符串里面的反斜杠被转义了。</p>
            <h3 class="title">String.raw()</h3>
            <p>通常用来充当模板字符串的处理函数，返回一个反斜线都被转义的字符串，对应于替换变量之后的模板字符串<strong>（好像不太对）</strong>：</p>
            <pre><code>String.raw `Hi\n ${ 1 + 2 }` // Hi\\n 3，实际中chrome输出Hi\n 3</code></pre>
        </div>
        <footer>2017年03月11日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>