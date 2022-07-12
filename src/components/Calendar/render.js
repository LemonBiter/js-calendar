import { creatWeekDaysNode, createDateNode } from './creator'
export function render(container) {

    const oTHead = document.createElement('thead')
    const oTBody = document.createElement('tbody')
    
    oTHead.className = 'my-calendar-head'
    oTBody.className = 'my-calendar-body'
    const weekDayNode = creatWeekDaysNode()
    
    return function (year, month) {
        const dateTrs = createDateNode(year, month)
        dateTrs.forEach(item => {
            oTBody.appendChild(item)
        })
        oTHead.appendChild(weekDayNode)
        container.appendChild(oTHead)
        container.appendChild(oTBody)
        return container
    }
}

export function update(year, month) {
    const oTBody = document.querySelector('.my-calendar-body')
    const dateTrs = createDateNode(year, month)
    oTBody.innerHTML = ''
    dateTrs.forEach(tr => {
        oTBody.appendChild(tr)
    })

}