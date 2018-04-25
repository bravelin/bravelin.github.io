export default function (num) {
    if (num < 1024) {
        return num + 'B'
    } else {
        let k = num / 1024
        if (k < 1024) {
            return k.toFixed(1) + 'K'
        } else {
            let m = k / 1024
            return m.toFixed(2) + 'M'
        }
    }
}
