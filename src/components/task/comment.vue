<template>
    <transition name="slide">
        <div class="limit">
            <Mheader :title="title" :shadow="true"></Mheader>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import Mheader from "@/components/public/mheader";
    import Scroll from '@/components/public/scroll'
    import Loading from '@/components/public/loading'

    export default {
        components: {
            Mheader, Scroll,Loading
        },
        data(){
            return {
                title:'',
                typeArr:{
                    task:{name:'任务收入',type:1},
                    friend:{name:'好友提成',type:2},
                    other:{name:'其他收入',type:3}
                },
                type:1,
                reqed:false,
                incomeData: [1]
            }
        },
        mounted(){

        }

    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

    .limit
        position fixed
        top 0
        bottom 0
        width 100%
        height 100%
        background $color-background
        z-index 800
        overflow scroll
</style>