/**
 * 时间的格式化
 * */

module.exports = function (timeStr, format) {
    var time = new Date(timeStr)
    format = format || 'yyyy/MM/dd hh:mm:ss'
    var o = {
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        'S': time.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return format
}
