<template>
    <div class="page home-page">
        <banner></banner>
        <ul class="article-list">
            <li v-for="item in list" :key="item.id">
                <h4>{{ item.updatedAt | TimeFilter }}</h4>
                <h3>{{ item.content }}</h3>
                <div v-if="item.origin">出自：{{ item.origin }}</div>
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
