import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
import fetch from '../utils/fetch'
import { camelCaseToKebab } from '../utils/helper'

Vue.use(Vuex)
const MenuMap = {
}

export default new Vuex.Store({
    state: {
        winHeight: 0, // 当前窗口高度
        winWidth: 0, // 窗口宽度
        currRouter: { // 当前页面路由信息
            from: '',
            to: '',
            query: null,
            instance: null // 路由实例
        },
        leftMenuStatus: true, // 左侧菜单的显示隐藏状态
        loading: false, // loading的状态
        appTip: '', // 全局的提示
        appTipStatus: 'ok', // tipShow状态
        appTipDelay: 1500, // tipShow延迟时间
        activeMenuCode: '',
        activeMenuIndex: -1, // 当前active状态的主菜单索引值
        activeSubMenuIndex: -1, // 当前active状态的子菜单索引值
        menuData: [], // 先从缓存取数据
        pathData: JSON.parse(localStorage.getItem('lin-website-path')) || {}, // 全路径信息
        currPath: [], // 当前路径
        userToken: localStorage.getItem('lin-website-token') || '', // 用户token
        userId: localStorage.getItem('lin-website-userid') || '', // 用户ID
        userName: localStorage.getItem('lin-website-username') || '' // 登录名
    },
    mutations: {
        // 更改loading状态
        [types.SWITCH_LOADING] (state, isShow) {
            state.loading = isShow
        },
        // 更改左侧菜单的显示隐藏状态
        [types.SET_LEFTMENU_STATUS] (state, isShow) {
            state.leftMenuStatus = isShow
        },
        // 设置全局的提示
        [types.SET_APP_TIP] (state, payload) {
            state.appTip = payload.tip
            state.appTipStatus = (payload.status ? 'ok' : 'error')
            state.appTipDelay = payload.delay || 2000
        },
        // 获取窗口高度
        [types.GET_WIN_HEIGHT] (state) {
            state.winHeight = document.documentElement.clientHeight || window.innerHeight
            state.winWidth = document.documentElement.clientWidth || window.innerWidth
        },
        // 登录之后设置用户的信息
        [types.SET_USER_INFO] (state, payload) {
            if (payload.userToken) {
                state.userToken = payload.userToken
                localStorage.setItem('lin-website-token', state.userToken)
            }
            if (payload.userId) {
                state.userId = payload.userId
                localStorage.setItem('lin-website-userid', state.userId)
            }
            if (payload.userName) {
                state.userName = payload.userName
                localStorage.setItem('lin-website-username', state.userName)
            }
        },
        // token失效时清除用户信息
        [types.CLEAR_USER_INFO] (state, payload) {
            state.userToken = ''
            state.userId = ''
            state.userName = ''
            localStorage.removeItem('lin-website-token')
            localStorage.removeItem('lin-website-userid')
            localStorage.removeItem('lin-website-username')
        },
        // 设置当前页面信息
        [types.SET_CURR_ROUTER] (state, payload) {
            let currRouter = state.currRouter
            currRouter.from = payload.from
            currRouter.to = payload.to
            currRouter.query = payload.query
            currRouter.instance = payload.instance
            let pathList = state.pathData[(MenuMap[payload.to] || payload.to)] || []
            let res = []
            pathList.forEach(p => {
                res.push(p)
            })
            state.currPath = res
        },
        // 追加页面路径信息
        [types.APPEND_CURR_PATH] (state, payload) {
            state.currPath.push(...payload)
        },
        // 切换菜单的状态
        [types.SWITCH_MENU_STATUS] (state, payload) {
            let mainMenu
            let subMenu
            let mainMenuIndex = payload.index
            let subMenuIndex = payload.subIndex

            // 查找mainMenuIndex和subMenuIndex
            if (mainMenuIndex == undefined) {
                let i = 0
                let k
                let menu
                let level
                for (; i < state.menuData.length; i++) {
                    menu = state.menuData[i]
                    if (menu.code == payload.code) {
                        level = 1
                        break
                    }
                    if (!menu.children) {
                        continue
                    }
                    for (k = 0; k < menu.children.length; k++) {
                        if (menu.children[k].code == payload.code) {
                            level = 2
                            break
                        }
                    }
                    if (k != menu.children.length) {
                        break
                    }
                }
                if (level) {
                    mainMenuIndex = i
                    if (level == 2) {
                        subMenuIndex = k
                    }
                }
            }

            if (mainMenuIndex != undefined) {
                mainMenu = state.menuData[mainMenuIndex]
                if (subMenuIndex != undefined) {
                    // active状态的二级菜单再次点击，不作处理
                    if (state.activeMenuIndex == mainMenuIndex && state.activeSubMenuIndex == subMenuIndex) {
                        return
                    }
                    subMenu = mainMenu.children[subMenuIndex]
                }

                // 去掉之前active菜单的active状态
                // console.log('last active：', state.activeMenuIndex, state.activeSubMenuIndex)
                if (state.activeMenuIndex >= 0) {
                    let lastMainMenu = state.menuData[state.activeMenuIndex]
                    let lastSubMenu
                    if (lastMainMenu) {
                        if (state.activeSubMenuIndex >= 0) {
                            lastSubMenu = lastMainMenu.children[state.activeSubMenuIndex]
                            lastSubMenu.isActive = false
                        }
                        lastMainMenu.isActive = false
                        state.menuData.splice(state.activeMenuIndex, 1, lastMainMenu)
                    }
                }

                if (subMenu) {
                    subMenu.isActive = true
                    mainMenu.isActive = false
                    mainMenu.isOpened = true
                    state.activeMenuCode = subMenu.code
                } else {
                    mainMenu.isOpened = payload.isOpened
                    mainMenu.isActive = (mainMenu.isRedirect == 'Y' ? true : payload.isOpened)
                    state.activeMenuCode = mainMenu.code
                }
                state.menuData.splice(mainMenuIndex, 1, mainMenu)
                state.activeMenuIndex = mainMenuIndex
                state.activeSubMenuIndex = (subMenuIndex != undefined ? subMenuIndex : -1)
            }
        }
    },
    actions: {
        // 获取当前用户信息
        [types.GET_USER_INFO] (context) {
            fetch({
                url: 'https://d.apicloud.com/mcm/api/user/{userId}',
                params: {
                    userId: context.state.userId
                }
            }).then(res => {
                if (res.id) {
                    context.commit(types.SET_USER_INFO, {
                        userName: res.username
                    })
                }
            })
        },
        //  获取菜单数据
        [types.GET_MENU_DATA] (context) {
            fetch({
                url: './static/data/menu.json'
            }).then((res) => {
                let menus = res.respData || []
                let pathData = {}
                menus.forEach(menu => {
                    menu.isOpened = false
                    menu.isActive = false
                    menu.key = camelCaseToKebab(menu.code)
                    pathData[menu.code] = [{name: menu.name, code: menu.code}]

                    if (menu.children) {
                        menu.children.forEach(subMenu => {
                            subMenu.isActive = false
                            subMenu.key = camelCaseToKebab(subMenu.code)
                            pathData[subMenu.code] = [{name: menu.name, code: menu.code, query: {}}, {name: subMenu.name, code: subMenu.code, query: {}}]
                        })
                    }
                })
                localStorage.setItem('lin-website-menu', JSON.stringify(menus))
                localStorage.setItem('lin-website-path', JSON.stringify(pathData))
                context.state.menuData = menus
                context.state.pathData = pathData
            }, (error) => {
                console.log('error........', error)
            })
        }
    }
})
