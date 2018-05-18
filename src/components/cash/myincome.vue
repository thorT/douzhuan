<template>
    <transition name="slide">
        <div class="taskincome">
            <Mheader :title="title" :shadow="true"></Mheader>
            <Loading v-if="!reqed"></Loading>
            <income :incomeData="incomeData" v-if="reqed&&incomeData.length>0"></income>
            <norecord v-if="reqed&&incomeData.length<=0" :imgSrc="'income.png'" :title="'您还没有任何'+title" :btitle="'去挣钱'"></norecord>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import Mheader from "@/components/public/mheader";
    import norecord from "@/components/public/norecord";
    import income from "@/components/public/income";
    import Scroll from '@/components/public/scroll'
    import Loading from '@/components/public/loading'
    import {getIncome} from '@/common/js/api'

    export default {
        components: {
             Mheader, Scroll, norecord, income,Loading
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
           this.type=this.$route.query.type
           this.title= this.typeArr[this.type].name;
           let _self=this;
           let timer1 = setTimeout(function () {
               _self.$nextTick(function () {
                   _self.reqed=true;
                    getIncome(this.type).then((res)=> {
                        _self.incomeData = res;
                    })
               });
           }, 500);
       }

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