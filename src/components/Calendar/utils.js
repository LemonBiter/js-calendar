/**
 * 
 * @param {*} year 
 * @param {*} month 
 * @returns 某年某月的第一天是星期几
 */
function getFirstWeekDay(year, month) {
    const date = new Date(year, month - 1, 1)
    return date.getDay()
}

/**
 * 选中下个月的第0天，即是当月的最后一天
 * @param {*} year 
 * @param {*} month 
 * @returns 日历当前页的天数
 */
function getMonthDayCount(year, month) {
    const date = new Date(year, month, 0)
    return date.getDate()
}

/**
 * 
 * @param {*} year 
 * @param {*} month 
 * @returns 显示当前日历页的上月天数
 */
function getLastMonthRestDays(year, month){
    const lastMonthDays = getFirstWeekDay(year, month)
    let lastMonthDay = getMonthDayCount(year, month - 1)
    const restDays = []
    for(let i = 0; i < lastMonthDays; i++) {
        restDays.unshift(lastMonthDay--)
    }
    return restDays
}

/**
 * 
 * @param {*} year 
 * @param {*} month 
 * @returns 显示下个月的天数
 */
function getNextMonthRestDays(year, month) {
    // 获取上个月的剩余天数
    const lastMonthRestLen = getFirstWeekDay(year, month)
    // 获取当前月的剩余天数
    const thisMonthDayCount = getMonthDayCount(year, month)
    // 计算得到下个月的当前页展示天数
    const nextMonthDays = 42 - lastMonthRestLen - thisMonthDayCount
    const nextMonthDayArr = []
    for (let i = 1; i <= nextMonthDays; i ++) {
        nextMonthDayArr.push(i)
    }
    return nextMonthDayArr
}

function getDateInfo(timeStamp) {
    let date = timeStamp ? new Date(timeStamp) : new Date()
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ]
}

function getFormatDate(year, month, date) {
    const dateArr = [ year, month, date ]
    
    for (let i = 1; i < dateArr.length; i++) {
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i])
    }

    return dateArr.join('-')
}

export { getFirstWeekDay, getMonthDayCount,
     getLastMonthRestDays, getNextMonthRestDays,
     getFormatDate, getDateInfo } 