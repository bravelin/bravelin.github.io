<!--APP 顶部当前路径及账户时间信息-->
<style lang="sass">
    @import '../../sass/components/breadCrumb.scss';
</style>
<template>
    <div class="app-bread-crumb">
        <span>当前位置：</span>
        <ol>
            <li v-for="(path, index) in currPath">
                <a @click="doClickPath(path)">{{ path.name }}</a>{{ index != currPath.length-1 ? '&nbsp;/&nbsp;' : '' }}</li>
        </ol>
        <span>当前账户：<a @click="doClickLoginName()">{{ userName }}</a></span>
        <span>{{ currDate }}</span>
    </div>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        name: 'app-bread-crumb',
        data () {
            return {
                currDate: ''
            }
        },
        computed: mapState([
            'currPath', 'userName'
        ]),
        created () {
            let currDate = new Date()
            let month = currDate.getMonth() + 1
            let date = currDate.getDate()
            let weekObj = ['日', '一', '二', '三', '四', '五', '六']
            this.currDate = currDate.getFullYear() + '年' + (month > 9 ? month : '0' + month) + '月' + (date > 9 ? date : '0' + date) + '日 星期' + weekObj[currDate.getDay()]
        },
        methods: {
            doClickPath (path) {
                if (path.code) {
                    this.$router.push({ name: path.code, query: path.query })
                }
            }
        }
    }
</script>    