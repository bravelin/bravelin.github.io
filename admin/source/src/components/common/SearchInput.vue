<style lang="sass">
    @import '../../sass/components/searchInput.scss'
</style>
<template>
    <div class="search-input">
        <div class="input-box" :class="{'focus': isFocus}" :style="{width: input_width}">
            <i class="icon-search"></i>
            <input @focus="isFocus = true" @blur="isFocus = false" type="text" maxlength="50" v-model="inputText"
                   :placeholder="placeholderText" @keyup.enter="doSearch" @input="doInput"/>
            <i class="icon-close-fill" @click="doClear()" v-show="inputText"></i>
        </div>
        <button class="search" @click="doSearch" v-if="searchBtn">搜索</button>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'searchInput',
        data () {
            return {
                inputText: '',
                isFocus: false
            }
        },
        props: {
            width: {
                type: [String, Number],
                default: '300px'
            },
            searchKey: {
                type: String,
                default: ''
            },
            placeholderText: {
                type: String,
                default: '请输入搜索关键词'
            },
            searchBtn: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            input_width () {
                let w = this.width
                return typeof w === 'number' ? `${w}px` : w
            }
        },
        created () {
            let that = this
            that.inputText = that.searchKey
        },
        methods: {
            doSearch () {
                let that = this
                that.$emit('submit', that.inputText)
            },
            doInput () {
                let that = this
                that.$emit('update:searchKey', that.inputText)
            },
            doClear () {
                let that = this
                that.inputText = ''
                if (that.searchBtn === false) return false
                that.$emit('update:searchKey', '')
                that.$emit('submit', '')
            }
        }
    }
</script>
