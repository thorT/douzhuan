<template>
    <transition name="slide">
        <div class="taskincome">
            <Mheader :title="'任务收入'" :shadow="true"></Mheader>

            <Service></Service>
        </div>

    </transition>
</template>

<script type="text/ecmascript-6">
    import Service from "@/components/public/service";
    import Mheader from "@/components/public/mheader";
    import Mbutton from "@/components/public/mbutton";
    import Scroll from '@/components/public/scroll'

    export default {
        components: {
            Service, Mheader, Mbutton, Scroll
        },
        data(){
            return {
            }
        },
        methods: {

        },

    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

    .taskincome
        position fixed
        top 0
        bottom 0
        width 100%
        height 100%
        background $color-background
        z-index 700
        overflow scroll
</style>