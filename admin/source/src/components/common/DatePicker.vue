<style lang="sass">
    @import '../../sass/components/datePicker.scss';
</style>
<template>
     <div class="calendar-container">
        <div class="calendar-input-wrap" ref="inputWrap">
            <input type="text" ref="input" @focus="focus" @blur="blur" readonly  :disabled="disabled" :placeholder="placeholder" :class="'calendar-input-'+name"/>
            <button @click="toggle" class="icon-calendar" ref="inputIcon"></button>
        </div>
        <div class="calendar-wrap" ref="calendarWrap" tabindex="0">
            <div class="calendar-menu" v-if="menu">
                <p class="select-day" :class="{ active: dayType == 'day' }">日</p>
                <p class="select-week" :class="{ active: dayType == 'week' }">周</p>
                <p class="select-months" :class="{ active: dayType == 'months' }">月</p>
                <p class="select-custom" :class="{ active: dayType == 'custom' }">自定义</p>
                <p class="select-all" :class="{ active: dayType == 'all' }">全部</p>
            </div>
            <div class='calendar-menu' v-else>
                <h6 class='title'>选择日期</h6>
            </div>
            <div class="calendar-content" ref="content" :class="{ disabled: dayType=='all' }">
                <div class='calendar-box' data-index="0" ref="box1">
                    <div class='calendar-header'>
                        <div class='calendar-prev'><i class='icon-arrow-left'></i></div>
                        <div class='calendar-caption'></div>
                        <div class='calendar-next'><i class='icon-arrow-right'></i></div>
                    </div>
                    <div class='calendar-days'></div>
                    <div class='calendar-months'></div>
                    <div class='calendar-years'></div>
                </div>
                <div class='calendar-time' v-show="time">
                    <div class='begin-time'>
                        <p>开始时间</p>
                        <div class='time'>
                            <input class='inputHour' type='text' placeholder='00' @input="doInputHour('start')" v-model="startHour"/>
                            <span>:</span>
                            <input class='inputMinutes' type='text' placeholder='00' @input="doInputMinutes('start')" v-model="startMinutes"/>
                        </div>
                    </div>
                </div>
                <div class='calendar-box' v-show="mode=='range'" data-index="1" ref="box2">
                    <div class='calendar-header'>
                        <div class='calendar-prev'><i class='icon-arrow-left'></i></div>
                        <div class='calendar-caption'></div>
                        <div class='calendar-next'><i class='icon-arrow-right'></i></div>
                    </div>
                    <div class='calendar-days'></div>
                    <div class='calendar-months'></div>
                    <div class='calendar-years'></div>
                </div>
                <div class='calendar-time' v-show="mode=='range' && time">
                    <div class='end-time'>
                        <p>结束时间</p>
                        <div class='time'>
                            <input class='inputHour' type='text' placeholder='00' @input="doInputHour('end')" v-model="endHour"/>
                            <span>:</span>
                            <input class='inputMinutes' type='text' placeholder='00' @input="doInputMinutes('end')" v-model="endMinutes"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calendar-buttons">
                <p class="tip"></p>
                 <div class="calendar-button-cancel">取消</div>
                <div class="calendar-button-save">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    // 默认的配置项
    var Showed = 0
    const PluginName = 'date-picker'
    const DefaultOptions = {
        theme: 'default',
        firstDayOfWeek: 0, // 0---6 === sunday---saturday
        mode: 'single', // single|range
        time: false, // 是否精确到时&分
        interval: '', // 默认统计时间节点
        dayType: 'day', // 默认时间模式day|week|months|custom|all
        calendars: 1,
        date: 'today', // today|Date (yyyy-mm-dd)
        rangeSeparator: ' 至 ',
        placeholder: '所有',
        tip: '', // 默认tip
        alwaysShow: false, // true or false
        onceClick: true, // true or false
        position: 'bottom',
        menu: true,
        direction: 'row', // row or column
        min: null, // min: '2012-12-1',//null|'today'|days|Date with (yyyy-mm-dd)
        max: null, // max: '2013-10-1',//null|'today'|days|Date with (yyyy-mm-dd)
        selectableDate: [], // ['2013-8-1', {from: '2013-8-5', to: '2013-8-10'}, {from: -30, to: 30}]],
        selectableYear: [], // [{from: 1980, to: 1985}, 1988, {from: 2000, to: 2010}, 2013],
        selectableMonth: [], // months from 0 - 11 (jan to dec) example: [0, {from: 3, to: 9}, 11],
        selectableDay: [], // days from 0 - 31,
        selectableDayOfWeek: [], // days of week 0-6 (su to sa) [0, {from: 2, to: 4}] , [] is default all
        views: ['days'], // ['days'], ['days', 'months', 'years']
        outputFormat: 'yyyy/mm/dd',
        printDate: [],
        namespace: 'calendar',
        onInit: null,
        onReady: null,
        onRender: null,
        onChange: null,
        onBeforeShow: null,
        onShow: null,
        onBeforeHide: null,
        onHide: null
    }
    const DefaultLabel = {
        days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        daysShort: ['日', '一', '二', '三', '四', '五', '六', '日'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        buttons: ['取消', '保存']
    }

    export default {
        name: 'datePicker',
        data () {
            return {
                menu: true, // 是否有菜单
                mode: 'single',
                time: false, // 是否需要时分秒
                startHour: '',
                startMinutes: '',
                endHour: '',
                endMinutes: '',
                dayType: '',
                options: {},
                placeholder: '',
                name: ''
            }
        },
        updated () {
            // let that = this
            // console.log('update props：', that.config)
        },
        props: {
            config: {
                type: Object
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            let that = this
            that.options = { ...DefaultOptions, ...that.config }
            // console.log('merge options：', that.options)
            that.$nextTick(() => {
                that.init()
            })
        },
        methods: {
            click (e) {
                let that = this
                let target = e.target
                let options = that.options
                let namespace = that.namespace
                let printDate = that.printDate
                let refs = that.$refs
                let targetClass = target.className
                if (target != refs.inputIcon && !refs.calendarWrap.contains(target) && target != refs.input && options.alwaysShow === false) {
                    that.hide()
                } else if (!refs.input.contains(target) && refs.calendarWrap.contains(target)) {
                    let tagName = target.tagName.toLowerCase()
                    let targetDiv = tagName == 'div' ? target : target.parentNode
                    let targetSpan = tagName == 'span' ? target : null
                    let targetMenu = tagName == 'p' ? target : null

                    // 点击的是menu
                    if (targetMenu) {
                        switch (targetMenu.innerHTML) {
                        case '日':
                            that.changeMode('day')
                            break
                        case '周':
                            that.changeMode('week')
                            break
                        case '月':
                            that.changeMode('months')
                            that.changeView('caption', 0)
                            that.manageViews(0)
                            break
                        case '自定义':
                            that.changeMode('custom')
                            break
                        case '全部':
                            that.dayType = 'all'
                            refs.input.value = ''
                            refs.input.setAttribute('placeholder', options.placeholder)
                            that.trigger('commit', { data: null })
                            that.hide()
                            return false
                        }
                    }

                    // 点击的header，切换上一个、下一个时间view
                    if (targetDiv.parentNode.classList.contains(namespace + '-header')) {
                        if (that.dayType == 'all') {
                            return
                        }
                        let i = targetDiv.parentNode.parentNode.dataset.index - 0
                        switch (targetDiv.className) {
                        case namespace + '-caption':
                            that.changeView('caption', i)
                            that.manageViews(i)
                            break
                        case namespace + '-prev':
                            that.prev(i)
                            break
                        case namespace + '-next':
                            that.next(i)
                            break
                        }
                    }

                    // 点击的是时间项
                    if (targetSpan) {
                        if (that.dayType == 'all') {
                            return
                        }
                        let j = (refs.box1.contains(targetSpan) ? 0 : 1)
                        if (!targetSpan.classList.contains(namespace + 'otherMonth') && !targetSpan.classList.contains(namespace + 'untouchable') && !targetSpan.parentNode.classList.contains(namespace + '-head')) {
                            switch (that.dayType) {
                            case 'custom':
                                that.changeValue(targetSpan, j)
                                that.changeView('content', j)
                                that.updateDate(j)
                                break
                            case 'months':
                                that.changeValue(targetSpan, j)
                                that.changeView('months', j)
                                that.updateDate(j)
                                break
                            default:
                                that.changeValue(targetSpan, j)
                                that.changeView('content', j)
                                that.updateDate(j)
                            }

                            switch (that.mode) {
                            case 'single':
                                if (that.views[j] === 'day') {
                                    that.selected = true
                                }
                                that.manageViews(j)
                                break
                            case 'range':
                                that.manageViews(0)
                                that.manageViews(1)
                                break
                            }
                            that.setValue()
                        }
                    }

                    if (that.selected === true && options.alwaysShow === false && options.onceClick === true) {
                        that.hide()
                    } else {
                        refs.input.focus()
                    }
                }

                switch (targetClass) {
                case 'calendar-button-save':
                    if (that.time) {
                        let startHH = that.startHour || that.interval[0] || '00'
                        let startMM = that.startMinutes || that.interval[1] || '00'
                        let endHH = that.endHour || that.interval[0] || '00'
                        let endMM = that.endMinutes || that.interval[1] || '00'

                        // 当时间选择的是一天的时候，判断开始时间和结束时间
                        if (printDate[0] === printDate[1]) {
                            if (Number(startHH) > Number(endHH)) {
                                that.showTip('开始时间不能小于结束时间！')
                                return false
                            } else if (Number(startHH) === Number(endHH)) {
                                if (Number(startMM) > Number(endMM)) {
                                    that.showTip('开始时间不能小于结束时间！')
                                    return false
                                }
                            }
                        }
                        let startTime = (startHH.length === 1 ? '0' + startHH : startHH) + ':' + (startMM.length === 1 ? '0' + startMM : startMM) + ':00'
                        let endTime = (endHH.length === 1 ? '0' + endHH : endHH) + ':' + (endMM.length === 1 ? '0' + endMM : endMM) + ':00'

                        if (that.dayType != 'custom') {  // 非自定义模式，结束时间得加一天
                            printDate[0] = printDate[0] + ' ' + startTime
                            printDate[1] = that.adjust(printDate[1], 1) + ' ' + endTime
                        } else {
                            printDate[0] = printDate[0] + ' ' + startTime
                            printDate[1] = printDate[1] + ' ' + endTime
                        }
                        // 输出时间
                        that.trigger('commit', {
                            data: printDate
                        })
                        // 当日期未修改时，需要重置结束时间
                        printDate[0] = printDate[0].substring(0, 10)
                        printDate[1] = that.dayType != 'custom' ? that.adjust(printDate[1].substring(0, 10), -1) : printDate[1].substring(0, 10)
                    } else {
                        if (printDate) {
                            printDate = printDate.map(dateItem => {
                                return dateItem.replace(/\//g, '-')
                            })
                        }
                        that.trigger('commit', {
                            data: printDate
                        })
                    }
                    that.hide()
                    break
                case 'calendar-button-cancel':
                    that.hide()
                    break
                case 'inputHour':
                    target.focus()
                    break
                case 'inputMinutes':
                    target.focus()
                    break
                }
                e.preventDefault()
            },
            judgeLock (index) {
                let that = this
                let prevLock = false
                let nextLock = false
                let current
                let selected
                let date = that.date
                let namespace = that.namespace
                switch (that.mode) {
                case 'range':
                    if (index === 0) {
                        switch (that.views[index]) {
                        case 'days':
                            current = Date.parse(date.currentDate[index])
                            selected = Date.parse(date.selectedMonthDate[1])
                            break
                        case 'months':
                            current = Date.parse(date.currentYearDate[index])
                            selected = Date.parse(date.selectedYearDate[1])
                            break
                        case 'years':
                            current = new Date(date.currentYearDate[index]).setFullYear(date.currentYear[index] + 4)
                            selected = Date.parse(date.selectedYearDate[1])
                            break
                        }
                        nextLock = !that.setPoint('<', nextLock, current, selected)
                    } else {
                        switch (that.views[index]) {
                        case 'days':
                            current = Date.parse(date.currentDate[index])
                            selected = Date.parse(date.selectedMonthDate[0])
                            break
                        case 'months':
                            current = Date.parse(date.currentYearDate[index])
                            selected = Date.parse(date.selectedYearDate[0])
                            break
                        case 'years':
                            current = new Date(date.currentYearDate[index]).setFullYear(date.currentYear[index] - 7)
                            selected = Date.parse(date.selectedYearDate[0])
                            break
                        }
                        prevLock = !that.setPoint('>', prevLock, current, selected)
                    }
                    break
                }
                if (prevLock === true) {
                    that.calendarPrevs[index].classList.add(namespace + '_blocked')
                } else {
                    that.calendarPrevs[index].classList.remove(namespace + '_blocked')
                }

                if (nextLock === true) {
                    that.calendarNexts[index].classList.add(namespace + '_blocked')
                } else {
                    that.calendarNexts[index].classList.remove(namespace + '_blocked')
                }
            },
            judgeSection (currentDate, startDate, endDate) {
                let status = true
                if (currentDate < startDate || currentDate > endDate) {
                    status = false
                }
                return status
            },
            judgeSections (type, currentDate, dateArray, isDay) {
                let that = this
                let status = false
                switch (type) {
                case 'date':
                    if (isDay) {
                        currentDate = Date.parse(currentDate)
                        dateArray.forEach((date, i) => {
                            if (!status) {
                                switch (date.length) {
                                case undefined:
                                    if (currentDate === Date.parse(date)) {
                                        status = true
                                    }
                                    break
                                case 2:
                                    status = that.judgeSection(currentDate, Date.parse(date[0]), Date.parse(date[1]))
                                    break
                                }
                            }
                        })
                    } else {
                        let min = Date.parse(currentDate[0])
                        let max = Date.parse(currentDate[1])
                        dateArray.forEach((date, i) => {
                            if (!status) {
                                switch (date.length) {
                                case undefined:
                                    if (Date.parse(date) >= min && Date.parse(date) <= max) {
                                        status = true
                                    }
                                    break
                                case 2:
                                    status = true
                                    if (max < Date.parse(date[0]) || min > Date.parse(date[1])) {
                                        status = false
                                    }
                                    break
                                }
                            }
                        })
                    }
                    break
                case 'block':
                    dateArray.forEach((date, i) => {
                        if (!status) {
                            switch (date.length) {
                            case undefined:
                                if (currentDate === date) {
                                    status = true
                                }
                                break
                            case 2:
                                status = that.judgeSection(currentDate, date[0], date[1])
                                break
                            }
                        }
                    })
                    break
                case 'dayOfWeek':
                    let curr = currentDate.getDay()
                    dateArray.forEach((date, i) => {
                        if (!status) {
                            switch (date.length) {
                            case undefined:
                                if (curr === date) {
                                    status = true
                                }
                                break
                            case 2:
                                status = that.judgeSection(curr, date[0], date[1])
                                break
                            }
                        }
                    })
                    break
                }
                return status
            },
            judgeStatus (index, view, mode, status, currentDate, selectedDate) {
                let that = this
                let untouch = !that.isSelectable(view, currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
                let active = status[1]
                let inRange = status[2]
                let timeArry = []

                switch (mode) {
                case 'day':
                    active = that.setPoint('=', active, Date.parse(currentDate), Date.parse(selectedDate[index]))
                    break
                case 'week':
                    timeArry = that.formatWeek(that.date.selectedDate[0], true)
                    active = that.setPoint('=', active, Date.parse(currentDate), Date.parse(selectedDate[index]))
                    inRange = that.setSection(inRange, currentDate, timeArry[0], timeArry[1])
                    break
                case 'months':
                    active = that.setPoint('=', active, Date.parse(currentDate), Date.parse(that.date.currentDate[0]))
                    break
                case 'custom':
                    active = that.setPoint('=', active, Date.parse(currentDate), Date.parse(selectedDate[index]))
                    inRange = that.setSection(inRange, currentDate, selectedDate[0], selectedDate[1])
                    if (index === 0) {
                        untouch = that.setPoint('>', untouch, Date.parse(currentDate), Date.parse(selectedDate[1]))
                    } else if (index === 1) {
                        untouch = that.setPoint('<', untouch, Date.parse(currentDate), Date.parse(selectedDate[0]))
                    }
                    break
                }
                status = [untouch, active, inRange]
                return status
            },
            setPoint (type, status, currentDate, selectedDate) {
                let _status = status
                switch (type) {
                case '=':
                    if (currentDate === selectedDate) {
                        _status = true
                    }
                    break
                case '<':
                    if (currentDate < selectedDate) {
                        _status = true
                    }
                    break
                case '>':
                    if (currentDate > selectedDate) {
                        _status = true
                    }
                    break
                }
                return _status
            },
            setSection (status, currentDate, startDate, endDate) {
                let _status = status
                let current = Date.parse(currentDate)
                let start = Date.parse(startDate)
                let end = Date.parse(endDate)
                if (current >= start && current <= end) {
                    _status = true
                }
                return _status
            },
            isSelectable (view, y, m, d) {
                let that = this
                let isSelectable = true
                let options = that.options
                let min = that.parseDate(options.min, that.format)
                let max = that.parseDate(options.max, that.format)

                let selectableDate = that.parseDateArr(options.selectableDate, that.format)
                let selectableYear = that.parseDateSection(options.selectableYear)
                let selectableMonth = that.parseDateSection(options.selectableMonth)
                let selectableDay = that.parseDateSection(options.selectableDay)
                let selectableDayOfWeek = that.parseDateSection(options.selectableDayOfWeek)

                let minDate
                let maxDate
                let curr
                let isDay
                switch (view) {
                case 'years':
                    minDate = new Date(y, 0, 1) // the first day in year
                    maxDate = new Date(y + 1, 0, 0) // the last day in year
                    curr = [minDate, maxDate]
                    isDay = false
                    break
                case 'months':
                    minDate = new Date(y, m, 1) // the first day in month
                    maxDate = new Date(y, m + 1, 0) // the last day in month
                    curr = [minDate, maxDate]
                    isDay = false
                    break
                case 'days':
                    minDate = maxDate = curr = new Date(y, m, d)
                    isDay = true
                    break
                }

                if (min && min > maxDate) {
                    isSelectable = false
                }
                if (max && max < minDate) {
                    isSelectable = false
                }
                if (isSelectable && selectableDate.length > 0) {
                    isSelectable = that.judgeSections('date', curr, selectableDate, isDay)
                }
                if (isSelectable && selectableYear.length > 0) {
                    isSelectable = that.judgeSections('block', y, selectableYear)
                }
                if (view === 'months' || view === 'days') {
                    if (isSelectable && selectableMonth.length > 0) {
                        isSelectable = that.judgeSections('block', m, selectableMonth)
                    }
                }
                if (view === 'days') {
                    if (isSelectable && selectableDay.length > 0) {
                        isSelectable = that.judgeSections('block', d, selectableDay)
                    }
                    if (isSelectable && selectableDayOfWeek.length > 0) {
                        isSelectable = that.judgeSections('dayOfWeek', new Date(y, m, d), selectableDayOfWeek)
                    }
                }
                return isSelectable
            },
            renderStatus (status) {
                let untouch = status[0]
                let active = status[1]
                let inRange = status[2]
                let rangeUntouch = status[3]
                let className = ''
                let namespace = this.namespace
                if (rangeUntouch === true) {
                    className = ' ' + namespace + '_untouchable'
                } else {
                    if (untouch === true) {
                        className = ' ' + namespace + '_untouchable'
                    }
                    if (inRange === true) {
                        className += ' ' + namespace + '_inRange'
                    }
                }
                if (active === true) {
                    className += ' ' + namespace + '_active'
                }
                return className
            },
            changeMode (type) {
                let that = this
                if (type === 'custom') {
                    that.reset({ mode: 'range', dayType: type })
                } else {
                    that.reset({ mode: 'single', dayType: type })
                }
            },
            changeView (type, index) {
                let views = this.views
                let currView = views[index]
                let changeView
                switch (type) {
                case 'caption':
                    if (currView === 'days') {
                        changeView = 'months'
                    } else if (currView === 'months') {
                        changeView = 'years'
                    }
                    break
                case 'content':
                    if (currView === 'years') {
                        changeView = 'months'
                    } else if (currView === 'months') {
                        changeView = 'days'
                    }
                    break
                case 'months':
                    if (currView === 'years') {
                        changeView = 'months'
                    }
                    break
                case 'higher':
                    if (currView === 'days') {
                        changeView = 'months'
                    } else if (currView === 'months') {
                        changeView = 'years'
                    }
                    break
                case 'lower':
                    if (currView === 'years') {
                        changeView = 'months'
                    } else if (currView === 'months') {
                        changeView = 'days'
                    }
                    break
                }
                if (changeView) {
                    views[index] = changeView
                }
            },
            setDate (obj, YTD, date) {
                if (typeof YTD === 'object') {
                    for (let key in YTD) {
                        switch (key) {
                        case 'day':
                            obj.setDate(YTD[key])
                            break
                        case 'month':
                            obj.setMonth(YTD[key])
                            break
                        case 'year':
                            obj.setYear(YTD[key])
                            break
                        }
                    }
                } else {
                    switch (YTD) {
                    case 'day':
                        obj.setDate(date)
                        break
                    case 'month':
                        obj.setMonth(date)
                        break
                    case 'year':
                        obj.setYear(date)
                        break
                    }
                }
            },
            formatDate (date, format) {
                date = new Date(date)
                let val = {
                    d: date.getDate(),
                    m: date.getMonth() + 1,
                    yy: date.getFullYear().toString().substring(2),
                    yyyy: date.getFullYear()
                }
                val.dd = (val.d < 10 ? '0' : '') + val.d
                val.mm = (val.m < 10 ? '0' : '') + val.m
                date = []
                let length = format.parts.length
                for (let i = 0; i < length; i++) {
                    date.push(val[format.parts[i]])
                }
                return date[0] + '-' + date[1] + '-' + date[2]
            },
            formatWeek (date, format) {
                let getVal = {
                    d: date.getDate(),
                    m: date.getMonth() + 1,
                    yyyy: date.getFullYear()
                }
                let start
                let end
                let startM
                let endM
                let startD
                let endD
                let curDate
                let result = []
                curDate = new Date(getVal.yyyy, getVal.m - 1, getVal.d)
                let dateOfWeek = curDate.getDay()
                let dateOfWeekInt = parseInt(dateOfWeek, 10)
                if (dateOfWeekInt === 0) { // 如果是周日
                    dateOfWeekInt = 7
                }
                let dis = 7 - dateOfWeekInt
                let sunDay = getVal.d + dis // 周末
                let monDay = sunDay - 6 // 周一
                let startDate = new Date(getVal.yyyy, getVal.m - 1, monDay)
                let endDate = new Date(getVal.yyyy, getVal.m - 1, sunDay)

                startM = (parseInt(startDate.getMonth()) < 10 ? '0' : '') + parseInt(startDate.getMonth() + 1)
                endM = (parseInt(endDate.getMonth()) < 10 ? '0' : '') + parseInt(endDate.getMonth() + 1)
                startD = (parseInt(startDate.getDate()) < 10 ? '0' : '') + parseInt(startDate.getDate())
                endD = (parseInt(endDate.getDate()) < 10 ? '0' : '') + parseInt(endDate.getDate())

                let startVal = {
                    y: startDate.getFullYear(), m: startM, d: startD
                }
                let endVal = {
                    y: endDate.getFullYear(), m: endM, d: endD
                }

                if (format) {
                    if (startM === '0') {
                        start = startVal.y - 1 + '/' + '12' + '/' + startVal.d
                    } else {
                        start = startVal.y + '/' + startVal.m + '/' + startVal.d
                    }
                    end = endVal.y + '/' + endVal.m + '/' + endVal.d
                    result.push(start)
                    result.push(end)
                    return result
                } else {
                    if (startM === '0') {
                        start = startVal.y - 1 + '-' + '12' + '-' + startVal.d
                    } else {
                        start = startVal.y + '-' + startVal.m + '-' + startVal.d
                    }
                    end = endVal.y + '-' + endVal.m + '-' + endVal.d
                    result.push(start)
                    result.push(end)
                    return result
                }
            },
            formatMonths (date) {
                let result = []
                let startTime = new Date(date.getFullYear(), date.getMonth(), 1)
                let endTime = new Date(date.getFullYear(), date.getMonth() + 1, 0)
                let start = startTime.getFullYear() + '-' + (parseInt(startTime.getMonth() + 1) < 10 ? '0' : '') + parseInt(startTime.getMonth() + 1) + '-' + (startTime.getDate() < 10 ? '0' : '') + startTime.getDate()
                let end = endTime.getFullYear() + '-' + (parseInt(startTime.getMonth() + 1) < 10 ? '0' : '') + parseInt(startTime.getMonth() + 1) + '-' + endTime.getDate()
                result.push(start)
                result.push(end)
                return result
            },
            stringSeparate (str, separator) {
                let re = new RegExp('[.\\' + separator + '\\s].*?')
                let _separator = str.match(re)
                return str.split(_separator)
            },
            parseHtmlString (option, value) {
                let array = []
                let options = DefaultOptions
                let that = this
                if (typeof options[option] === 'object') {
                    let parts = that.stringSeparate(value, ',')
                    let subParts
                    for (let i = 0; i < parts.length; i++) {
                        subParts = that.stringSeparate(parts[i], '>')
                        if (subParts.length > 1) {
                            subParts = { 'from': subParts[0], 'to': subParts[1] }
                        } else {
                            subParts = subParts[0]
                        }
                        array.push(subParts)
                    }
                    return array
                } else {
                    return value
                }
            },
            parseFormat (format) {
                /* eslint-disable*/
                let separator = format.match(/[.\/\-\s].*?/)
                let parts = format.split(/\W+/)
                if (!parts || parts.length === 0) {
                    throw new Error('Invalid date format.')
                }
                return {
                    separator: separator, parts: parts
                }
            },
            parseDate (data, format) {
                if (data !== null) {
                    let date = new Date()
                    let day = date.getDate()
                    switch (typeof (data)) {
                    case 'string':
                        if (data.length < 5) {
                            date.setHours(0, 0, 0, 0)
                            date.setDate(day + Number(data))
                        } else {
                            let parts = data.split(format.separator)
                            let val
                            date.setHours(0, 0, 0, 0)
                            if (parts.length === format.parts.length) {
                                let length = format.parts.length
                                for (let i = 0; i < length; i++) {
                                    val = parseInt(parts[i], 10) || 1
                                    if (val === '1') {
                                        return
                                    }
                                    switch (format.parts[i]) {
                                    case 'dd':
                                    case 'd':
                                        date.setDate(val)
                                        break
                                    case 'mm':
                                    case 'm':
                                        date.setMonth((val - 1), 1)
                                        break
                                    case 'yy':
                                        date.setFullYear(2000 + val)
                                        break
                                    case 'yyyy':
                                        date.setFullYear(val)
                                        break
                                    }
                                }
                            }
                        }
                        break
                    case 'number':
                        date.setHours(0, 0, 0, 0)
                        date.setDate(day + data)
                        break
                    }
                    return date
                } else {
                    return null
                }
            },
            parseDateArr (arr, format) {
                let array = []
                let count = 0
                let that = this
                let from
                let to
                let obj
                for (let i = 0; i < arr.length; i++) {
                    if (typeof (arr[i]) === 'string') {
                        array[count++] = that.parseDate(arr[i], format)
                    } else if (typeof (arr[i]) === 'object') {
                        obj = arr[i]
                        for (let key in obj) {
                            switch (key) {
                            case 'from':
                                from = obj[key]
                                break
                            case 'to':
                                to = obj[key]
                                break
                            }
                        }
                        array[count++] = [that.parseDate(from, format), that.parseDate(to, format)]
                    }
                }
                return array
            },
            parseDateSection (arr) {
                let array = []
                let count = 0
                let from
                let to
                let obj
                for (let i = 0; i < arr.length; i++) {
                    if (typeof (arr[i]) === 'number') {
                        array[count++] = arr[i]
                    } else if (typeof (arr[i]) === 'string') {
                        array[count++] = Number(arr[i])
                    } else if (typeof (arr[i]) === 'object') {
                        obj = arr[i]
                        for (let key in obj) {
                            switch (key) {
                            case 'from':
                                from = Number(obj[key])
                                break
                            case 'to':
                                to = Number(obj[key])
                                break
                            }
                        }
                        array[count++] = [from, to]
                    }
                }
                return array
            },
            updateDate (i) {
                let that = this
                let date = that.date
                let currentDate = date.currentDate
                currentDate[i].setDate(1)
                currentDate[i].setHours(0, 0, 0, 0)
                date.currentDay[i] = currentDate[i].getDate()
                date.currentMonth[i] = currentDate[i].getMonth()
                date.currentYear[i] = currentDate[i].getFullYear()
                date.currentMonthDate[i] = new Date(date.currentYear[i], date.currentMonth[i], 1, 0, 0, 0, 0)
                date.currentYearDate[i] = new Date(date.currentYear[i], 0, 1, 0, 0, 0, 0)
                date.selectedDay[i] = date.selectedDate[i].getDate()
                date.selectedMonth[i] = date.selectedDate[i].getMonth()
                date.selectedYear[i] = date.selectedDate[i].getFullYear()
                date.selectedMonthDate[i] = new Date(date.selectedYear[i], date.selectedMonth[i], 1, 0, 0, 0, 0)
                date.selectedYearDate[i] = new Date(date.selectedYear[i], 0, 1, 0, 0, 0, 0)
            },
            focus () {
                let that = this
                if (that.showed === false) {
                    that.show()
                    if (that.dayType == 'all') {
                        that.dayType = 'custom'
                        that.changeMode('custom')
                    }
                }
            },
            blur () {
                let that = this
                if (that.pickerHide === true) {
                    that.hide()
                    that.pickerHide = false
                }
            },
            toggle () {
                let that = this
                if (that.showed) {
                    that.pickerHide = true
                    that.blur()
                } else {
                    this.focus()
                }
            },
            prevent (e) {
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnvalue = false
                }
            },
            changeValue (target, i) {
                let newVal = ''
                let newDate = ''
                let that = this
                let date = that.date
                switch (that.views[i]) {
                case 'years':
                    newVal = parseInt(target.innerHTML, 10)
                    date.currentDate[i].setYear(newVal)
                    break
                case 'months':
                    newVal = Number(target.className.match(/month\-([0-9]+)/)[1])
                    date.currentDate[i].setMonth(newVal)
                    break
                case 'days':
                    newVal = parseInt(target.innerHTML, 10)
                    newDate = new Date(date.currentYear[i], date.currentMonth[i], newVal, 0, 0, 0, 0)
                    switch (that.options.mode) {
                        case 'single':
                        case 'range':
                            date.selectedDate[i] = newDate
                            break
                    }
                    break
                }
            },
            setValue () {
                let that = this
                let outputFormat = that.outputFormat
                let date = that.date
                let options = that.options
                let input = that.$refs.input
                switch (that.dayType) {
                case 'day':
                    let day = that.formatDate(date.selectedDate[0], outputFormat)
                    that.printDate = [day, day]
                    input.value = day
                    break
                case 'week':
                    that.printDate = that.formatWeek(date.selectedDate[0], true) // yyyy/mm/dd
                    let html = that.formatWeek(date.selectedDate[0], false) // yyyy-mm-dd
                    input.value = html.join(options.rangeSeparator)
                    break
                case 'months':
                    that.printDate = that.formatMonths(date.currentDate[0], outputFormat)
                    input.value = that.printDate.join(options.rangeSeparator)
                    break
                case 'custom':
                    let formatedStart = that.formatDate(date.selectedDate[0], outputFormat)
                    let formatedEnd = that.formatDate(date.selectedDate[1], outputFormat)
                    that.printDate = [formatedStart, formatedEnd]
                    input.value = formatedStart + options.rangeSeparator + formatedEnd
                    break
                case 'all':
                    that.printDate = ''
                    break
                }
                that.trigger('change', that.getDate('yyyy-mm-dd'), options.name, PluginName)
                that.oldValue = input.value
            },
            prev (i) {
                let that = this
                let date = that.date
                let currentDate = date.currentDate[i]
                that.touchflag = false
                switch (that.views[i]) {
                case 'days':
                    currentDate.setMonth(date.currentMonth[i] - 1)
                    break
                case 'months':
                    currentDate.setYear(date.currentYear[i] - 1)
                    break
                case 'years':
                    currentDate.setYear(date.currentYear[i] - 12)
                    break
                }
                that.updateDate(i)
                that.manageViews(i)
            },
            next (i) {
                let that = this
                let date = that.date
                let currentDate = date.currentDate[i]
                that.touchflag = false
                switch (that.views[i]) {
                case 'days':
                    currentDate.setMonth(date.currentMonth[i] + 1)
                    break
                case 'months':
                    currentDate.setYear(date.currentYear[i] + 1)
                    break
                case 'years':
                    currentDate.setYear(date.currentYear[i] + 12)
                    break
                }
                that.updateDate(i)
                that.manageViews(i)
            },
            showTip (type) {
                let that = this
                let tip = that.tip
                tip.innerHTML = type
                tip.style.display = 'block'
                setTimeout(() => {
                    tip.innerHTML = ''
                    tip.style.display = 'none'
                }, 2000)
            },
            dateTransform (fromDate, toDate) {
                toDate.currentDate = []
                toDate.selectedDate = []
                fromDate.currentDate.forEach((v, n) => {
                    toDate.currentDate[n] = new Date(v)
                })
                fromDate.selectedDate.forEach((v, n) => {
                    toDate.selectedDate[n] = new Date(v)
                })
            },
            reset (options) {
                let that = this
                for (let m in that.DefaultOptions) {
                    that.options[m] = that.DefaultOptions[m]
                }
                if (typeof options !== 'undefined') {
                    for (let n in options) {
                        that.options[n] = options[n]
                    }
                }
                // that.removeEvents()
                that.init()
            },
            getDate (format) {
                let that = this
                let date = that.date
                if (format === undefined) {
                    return date.selectedDate
                } else {
                    format = that.parseFormat(format)
                    let formated = []
                    for (let i = 0; i < date.selectedDate.length; i++) {
                        formated[i] = that.formatDate(date.selectedDate[i], format)
                    }
                    return formated
                }
            },
            adjust (day, num) {
                let format = new Date(Date.parse(day) + 24 * 60 * 60 * 1000 * num)
                let format_YY = format.getFullYear()
                let format_MM = (parseInt(format.getMonth() + 1) < 10 ? '0' : '') + parseInt(format.getMonth() + 1)
                let format_DD = (format.getDate() < 10 ? '0' : '') + format.getDate()
                return format_YY + '-' + format_MM + '-' + format_DD
            },
            update (options) {
                let that = this
                if (typeof options !== 'undefined') {
                    for (let m in options) {
                        that.options[m] = options[m]
                    }
                }
                that.removeEvents()
                that.init()
            },
            removeEvents () {
                let that = this
                document.removeEventListener('click', that.doClickDocument)
            },
            hide () {
                let that = this
                let namespace = that.namespace
                that.trigger('beforeHide')
                that.selected = false
                let refs = that.$refs
                refs.inputWrap.classList.remove(namespace + '_active')
                refs.calendarWrap.classList.remove(namespace + '_show')
                that.showed = false
                document.removeEventListener('click', that.doClickDocument)
                refs.calendarWrap.removeEventListener('mousedown', that.doMouseDownPicker)
                refs.input.blur()
                that.trigger('hide')
            },
            doMouseDownPicker (e) {
                this.prevent(e)
            },
            doClickDocument (e) {
                this.click(e)
            },
            show () {
                let that = this
                let namespace = that.namespace
                if (that.showed === false) {
                    that.trigger('beforeShow')
                    let refs = that.$refs
                    refs.inputWrap.classList.add(namespace + '_active')
                    refs.calendarWrap.classList.add(namespace + '_show')
                    that.showed = true
                    document.addEventListener('click', that.doClickDocument)
                    refs.calendarWrap.addEventListener('mousedown', that.doMouseDownPicker)
                }
                that.trigger('show')
            },
            trigger (eventType) {
                let that = this
                let data = arguments.length > 1 ? arguments[1] : null
                that.$emit(eventType, data)
                eventType = eventType.replace(/\b\w+\b/g, word => {
                    return word.substring(0, 1).toUpperCase() + word.substring(1)
                })
                let onFunction = 'on' + eventType
                let method_arguments = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : undefined
                if (typeof that.options[onFunction] === 'function') {
                    that.options[onFunction].apply(that, method_arguments)
                }
            },
            generateDays (index) {
                let that = this
                let date = that.date
                let options = that.options
                let namespace = that.namespace
                let year = date.currentYear[index]
                let month = date.currentMonth[index]
                let day
                let daysInMonth = new Date(year, month + 1, 0).getDate()
                let firstDay = new Date(year, month, 1).getDay()
                let daysInPrevMonth = new Date(year, month, 0).getDate()
                let daysFromPrevMonth = firstDay - options.firstDayOfWeek
                let html = '<div class=\'' + that.namespace + '-head\'>'
                let isUntouch
                let isActive
                let isInRange
                let rangeUntouch
                let content
                let className
                let status = []
                let dateArray = []

                daysFromPrevMonth = daysFromPrevMonth < 0 ? 7 + daysFromPrevMonth : daysFromPrevMonth
                for (let i = 0; i < 7; i++) {
                    let pos = options.firstDayOfWeek + i > 6 ? options.firstDayOfWeek + i - 7 : options.firstDayOfWeek + i
                    html += '<span>' + DefaultLabel.daysShort[pos] + '</span>'
                }
                html += '</div><div class=\'' + namespace + '-body\'><div class=\'' + namespace + '-row\'>'

                for (let j = 0; j < 42; j++) {
                    day = (j - daysFromPrevMonth + 1)
                    isActive = false
                    isInRange = false
                    isUntouch = false
                    rangeUntouch = false
                    status = [isUntouch, isActive, isInRange, rangeUntouch]
                    content = 0
                    className = ''

                    if (j > 0 && j % 7 === 0) {
                        html += '</div><div class=\'' + namespace + '-row\'>'
                    }
                    if (j < daysFromPrevMonth) { // prev month days
                        className = namespace + '_otherMonth'
                        content = (daysInPrevMonth - daysFromPrevMonth + j + 1)
                        dateArray[j] = new Date(year, month - 1, content, 0, 0, 0, 0)
                    } else if (j > (daysInMonth + daysFromPrevMonth - 1)) { // next month days
                        className = namespace + '_otherMonth'
                        content = (day - daysInMonth)
                        dateArray[j] = new Date(year, (month + 1), content, 0, 0, 0, 0)
                    } else { // current month days
                        dateArray[j] = new Date(year, month, day, 0, 0, 0, 0)
                        content = day
                    }
                    status = that.judgeStatus(index, 'days', that.dayType, status, dateArray[j], date.selectedDate)
                    className += that.renderStatus(status)
                    html += '<span class=\'' + className + '\'>' + content + '</span>'
                }
                html += '</div></div>'
                return html
            },
            generateYears (index) {
                let that = this
                let date = that.date
                let namespace = that.namespace
                let year = date.currentYear[index]
                let html = ''
                let className
                let content = 0
                let dateArray = []
                let focus = date.focusDate[index]
                let isActive
                let isInRange
                let isUntouch
                let rangeUntouch
                let status = []

                html += '<div class=\'' + namespace + '-row\'>'
                for (let m = 0; m < 12; m++) {
                    isActive = false
                    isInRange = false
                    isUntouch = false
                    rangeUntouch = false
                    status = [isUntouch, isActive, isInRange, rangeUntouch]
                    className = ''
                    content = year - 7 + m
                    if (m > 0 && m % 3 === 0) {
                        html += '</div><div class=\'' + namespace + '-row\'>'
                    }
                    dateArray[m] = new Date(content, 0, 1, 0, 0, 0, 0)
                    status = that.judgeStatus(index, 'years', that.dayType, status, dateArray[m], date.selectedYearDate)
                    className += that.renderStatus(status)
                    html += '<span class=\'' + className + '\'>' + content + '</span>'
                }
                html += '</div>'
                return html
            },
            generateMonths (index) {
                let that = this
                let date = that.date
                let namespace = that.namespace
                let year = date.currentYear[index]
                let html = ''
                let className
                let content = DefaultLabel.months
                let dateArray = []
                let focus = date.focusDate[index]
                let isActive
                let isInRange
                let isUntouch
                let rangeUntouch
                let status = []

                html += '<div class=\'' + namespace + '-row\'>'
                for (let i = 0; i < 12; i++) {
                    isActive = false
                    isInRange = false
                    isUntouch = false
                    rangeUntouch = false
                    status = [isUntouch, isActive, isInRange, rangeUntouch]
                    className = ''
                    if (i > 0 && i % 3 === 0) {
                        html += '</div><div class=\'' + namespace + '-row\'>'
                    }
                    dateArray[i] = new Date(year, i, 1, 0, 0, 0, 0)
                    status = that.judgeStatus(index, 'months', that.dayType, status, dateArray[i], date.selectedMonthDate)
                    className += that.renderStatus(status)
                    html += '<span class="month-' + i + ' ' + className + '">' + content[i] + '</span>'
                }
                html += '</div>'
                return html
            },
            generateDaypicker (index) {
                let that = this
                let date = that.date
                that.generateHeader(index, DefaultLabel.months[date.currentMonth[index]] + ' ' + date.currentYear[index])
                that.daypickers[index].innerHTML = that.generateDays(index)
            },
            generateMonthpicker (index) {
                let that = this
                that.generateHeader(index, that.date.currentYear[index])
                that.monthpickers[index].innerHTML = that.generateMonths(index)
            },
            generateYearpicker (index) {
                let that = this
                let date = that.date
                that.generateHeader(index, date.currentYear[index] - 7 + ' ' + that.options.rangeSeparator + ' ' + (date.currentYear[index] + 4))
                that.yearpickers[index].innerHTML = that.generateYears(index)
            },
            generateHeader (index, caption) {
                let that = this
                that.calendarCaptions[index].innerHTML = caption
                that.judgeLock(index)
            },
            manageViews (index) {
                let that = this
                let namespace = that.namespace
                let calendar = that.calendars[index]
                let classList = calendar.classList
                switch (that.views[index]) {
                case 'days':
                    that.generateDaypicker(index)
                    classList.add(namespace + '_days')
                    classList.remove(namespace + '_months')
                    classList.remove(namespace + '_years')
                    break
                case 'months':
                    that.generateMonthpicker(index)
                    classList.remove(namespace + '_days')
                    classList.add(namespace + '_months')
                    classList.remove(namespace + '_years')
                    break
                case 'years':
                    that.generateYearpicker(index)
                    classList.remove(namespace + '_days')
                    classList.remove(namespace + '_months')
                    classList.add(namespace + '_years')
                    break
                }
            },
            initDate () {
                let that = this
                let options = that.options
                let date = options.date === 'today' ? new Date() : that.parseDate(options.date, that.format)
                let dateObj = that.date = {}
                dateObj.currentDate = [new Date(date)]
                dateObj.selectedDate = [new Date(date)]
                dateObj.focusDate = [new Date(date)]
                dateObj.currentDay = []
                dateObj.currentMonth = []
                dateObj.currentYear = []
                dateObj.currentMonthDate = []
                dateObj.currentYearDate = []
                dateObj.selectedDay = []
                dateObj.selectedMonth = []
                dateObj.selectedYear = []
                dateObj.selectedMonthDate = []
                dateObj.selectedYearDate = []
                dateObj.cache = {
                    currentDate: [], selectedDate: []
                }
                for (let i = 0; i < that.calendarsNum; i++) {
                    dateObj.currentDate[i] = dateObj.currentDate[i] || new Date(date)
                    dateObj.selectedDate[i] = dateObj.selectedDate[i] || new Date(date)
                    dateObj.selectedDate[i].setHours(0, 0, 0, 0)
                    dateObj.focusDate[i] = dateObj.focusDate[i] || new Date(date)
                    dateObj.focusDate[i].setHours(0, 0, 0, 0)
                    that.updateDate(i)
                }
            },
            initSections () {
                let that = this
                let namespace = that.namespace
                let el = that.$el
                that.calendars = el.querySelectorAll('.' + namespace + '-box')
                that.footer = el.querySelectorAll('.' + namespace + '-buttons')
                that.calendarPrevs = el.querySelectorAll('.' + namespace + '-prev')
                that.calendarCaptions = el.querySelectorAll('.' + namespace + '-caption')
                that.calendarNexts = el.querySelectorAll('.' + namespace + '-next')
                that.daypickers = el.querySelectorAll('.' + namespace + '-days')
                that.monthpickers = el.querySelectorAll('.' + namespace + '-months')
                that.yearpickers = el.querySelectorAll('.' + namespace + '-years')
                that.buttonCancels = el.querySelectorAll('.' + namespace + '-button-cancel')
                that.buttonSaves = el.querySelectorAll('.' + namespace + '-button-save')
            },
            initShowHide (alwaysShow) {
                if (alwaysShow === true) {
                    that.show()
                }
            },
            doInputHour (type) {
                let that = this
                let val = (type == 'start' ? that.startHour : that.endHour)
                if (/\D/.test(val)) {
                    val = val.replace(/\D/g, '')
                }
                if (val.length === 2 && val > 23) {
                    val = val.substring(0, 1)
                }
                if (val.length > 2) {
                    val = val.substring(0, 2)
                }
                if (type == 'start') {
                    that.startHour = val
                } else {
                    that.endHour = val
                }
            },
            doInputMinutes (type) {
                let that = this
                let val = (type == 'start' ? that.startMinutes : that.endMinutes)
                if (/\D/.test(val)) {
                    val = val.replace(/\D/g, '')
                }
                if (val.length === 2 && val > 59) {
                    val = val.substring(0, 1)
                }
                if (val.length > 2) {
                    val = val.substring(0, 2)
                }
                if (type == 'start') {
                    that.startMinutes = val
                } else {
                    that.endMinutes = val
                }
            },
            init () {
                let that = this
                let options = that.options

                that.name = options.name || ''
                that.theme = options.theme
                that.namespace = options.namespace
                that.mode = options.mode
                that.time = options.time
                that.interval = options.interval.split(':')
                that.tip = options.tip
                that.position = options.position
                that.menu = options.menu
                that.placeholder = options.placeholder
                that.dayType = options.dayType
                that.direction = options.direction
                that.format = that.parseFormat('yyyy-mm-dd')
                that.outputFormat = that.parseFormat(options.outputFormat || 'yyyy/mm/dd')
                that.focused = 0
                that.flag = Showed++
                that.pickerHide = false
                that.selected = false
                that.showed = false
                that.bound = false
                that.map = {}
                that.views = []
                that.printDate = []

                if (that.theme == 'select') {
                    that.menu = false
                    that.time = true
                    that.dayType = 'custom'
                    that.direction = 'column'
                } else if (that.theme == 'single') {
                    that.menu = false
                    that.time = false
                    that.dayType = 'day'
                }
                let namespace = that.namespace
                let buttons = DefaultLabel.buttons
                that.mode = (that.dayType === 'custom' ? 'range' : 'single')

                if (that.mode == 'single') {
                    that.calendarsNum = 1
                    that.views[0] = options.views[0] || 'days'
                } else { // range
                    that.calendarsNum = 2
                    this.views[0] = options.views[0] || 'days'
                    this.views[1] = options.views[1] || 'days'
                }
                // 设置初始时间
                if (that.interval) {
                    let interval = that.interval
                    that.startHour = interval[0]
                    that.startMinutes = interval[1]
                    that.endHour = interval[0]
                    that.endMinutes = interval[1]
                }
                that.initSections()
                that.initDate()
                for (let j = 0; j < that.calendarsNum; j++) {
                    that.manageViews(j)
                }
                // init alwaysShow
                that.initShowHide(options.alwaysShow)
                that.setValue()
                that.trigger('ready')
            }
        },
        destroyed () {
            this.removeEvents()
        }
    }
</script>
