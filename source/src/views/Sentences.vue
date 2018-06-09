<template>
    <div class="page list-page">
        <Banner></Banner>
        <ul class="article-list">
            <li v-for="item in list" :key="item.id">
                <h4>{{ item.updatedAt | TimeFilter }}</h4>
                <h3>{{ item.content }}</h3>
                <ul class="pics">
                    <li v-for="(pic, picIndex) in item.imgs" @click="doPreview(item.imgs, picIndex)" v-if="pic.src"><img :src="pic.src"/></li>
                </ul>
                <div>出自：{{ item.origin || 'lin' }}</div>
            </li>
        </ul>
        <Preview :is-show.sync="showPreview" :list="previewList" :index="previewIndex"></Preview>
    </div>
</template>
<script>
    import global from '@/libs/global'
    import TimeFilter from '@/filters/time-formatter'

    export default {
        filters: {
            TimeFilter
        },
        data () {
            return {
                list: global.sentenceList,
                previewList: [],
                previewIndex: 0,
                showPreview: false
            }
        },
        methods: {
            doPreview (pics, picIndex) {
                const that = this
                that.previewList = pics
                that.previewIndex = picIndex
                that.showPreview = true
            }
        }
    }
</script>
