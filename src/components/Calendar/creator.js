import { WEEK_DAYS } from "./config"
import { getLastMonthRestDays, 
    getNextMonthRestDays, 
    getMonthDayCount, 
    getDateInfo,
    getFormatDate
 } from './utils'

export function creatWeekDaysNode() {
    const oTr = document.createElement('tr')
    oTr.className = 'week-day'    
    oTr.innerHTML = WEEK_DAYS.map(item => `<th>${ item }</th>`).join('')
    return oTr
}

export function createDateNode(year, month) {
    const lastMonthRestDays = getLastMonthRestDays(year, month)
    const currentMonthDayCount = getMonthDayCount(year, month)
    const nextMonthDayCount = getNextMonthRestDays(year, month)
    const dateTrArr = createDateTrs(6)

    const lastMonthRestDaysTd =  createRestDaysTD(lastMonthRestDays)
    const currentMonthDaysTd = createCurrentDaysTD(currentMonthDayCount, year, month)
    const nextMonthRestDaysTd =  createRestDaysTD(nextMonthDayCount)
    const tdArr = [
        ...lastMonthRestDaysTd,
        ...currentMonthDaysTd,
        ...nextMonthRestDaysTd
    ]
    
    let index = 0
    dateTrArr.forEach(tr => {
        for (let i = 0; i < 7; i++) {
            tr.appendChild(tdArr[index])
            index ++
        }
   })
    return dateTrArr
}

function createDateTrs(count) {
    const trArr = []
    for (let i = 0; i < count; i++) {
        const oTr = document.createElement('tr')
        trArr.push(oTr)
    }

    return trArr
}

function createRestDaysTD(restDays) {
    return restDays.map(item => {
        const oTd = document.createElement('td')
        oTd.className = 'day rest-day'
        oTd.innerText = item
        return oTd
    }) 
}

function createCurrentDaysTD(dayNum, year, month) {
    const oTdArr = []
    const [
        currentYear,
        currentMonth,
        currentDate
    ] = getDateInfo()

    for (let i = 1; i <= dayNum; i++) {
        const isToday = (currentYear === year && currentMonth === month && currentDate === i)
        const oTd = document.createElement('td')
        oTd.className =  'day current-day' + (isToday ? ' current' : '')
        oTd.setAttribute('data-date', getFormatDate(year, month, i))
        oTd.innerText = i
        oTdArr.push(oTd)
    }
    return oTdArr
}