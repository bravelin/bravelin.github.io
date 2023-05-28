import{u as e}from"./highlight-2e3cec98.js";import{u as n}from"./catalog-69e48a3d.js";import{_ as t,b as l,c as a,l as r}from"./index-4afbb925.js";import"./article-1b647556.js";const u={setup(){e(),n()}},o={class:"article-container"},v=r(`<h2 class="article-title">Vue3中限定input元素输入的几个指令</h2><div class="article-content"><h3 class="title">限定input只能输入正整数</h3><pre><code>const doInputHandler = (e) =&gt; {
    const el = e.target
    let eventTag = false
    el.value = el.value + &#39;&#39;
    if (el.value &amp;&amp; /\\D/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/\\D/g, &#39;&#39;)
    }
    if (eventTag) {
        const evt = document.createEvent(&#39;HTMLEvents&#39;)
        evt.initEvent(&#39;input&#39;, true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener(&#39;input&#39;, doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener(&#39;input&#39;, doInputHandler)
    }
}</code></pre><h3 class="title">限定input只能输入数字和两位小数点</h3><pre><code>const doInputHandler = (e) =&gt; {
    const el = e.target
    let eventTag = false
    el.value = el.value + &#39;&#39;
    if (el.value &amp;&amp; /[^0-9.]/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/[^0-9.]/g, &#39;&#39;)
    }
    // 多个点的情况，只保留一个小数点
    const dotMatchs = el.value.match(/\\./g)
    if (dotMatchs &amp;&amp; dotMatchs.length &gt; 1) {
        let tag = false
        el.value = el.value.split(&#39;&#39;).filter(char =&gt; {
            if (char == &#39;.&#39;) {
                if (!tag) {
                    tag = true
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }).join(&#39;&#39;)
        eventTag = true
    }
    const dotPos = el.value.indexOf(&#39;.&#39;)
    if (dotPos &gt;= 0 &amp;&amp; el.value.length - dotPos &gt; 3) {
        el.value = el.value.slice(0, 3 - el.value.length + dotPos)
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent(&#39;HTMLEvents&#39;)
        evt.initEvent(&#39;input&#39;, true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener(&#39;input&#39;, doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener(&#39;input&#39;, doInputHandler)
    }
}</code></pre><h3 class="title">限定input只能输入数字和小数点</h3><pre><code>const doInputHandler = (e) =&gt; {
    const el = e.target
    let eventTag = false
    el.value = el.value + &#39;&#39;
    if (el.value &amp;&amp; /[^0-9.]/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/[^0-9.]/g, &#39;&#39;)
    }
    // 多个点的情况，只保留一个小数点
    const dotMatchs = el.value.match(/\\./g)
    if (dotMatchs &amp;&amp; dotMatchs.length &gt; 1) {
        let tag = false
        el.value = el.value.split(&#39;&#39;).filter(char =&gt; {
            if (char == &#39;.&#39;) {
                if (!tag) {
                    tag = true
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }).join(&#39;&#39;)
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent(&#39;HTMLEvents&#39;)
        evt.initEvent(&#39;input&#39;, true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener(&#39;input&#39;, doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener(&#39;input&#39;, doInputHandler)
    }
}</code></pre><h3 class="title">限定input只能输入11位手机号码</h3><pre><code>const doInputHandler = (e) =&gt; {
    const el = e.target
    let eventTag = false
    let val = el.value + &#39;&#39;
    if (val &amp;&amp; /\\D/.test(val)) {
        eventTag = true
        val = val.replace(/\\D/g, &#39;&#39;)
    }
    if (val.length == 1 &amp;&amp; val != &#39;1&#39;) {
        el.value = &#39;&#39;
        eventTag = true
    } else if (val.length &gt; 11) {
        el.value = val.slice(0, 11)
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent(&#39;HTMLEvents&#39;)
        evt.initEvent(&#39;input&#39;, true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener(&#39;input&#39;, doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener(&#39;input&#39;, doInputHandler)
    }
}</code></pre></div><footer>2021年05月11日</footer>`,3),s=[v];function i(c,p,d,g,f,m){return l(),a("div",o,s)}const _=t(u,[["render",i]]);export{_ as default};
