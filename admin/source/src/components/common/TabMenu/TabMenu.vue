<!--TabMenu组件-->
<style lang="sass">
    @import '../../../sass/components/tabMenu.scss';
</style>
<template>
    <div class="tab-menus">
        <slot></slot>
        <TabMenuItem v-for="(item, index) in list" :text="item.label" :is-active="item.id == activeId" :key="item.id" :menu-index="index" @switch="doSwitch"></TabMenuItem>
    </div>
</template>

<script>
    import TabMenuItem from './TabMenuItem'

    export default {
        name: 'tabMenu',
        components: {
            TabMenuItem
        },
        props: {
            activeId: {
                type: [String, Number],
                default: ''
            },
            list: {
                type: Array,
                default: [],
                require: true
            }
        },
        methods: {
            doSwitch (e) {
                let that = this
                that.$emit('switch', that.list[e].id)
            }
        }
    }
</script>
