import MyCalendar from './components/Calendar/index'

;(() => {
    const myCalendar = MyCalendar(handler)
    const oApp = document.querySelector('#app')
    const dateInfo = myCalendar.getDateInfo()
    const oYear = document.querySelector('.year')
    const oMonth = document.querySelector('.month')
    const oYearSpan = oYear.querySelector('span')
    const oMonthSpan = oMonth.querySelector('span')
    const init = () => {
        const temp = [2021, 2, 1]
        render(...dateInfo)
        bindEvent()
    }

    function render(...args) {
        oApp.appendChild(myCalendar.render(...args))
 
    }

    function bindEvent() {
        oYear.addEventListener('click', setYear, false)
        oMonth.addEventListener('click', setMonth, false)
    }

    function setMonth({ target }) {
        const className = target.className
        const currentMonth = Number(oMonthSpan.innerText)
        if (className === 'lt') {
            if(currentMonth === 1) {
                return 
            }
            dateInfo[1] = currentMonth - 1
        } else if (className === 'gt') {
            if(currentMonth === 12) {
                return 
            }
            dateInfo[1] = currentMonth + 1
        }
        oMonthSpan.innerText = dateInfo[1]
        myCalendar.update(...dateInfo)
    }

    function setYear({ target }) {
        const className = target.className
        const currentYear = Number(oYearSpan.innerText)
        if (className === 'lt') {
            dateInfo[0] = currentYear - 1
            dateInfo[1] = 1
        } else if (className === 'gt') {
            dateInfo[0] = currentYear + 1
            dateInfo[1] = 1
        }
        oYearSpan.innerText = dateInfo[0]
        oMonthSpan.innerText = dateInfo[1]
        myCalendar.update(...dateInfo)
    }


    function handler(date) {
        console.log(date)
    }

    init()
})()