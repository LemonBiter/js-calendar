import { getDateInfo } from './utils'
import { render, update } from './render'
import event from './event'
import './index.scss'
export default (handler) => {

    const oContainer = document.createElement('table')
    oContainer.className = 'my-calendar'
 
    event(oContainer, handler)
    return {
        render: render(oContainer), 
        update,
        getDateInfo
    }
}