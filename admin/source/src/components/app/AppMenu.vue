<!--APP左侧菜单-->
<style lang="sass">
    @import '../../sass/components/menu.scss';
</style>
<template>
    <ul class="app-menu">
        <li v-for="(menu, i) in menuData" :key="menu.id" :class="{ opened: menu.isOpened }" v-show="menu.code != 'home' || role == 'super-admin'">
            <AppMenuItem :item-data="menu" :level="1" :index="i"></AppMenuItem>
            <ul v-if="menu.children" :data-open="menu.isOpened" :data-h="45* menu.children.length" :style="{ height: (menu.isOpened ? 45* menu.children.length : 0) + 'px'}">
                <li v-for="(subMenu, k) in menu.children">
                    <AppMenuItem :item-data="subMenu" :level="2" :index="i" :sub-index="k"></AppMenuItem>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
    import AppMenuItem from './AppMenuItem'

    export default {
        name: 'app-menu',
        components: {
            AppMenuItem
        },
        computed: {
            menuData () {
                return this.$store.state.menuData
            },
            role () {
                return this.$store.state.role
            }
        }
    }
</script>
