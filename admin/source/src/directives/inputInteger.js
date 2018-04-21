// 限定只能输入数字的指令
export default {
    bind (el) {
        el.addEventListener('input', () => {
            let val = el.value
            if (/\D/.test(val)) {
                val = val.replace(/\D/g, '')
            }
            el.value = val
        })
    }
}
