// 限定只能输入两位小数的金额
export default {
    bind (el) {
        el.addEventListener('input', () => {
            let val = el.value
            if (val.length == 1) {
                if (/\D/.test(val)) {
                    val = ''
                }
            } else {
                val = val.replace(/[^\d.]/g, '')
                let dotIndex = 0
                val = val.replace(/\./g, function () {
                    if (dotIndex == 0) {
                        dotIndex = arguments[1]
                        return '.'
                    } else {
                        return ''
                    }
                })
                if (dotIndex > 0) {
                    val = val.substring(0, dotIndex + 3)
                }
            }
            if (val) {
                val = val.substr(0, 7)
            }
            el.value = val
        })
    }
}
