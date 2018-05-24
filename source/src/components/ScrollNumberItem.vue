<template>
    <div class="scroll-number-item">
        <ul :style="{ transform: 'translateY(' + (index * -80 + 'px') + ')', 'transition-duration': duration + 's' }">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'ScrollNumberItem',
        data () {
            return {
                duration: 0.3,
                list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
            }
        },
        watch: {
            index (newVal, oldVal) {
                const that = this
                that.duration = (Math.abs(newVal - oldVal) / 3 + 1) * 0.3
            }
        },
        props: {
            index: {
                type: Number,
                default: 0
            }
        }
    }
</script>
