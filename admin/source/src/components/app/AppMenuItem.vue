<!--APP菜单项-->
<template>
    <div :class=" 'app-menu-item' + (level == 1 ? ' icon-' + itemData.key+'-menu main-menu' : ' sub-menu') + (itemData.isActive ? ' active' : '') " @click="doClickMenu()">
        <span>{{ itemData.name }}</span>
        <div v-if="level==1" @click="doClickStateTag($event)">
            <i  :class="arrowClass"></i>
        </div>
    </div>
</template>
<script>
    import storeTypes from '../../store/types'

    export default {
        name: 'app-menu-item',
        computed: {
            arrowClass () { // 第一层级菜单右侧箭头样式
                let that = this
                let itemData = that.itemData
                let type = ''
                if (that.level == 1) {
                    if (!itemData.children) {
                        type = 'right'
                    } else if (itemData.isOpened) {
                        type = 'up'
                    } else {
                        type = 'down'
                    }
                    return 'icon-arrow arrow-' + type
                }
                return ''
            }
        },
        props: {
            itemData: { // 数据
                type: Object
            },
            level: { // 层级
                type: Number
            },
            index: { // 主菜单索引
                type: Number
            },
            subIndex: { // 二级菜单索引
                type: Number
            }
        },
        methods: {
            /**
             * 点击菜单的处理
             */
            doClickMenu () {
                let that = this
                let itemData = that.itemData
                that.$store.commit({
                    type: storeTypes.SWITCH_MENU_STATUS,
                    key: itemData.key,
                    index: that.index,
                    subIndex: that.subIndex,
                    isOpened: (that.level == 1 && itemData.children && itemData.isRedirect != 'Y') ? !itemData.isOpened : true
                })
                if (that.level != 1 || itemData.isRedirect == 'Y') {
                    that.$router.push({name: itemData.code})
                }
            },
            /**
             * 点击一级菜单的右侧箭头
             */
            doClickStateTag (e) {
                let that = this
                let itemData = that.itemData
                if (that.level == 1 && itemData.isRedirect == 'Y') {
                    e.stopPropagation()
                    console.log({
                        type: storeTypes.SWITCH_MENU_STATUS,
                        key: itemData.key,
                        index: that.index,
                        subIndex: that.subIndex,
                        isOpened: !itemData.isOpened
                    })
                    that.$store.commit({
                        type: storeTypes.SWITCH_MENU_STATUS,
                        key: itemData.key,
                        index: that.index,
                        subIndex: that.subIndex,
                        isOpened: !itemData.isOpened
                    })
                }
            }
        }
    }
</script>
