import store from '../store/index'
import types from '../store/types'

// status: info、ok、error
export default function (msg, status = 'info', delay = 2000) {
    store.commit(types.SET_APP_TIP, {
        tip: msg, status: status, delay: delay
    })
}
