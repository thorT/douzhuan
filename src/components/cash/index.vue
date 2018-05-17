<template>
    <transition name="slide">
    <div id="cashindex">
        <Mheader :title="'提现'" :bgColor="'theme'" :titleColor="'white'"></Mheader>
        <div class="container">
            <Scroll ref="scroll" id="cashScroll">
                <div>
                    <div class="userAccount colorbg">
                        <h3>可提现</h3>
                        <h2>¥1000.00</h2>
                    </div>
                    <div class="accoutDtl">
                        <div class="real">
                            <div class="realcon">
                                <section>
                                    <h4>总收入(元)</h4>
                                    <h2>0.00</h2>
                                </section>
                                <section>
                                    <h4>已提现(元)</h4>
                                    <h2>1000.00</h2>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Mli>
                        <ul v-for="item in items">

                            <li v-for="sonitem in item" @click="goto(sonitem.topath)">
                                <span class="linaicon" :class="sonitem.mclass"><i class="icon iconfont left" v-html="sonitem.icon"></i></span>
                                <p>{{sonitem.name}}</p>
                                <span class="right"><i class="icon iconfont">&#xe608;</i></span>
                            </li>
                        </ul>
                    </Mli>
                    <Mbutton :title="'申请提现'" @buttonAction="goto('/cash/apply')" class="mtop"></Mbutton>
                    <div class="clearbottom"></div>
                </div>
            </Scroll>

        </div>

        <Service></Service>
        <router-view></router-view>

    </div>
        </transition>
</template>

<script type="text/ecmascript-6">
    import Service from "@/components/public/service";
    import Mheader from "@/components/public/mheader";
    import Mbutton from "@/components/public/mbutton";
    import Mli from "@/components/public/mli";
    import Scroll from '@/components/public/scroll'

    export default {
        components: {
            Service, Mheader, Mli, Mbutton, Scroll
        },
        data(){
            return {
                items: [
                    [{
                        mclass: 'one',
                        icon: '&#xe676;',
                        name: '提现记录',
                        topath: '/cash/apply/record'
                    }],
                    [
                        {
                            mclass: 'two',
                            icon: '&#xe651;',
                            name: '任务收入',
                            topath: '/cash/taskincome'
                        },
                        {
                            mclass: 'three',
                            icon: '&#xe600;',
                            name: '好友提成',
                            topath: '/cash/friendplus'
                        },
                        {
                            mclass: 'two',
                            icon: '&#xe60c;',
                            name: '其他收入',
                            topath: '/cash/otherincome'
                        }
                    ]

                ]
            }
        },
        methods: {
            goto(path){
                this.$router.push(path)
            }
        }
    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
    #cashindex
        position fixed
        top 0;
        bottom 0
        height 100%
        width 100%

    .container
        position: fixed
        top: 64px
        bottom 0
        width 100%
        overflow scroll
        #cashScroll
            overflow scroll
            height: 100%
            .accoutDtl
                height 70px
                width 100%
                background $color-background-content
                overflow hidden
                box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.10);


</style>