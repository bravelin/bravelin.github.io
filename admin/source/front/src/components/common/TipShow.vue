<template>
    <div class="app-tip-show" :class="(isActive ? 'active ' : '') + tipStatus">{{ tipStr }}</div>
</template>

<script>
import storeTypes from '../../store/types'
export default {
    name: 'tip-show',
    data () {
        return {
            isActive: false
        }
    },
    computed: {
        tipStr () {
            let that = this
            let store = that.$store
            let tip = store.state.appTip
            if (tip && !that.isActive) {
                that.isActive = true
                setTimeout(() => {
                    that.isActive = false
                    store.commit(storeTypes.SET_APP_TIP, {
                        tip: '', status: true
                    })
                }, store.state.appTipDelay)
            }
            return tip
        },
        tipStatus () {
            return this.$store.state.appTipStatus
        }
    }
}
</script>
