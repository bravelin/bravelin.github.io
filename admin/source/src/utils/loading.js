import store from '../store/index'
import types from '../store/types'

// 更改loading的状态
export default function (isShow = true) {
    store.commit(types.SWITCH_LOADING, isShow)
}
