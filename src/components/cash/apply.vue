<template>
    <transition name="slide">
        <div class="apply">
            <Mheader :title="'申请提现'" :shadow="true"></Mheader>
            <ul>
                <li class="bigli">
                    <h3>提现到</h3>
                    <p>
                        <span> <i class="icon iconfont">&#xe6b7;</i>支付宝</span>
                    </p>
                </li>
            </ul>
            <ul>
                <li v-for="option in options">
                    <h3>{{option.name}}</h3>
                    <p class="gray">
                        <input type="text" :placeholder="option.content" v-if="option.input">
                        <span v-if="!option.input">{{option.content}}</span>
                    </p>
                </li>
            </ul>
            <p v-for="tip in tips" class="gray" v-html="tip">
            </p>
            <Mbutton :title="'提交'" class="mtop"></Mbutton>
            <Mbutton :title="'查看提现记录'" :bgColor="'white'" :titleColor="'#333333'" @buttonAction="goto('/cash/apply/record')" ></Mbutton>
            <Service></Service>
            <router-view></router-view>
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
                tips:[
                    " · <i class='blue'>支付宝</i>每笔提现均会扣除<i class='blue'>1元手续费</i>",
                    " · 到账时间最快当天，通常为第二天到账",
                    " · <i class='blue'>周末、法定节假日不处理提现</i>（周5-6顺延周1，周7顺延周2）",
                    " · 所以提现均人工审核，审核完成后由系统自动打款",
                    " · 如支付宝账号错误，多设备多账号等作弊行为会导致提现失败"
                ],
                options:[
                    {name:'提现金额',content:'请输入金额',input:true},
                    {name:'可提现金额',content:'500元',input:false},
                    {name:'预计到账时间',content:'周末顺延，预计下周一到账',input:false},
                ]
            }
        },
        methods: {
            goto(path){
                this.$router.push(path)
            }

        },


    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

    .apply
        position fixed
        top 0
        bottom 0
        width 100%
        height 100%
        background $color-background
        z-index 700
        overflow scroll
        ul
          background $color-background-content
          li.bigli
            height $line-height-m
            line-height $line-height-m

          li+li
            border-top 1px solid $color-gap
          li
            width 95%
            margin 0 auto
            height $button-height
            line-height $button-height
            font-size 0
            margin-bottom 10px
            h3
              width 30%
              text-align left
              display inline-block
              float left
              font-size $font-size-medium
            p
              width 70%
              text-align right
              display inline-block
              font-size $font-size-medium
              i
                 color #4CAAE6
                 font-size 35px
                 vertical-align middle
                 margin-right 5px
              input
                 text-align right
                 height 25px
        p
          text-align left
          font-size $font-size-small
          line-height 20px
          text-indent 5px


</style>