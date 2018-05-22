<style>
    #git-comments-container{
        padding: 0 20px 2px;
        border-top: 10px solid #e0e0e0;
        background: #fff;
    }
    @media screen and (max-width:560px){
        #git-comments-container{
            padding-left: 10px;
            padding-right: 10px;
        }
    }
</style>
<template>
    <div id="git-comments-container"></div>
</template>
<script>
    import Gitment from '@/libs/gitment.browser'
    export default {
        name: 'git-comments',
        mounted () {
            const that = this
            that.$nextTick(() => {
                let gitment = new Gitment({
                    owner: 'bravelin',
                    repo: 'bravelin.github.io',
                    oauth: {
                        client_id: '4f6b659459034ca49ca2',
                        client_secret: '32edded2eaece2226cf18e1f1462d405847594ff'
                    }
                })
                gitment.render('git-comments-container')
            })
        }
    }
</script>
