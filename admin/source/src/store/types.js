/**
 * 定义vuex store中的mutations和actions名称
 */
const types = {
    GET_USER_INFO: 'GET_USER_INFO',
    GET_WIN_HEIGHT: 'GET_WIN_HEIGHT', // 获取窗口高度
    SET_CURR_ROUTER: 'SET_CURR_ROUTER', // 设置当前路由信息
    GET_MENU_DATA: 'GET_MENU_DATA', // 获取菜单数据
    SWITCH_LOADING: 'SWITCH_LOADING', // 改变loading状态
    SET_APP_TIP: 'SET_APP_TIP', // 设置全局的提示
    SET_USER_INFO: 'SET_USER_INFO',
    CLEAR_USER_INFO: 'CLEAR_USER_INFO', // 清除用户的信息
    SWITCH_MENU_STATUS: 'SWITCH_MENU_STATUS', // 更改菜单状态，点击或者锚点路由
    APPEND_CURR_PATH: 'APPEND_CURR_PATH' // 设置当前页面路径
}
export default types
