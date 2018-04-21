// utils function

// camelCase 转 kebab-case
export function camelCaseToKebab (str) {
    return str ? str.replace(/([A-Z])/g, '-$1').toLowerCase() : ''
}

// cookie
export function cookie (name, value, expireDay) {
    if (!name) {
        return
    }
    let arr
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (value == null) { // 获取cookie
        arr = document.cookie.match(reg)
        if (arr) {
            return decodeURIComponent(arr[2])
        }
        return null
    } else { // 设置cookie
        if (!expireDay) {
            expireDay = 10
        }
        let exp = new Date()
        exp.setTime(exp.getTime() + expireDay * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString()
    }
}

// clear cookie
export function clearCookie (name) {
    let arr
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let exp = new Date()
    let cVal
    exp.setTime(exp.getTime() - 1)
    arr = document.cookie.match(reg)
    if (arr) {
        cVal = decodeURIComponent(arr[2])
    }
    if (cVal) {
        document.cookie = name + '=' + cVal + ';expires=' + exp.toGMTString()
    }
}

// 获取时间选择控件的值date picker value
export function getDatePickerValue (pickerName, isAppendTime) {
    let el = document.querySelector('input.calendar-input-' + pickerName)
    let res = { start: '', end: '' }
    if (el) {
        let val = el.value
        if (val) {
            let arr = val.split(' 至 ')
            if (arr.length == 1) {
                res.start = val
                res.end = val
            } else {
                res.start = arr[0]
                res.end = arr[1]
            }
            if (res.start.length < 12 && isAppendTime) {
                res.start += ' 00:00:00'
                res.end += ' 23:59:59'
            }
        }
    }
    return res
}

// 获取当前月份的时间范围
export function getCurrMonthDate () {
    let endDate = new Date()
    let startDate = new Date()
    startDate.setDate(1)
    startDate.setHours(0, 0, 0, 0)
    endDate.setDate(1)
    endDate.setHours(0, 0, 0, 0)
    let currMonth = endDate.getMonth()
    if (currMonth == 11) {
        endDate.setFullYear(endDate.getFullYear() + 1)
        endDate.setMonth(0)
    } else {
        endDate.setMonth(currMonth + 1)
    }
    endDate.setTime(endDate.getTime() - 1000)
    endDate.setHours(23, 59, 59, 0)
    return {
        start: formatTime(startDate),
        end: formatTime(endDate)
    }
}

// 设置时间选择组件的值 time: { start: '', end: ''}
export function setDatePickerValue (pickerName, time, isAppendTime) {
    let el = document.querySelector('input.calendar-input-' + pickerName)
    if (el) {
        if (!isAppendTime) {
            time.start = time.start.split(' ')[0]
            time.end = time.end.split(' ')[0]
        }
        el.value = time.start + ' 至 ' + time.end
    }
}

// 时间格式化
export function formatTime (date, format) {
    format || (format = 'yyyy-MM-dd hh:mm:ss')
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return format
}

// 判定时间是否有效
export function isTimeValid (time) {
    if (!time) {
        return false
    }
    let arr = time.split(':')
    if (arr.length != 2) {
        return false
    }
    if ((parseInt(arr[0]) < 24 && parseInt(arr[1]) <= 59) || (parseInt(arr[0]) == 24 && parseInt(arr[1]) == 0)) {
        return true
    }
    return false
}

const DayMap = {
    'Mon': 1, 'Tues': 2, 'Wed': 3, 'Thur': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7
}

export function computedTimeLength (day, time) {
    let dayLength = (DayMap[day] - 1) * 24 * 60
    let timeArr = time.split(':')
    let hourLength = parseInt(timeArr[0]) * 60
    return dayLength + hourLength + parseInt(timeArr[1])
}

export function compareDayTime (obj) {
    let day1 = DayMap[obj.startDay]
    let day2 = DayMap[obj.endDay]
    if (day1 < day2) {
        return true
    } else if (day1 == day2) {
        let startTimes = obj.startTime.split(':')
        let endTimes = obj.endTime.split(':')
        let hour1 = parseInt(startTimes[0])
        let hour2 = parseInt(endTimes[0])
        if (hour1 < hour2) {
            return true
        } else if (hour1 == hour2) {
            let min1 = parseInt(startTimes[1])
            let min2 = parseInt(endTimes[1])
            return min1 <= min2
        } else {
            return false
        }
    } else {
        return false
    }
}

// 获取页面参数，传入参数名返回对应的值，否则返回全部参数
/* eslint-disable */
export function getPageParams (name) {
    let reg = new RegExp('(^|&)?([\da-zA-Z_]+)=([^&\\?#\/\\\\]*)(\\?|#|\/|\\\\|&|$)', 'ig')
    let loc = location
    let strs = [loc.search.substring(1), loc.hash.substring(1)]
    let results = {}
    let tmpExec = ''
    let tmp
    strs.forEach(function (s) {
        tmpExec = reg.exec(s)
        while (tmpExec) {
            tmp = tmpExec[3]
            results[tmpExec[2]] = tmp
            tmpExec = reg.exec(s)
        }
    })
    return name ? (results[name] || '') : results
}
