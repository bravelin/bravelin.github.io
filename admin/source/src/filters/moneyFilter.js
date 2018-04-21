export default function (num) {
    if (isNaN(num)) {
        num = 0
    }
    return (num / 100).toFixed(2)
}
