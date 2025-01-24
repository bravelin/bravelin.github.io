import{_ as l,m as a,p as u,h as r,o as v,e}from"./index-ChNXl_Yx.js";const o={};function s(i,n){const t=r("MyArticle");return v(),a(t,{title:"Vue3中限定input元素输入的几个指令",date:"2021年05月11日"},{default:u(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("h3",{class:"title"},"限定input只能输入正整数"),e("pre",null,[e("code",null,`const doInputHandler = (e) => {
    const el = e.target
    let eventTag = false
    el.value = el.value + ''
    if (el.value && /\\D/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/\\D/g, '')
    }
    if (eventTag) {
        const evt = document.createEvent('HTMLEvents')
        evt.initEvent('input', true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener('input', doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener('input', doInputHandler)
    }
}`)]),e("h3",{class:"title"},"限定input只能输入数字和两位小数点"),e("pre",null,[e("code",null,`const doInputHandler = (e) => {
    const el = e.target
    let eventTag = false
    el.value = el.value + ''
    if (el.value && /[^0-9.]/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/[^0-9.]/g, '')
    }
    // 多个点的情况，只保留一个小数点
    const dotMatchs = el.value.match(/\\./g)
    if (dotMatchs && dotMatchs.length > 1) {
        let tag = false
        el.value = el.value.split('').filter(char => {
            if (char == '.') {
                if (!tag) {
                    tag = true
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }).join('')
        eventTag = true
    }
    const dotPos = el.value.indexOf('.')
    if (dotPos >= 0 && el.value.length - dotPos > 3) {
        el.value = el.value.slice(0, 3 - el.value.length + dotPos)
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent('HTMLEvents')
        evt.initEvent('input', true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener('input', doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener('input', doInputHandler)
    }
}`)]),e("h3",{class:"title"},"限定input只能输入数字和小数点"),e("pre",null,[e("code",null,`const doInputHandler = (e) => {
    const el = e.target
    let eventTag = false
    el.value = el.value + ''
    if (el.value && /[^0-9.]/.test(el.value)) {
        eventTag = true
        el.value = el.value.replace(/[^0-9.]/g, '')
    }
    // 多个点的情况，只保留一个小数点
    const dotMatchs = el.value.match(/\\./g)
    if (dotMatchs && dotMatchs.length > 1) {
        let tag = false
        el.value = el.value.split('').filter(char => {
            if (char == '.') {
                if (!tag) {
                    tag = true
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }).join('')
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent('HTMLEvents')
        evt.initEvent('input', true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener('input', doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener('input', doInputHandler)
    }
}`)]),e("h3",{class:"title"},"限定input只能输入11位手机号码"),e("pre",null,[e("code",null,`const doInputHandler = (e) => {
    const el = e.target
    let eventTag = false
    let val = el.value + ''
    if (val && /\\D/.test(val)) {
        eventTag = true
        val = val.replace(/\\D/g, '')
    }
    if (val.length == 1 && val != '1') {
        el.value = ''
        eventTag = true
    } else if (val.length > 11) {
        el.value = val.slice(0, 11)
        eventTag = true
    }
    if (eventTag) {
        const evt = document.createEvent('HTMLEvents')
        evt.initEvent('input', true, true)
        el.dispatchEvent(evt)
    }
}

export default {
    mounted (el) {
        el.addEventListener('input', doInputHandler)
    },
    beforeUnmount (el) {
        el.removeEventListener('input', doInputHandler)
    }
}`)])],-1)])),_:1})}const c=l(o,[["render",s]]);export{c as default};
