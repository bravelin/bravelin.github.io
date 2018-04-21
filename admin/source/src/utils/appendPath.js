import store from '../store/index'
import types from '../store/types'

//  追加页面路径
export default function (paths) {
    store.commit(types.APPEND_CURR_PATH, paths)
}
