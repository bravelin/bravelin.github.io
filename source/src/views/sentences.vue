<template>
    <div class="page list-page">
        <banner></banner>
        <ul class="article-list">
            <li v-for="item in list" :key="item.id">
                <h4>{{ item.updatedAt | TimeFilter }}</h4>
                <h3>{{ item.content }}</h3>
                <ul class="pics"><li v-for="img in item.imgs"><img :src="img"/></li></ul>
                <div>出自：{{ item.origin || 'lin' }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    import banner from '@/views/banner'
    import global from '@/libs/global'
    import TimeFilter from '@/filters/time-formatter'
    export default {
        components: {
            banner
        },
        filters: {
            TimeFilter
        },
        data () {
            return {
                list: global.sentenceList
            }
        }
    }
</script>
