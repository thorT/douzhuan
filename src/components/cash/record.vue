<template>
    <transition name="slide">
        <div class="cashrecord">
            <Mheader :title="'提现记录'" :shadow="true"></Mheader>
            <section v-for="year in records">
                <h1>{{year.year}}年</h1>
                <ul>
                    <li v-for="item in year.data">
                        <div class="date">
                            <h3>{{item.date}}</h3>
                            <h4>{{item.hour}}</h4>
                        </div>
                        <span>
                            <span class="headerline"><div></div></span>
                            <i class="circle"><i></i></i>
                            <span class="footerline"><div></div></span>
                        </span>
                        <div class="price">
                            <i class="con-ret icon iconfont">&#xe618;</i>
                            <div class="con">
                                <p><span>-{{item.price}}¥</span><i>余额提现</i></p>
                                <h5 :class="item.status==1?'gray':'blue'">{{statsuArr[item.status]}}</h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
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
                statsuArr:{
                    '1':'已提现',
                    '-1':'提现中',
                },
                records: [
                    {
                        time: '2015-03-28 10:20:56',
                        price: '100.00',
                        status: 1
                    },
                    {
                        time: '2018-05-02 10:20:45',
                        price: '100.00',
                        status: -1
                    },
                    {
                        time: '2018-04-12 23:20:32',
                        price: '100.00',
                        status: -1
                    },

                    {
                        time: '2017-05-02 10:20:45',
                        price: '100.00',
                        status: 1
                    },
                    {
                        time: '2017-04-12 23:20:32',
                        price: '100.00',
                        status: 1
                    },
                    {
                        time: '2017-03-28 10:20:56',
                        price: '100.00',
                        status: -1
                    },


                ]
            }
        },
        methods: {
            FormatRecord(records){
                let res = [];
                records.forEach(function (value) {
                    let haskey = false;
                    let time = new Date(value.time.replace(/-/g,'/'))
                    let myear = time.getFullYear();
                    let arr = value.time.split(" ");
                    //如果数组里面有这个年份
                    for (var key in res) {
                        if (res[key]['year'] == myear) {
                            haskey = true;
                            res[key]['data'].push({date: arr[0].slice(5), hour: arr[1], price: value.price, status: value.status});
                            break;
                        }
                    }
                    if (!haskey) {
                        res.push({year: myear, data: [{date: arr[0].slice(5), hour: arr[1], price: value.price, status: value.status}]})
                    }

                });
               console.log(res);
                return res;
            }
        },
        mounted(){
            this.records=this.FormatRecord(this.records);
        }
    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

    .cashrecord
        position fixed
        top 0
        bottom 0
        width 100%
        height 100%
        background $color-background
        z-index 700
        overflow scroll
        section  + section
            margin-top 10px
        section
            background $color-background-content
            h1
                text-align left
                color $color-text-gray
                font-size $font-size-small
                height 30px
                line-height 30px
                text-indent 10px
            ul
                width 95%;
                margin 0 auto
                li
                    font-size 0
                    height 78px
                    div.date
                        display inline-block
                        width 20%
                        height 100%
                        float left
                        text-align right

                        h3
                            font-size $font-size-medium-x
                            line-height 20px
                            margin-top 10px

                        h4
                            font-size $font-size-medium
                            color $color-text-gray
                            line-height 20px
                    span
                        display inline-block
                        width 10%
                        height 100%
                        float left
                        span.footerline
                              div
                                 border-right 1px solid #E4E4E4;
                        span
                            width 100%
                            div
                                width 1px
                                height 100%
                                margin 0 auto
                        i
                            display inline-block
                            width 13px
                            height 13px
                            background: #FFE2DA;
                            border-radius 6.5px
                            line-height 13px
                            text-align center
                            i
                                width 7px
                                height 7px
                                background #FD7049
                                border-radius 3.5px
                                display inline-block
                                vertical-align middle
                        span:first-child
                            height: 15px
                        span:last-child
                            height: 49px
                    div.price
                        display inline-block
                        width 70%
                        height 100%
                        position relative
                        padding-left 8px
                        box-sizing border-box
                        .con
                            width: 100%;
                            height: 64px;
                            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
                            border-radius: 5px;
                            background $color-background-content
                            p
                                height 40px
                                width 90%
                                margin 0 auto
                                line-height 40px
                                span
                                    font-size $font-size-large-x
                                    color #FD7049
                                i
                                    font-size $font-size-small
                                    float right
                                    font-style normal
                                    color $color-text-gray
                            h5
                                font-size $font-size-small
                                width 90%
                                margin 0 auto
                                text-align left
                            h5.blue
                                color #1B7BEC
                        .con-ret
                            position: absolute;
                            display inline-block
                            left: -7px;
                            top: 10px;
                            color white
                            font-size 25px
                            text-shadow: -2px 0px 3px rgba(0, 0, 0, 0.13);
                li + li
                    span.headerline div
                        border-right 1px solid #E4E4E4;
                li:last-child
                    .footerline div
                        border-right 0;
</style>