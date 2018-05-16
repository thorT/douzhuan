<template>
    <div id="index">
        <header>
            <div class="empty"></div>
            <div class="content">
                <span><i class="icon iconfont">&#xe64d;</i></span>
                <h1>来赚</h1>
            </div>
            <div class="blank"></div>

        </header>
        <main>
            <Scroll ref="scroll" id="indexScroll">
                <div>
                <div class="userAccount">
                    <h3>账户余额</h3>
                    <h2>¥1000.00</h2>
                    <router-link to="/1" class="tocash">
                        <span>提现</span>
                    </router-link>
                </div>
                <div class="accoutDtl">
                    <div class="subemty"></div>
                    <div class="real">
                        <div class="realcon">
                            <section>
                                <h4>今日收入(元)</h4>
                                <h2>0.00</h2>
                            </section>
                            <section>
                                <h4>累计收入(元)</h4>
                                <h2>1000.00</h2>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="option">
                    <ul>
                        <li>
                            <h2 class="six linaicon"><i class="icon iconfont">&#xe610;</i></h2>
                            <h3>限时任务</h3>
                            <h4>收益三分钟内到账</h4>
                        </li>
                        <li>
                            <h2 class="two linaicon"><i class="icon iconfont" style="font-size: 24px">&#xe607;</i></h2>
                            <h3>高额任务</h3>
                            <h4>收益三分钟内到账</h4>
                        </li>
                        <li>
                            <h2 class="three linaicon"><i class="icon iconfont" >&#xe604;</i></h2>
                            <h3>游戏任务</h3>
                            <h4>收益三分钟内到账</h4>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h2 class="two linaicon"><i class="icon iconfont">&#xe605;</i></h2>
                            <h3>评论任务</h3>
                            <h4>收益三分钟内到账</h4>
                        </li>
                        <li>
                            <h2 class="three linaicon"><i class="icon iconfont" >&#xe628;</i></h2>
                            <h3>联盟任务</h3>
                            <h4>收益三分钟内到账</h4>
                        </li>
                        <li>
                            <h2 class="six linaicon"><i class="icon iconfont" >&#xe637;</i></h2>
                            <h3>敬请期待</h3>
                        </li>
                    </ul>
                </div>
                <div class="banner">
                    <img src="@/assets/image/banner@2x.png" @load="loadImage">
                </div>
                <div class="tab">
                    <p>
                    <span class="six">
                  <i class="icon iconfont">&#xe662;</i>
              </span>
                    </p>
                    <section>
                        <h2>天天开奖</h2>
                        <h3>现金每天分</h3>
                    </section>
                    <span class="child">
                   <i class="icon iconfont">&#xe608;</i>
               </span>
                </div>
                <div class="tab">
                    <p>
                    <span class="two">
                  <i class="icon iconfont">&#xe680;</i>
              </span>
                    </p>
                    <section>
                        <h2>新手任务</h2>
                        <h3>新用户专享</h3>
                    </section>
                    <span class="child">
                   <i class="icon iconfont">&#xe608;</i>
               </span>
                </div>
                <div class="tab">
                    <p>
                    <span class="three">
                  <i class="icon iconfont">&#xe60d;</i>
              </span>
                    </p>
                    <section>
                        <h2>收徒任务</h2>
                        <h3>徒弟挣钱你提成</h3>
                    </section>
                    <span class="child">
                   <i class="icon iconfont">&#xe608;</i>
               </span>
                </div>
                    <div class="efooter"></div>
                </div>
            </Scroll>
        </main>

        <Service></Service>
    </div>
</template>

<script type="text/ecmascript-6">
    import Service from  "@/components/public/service";
    import Scroll from '@/components/public/scroll'
    export  default{
        components: {
            Service, Scroll
        },
       methods:{
           loadImage() {
                   this.$refs.scroll.refresh()
           }
       }
    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .empty, .content, .userAccount, .subemty
        background linear-gradient(to right, #FD7049, #FDA86A, #FDA990)

    #index
        width 100%
        height 64px
        position relative
        .blank
            height 64px
        .empty
            height 20px
            width 100%
            position fixed
            z-index: 600
        .content
            height 44px
            width 100%
            position fixed
            top 20px
            z-index: 600
            color $color-background-content
            span
                display inline-block
                position absolute
                height 32px
                width 32px
                left 10px
                line-height 32px
                bottom 6px
                border-radius 16px
                background $color-background-content
                i
                    font-size $font-size-large-x
                    color $color-text
            h1
                height 44px
                line-height 44px

    main
        font-weight normal
        position fixed
        overflow scroll
        width 100%
        bottom 10px
        top 64px
        #indexScroll
            overflow scroll
            height: 100%
            .userAccount
                height 100px
                width 100%
                color $color-background-content
                line-height 36px
                position relative
                h3
                    font-size $font-size-small
                    height 36px
                h2
                    font-size 30px
                    height 36px
                .tocash
                    width 64px
                    height 32px
                    line-height 32px
                    color $color-text
                    font-family PingFangSC-Semibold
                    border-radius: 15px 0 0 15px;
                    background $color-background-content
                    display inline-block
                    position absolute
                    right 0
                    top 20px
                    box-shadow: 0 1px 9px 0 #FD7049;

        .accoutDtl
            height 90px
            position relative
            background: $color-background-content;
        .subemty
            height 20px
        .real
            height 70px
            width 90%
            position absolute
            top 0
            left 0
            right 0
            margin 0 auto
            background: $color-background-content;
            box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.10);
            border-radius: 8px;
            .realcon
                height 50px
                margin-top 10px
                section
                    display inline-block
                    width 50%
                    height 100%
                    float left
                    box-sizing border-box
                    h4
                        height 20px
                        line-height 22px
                        color $color-text-gray
                        font-size $font-size-small
                    h2
                        height 30px
                        line-height 28px
                        color $color-text
                        font-size $font-size-large-x
                    &:first-child
                        border-right 1px solid #D8D8D8
        .option
            height 200px
            background $color-background-content
            ul
                height 100px
                font-size 0
                li
                    width 33.33%
                    display inline-block
                    float left
                    h2
                        height 50px
                        line-height 50px

                        i
                            font-size 28px
                    h3
                        height 20px
                        font-size $font-size-medium
                        line-height 27px
                    h4
                        height 30px
                        font-size 11px
                        color $color-text-gray
                        line-height 23px
        .banner
            width 100%
            margin-top $li-gap
            img
                width 100%
        .tab
            width: 92%;
            height $line-height-m
            background $color-background-content
            margin $li-gap auto
            border-radius: 8px;
            font-size 0
            p
                width 20%
                height $line-height-m
                line-height $line-height-m
                text-align center
                float left
                span
                    display inline-block
                    width 46px
                    height 46px
                    line-height 46px
                    border-radius: 8px;
                    vertical-align middle
                    i
                        font-size 30px
                        color $color-background-content
            section
                width 65%
                float left
                text-align left
                text-indent 5px
                h2
                    height 30px
                    line-height 50px
                    color $color-text
                    font-size $font-size-medium-x
                h3
                    height 40px
                    line-height 30px
                    color $color-text-gray
                    font-size $font-size-small
            span.child
                float left
                display inline-block
                width 15%
                height $line-height-m
                line-height $line-height-m
                i
                    color $color-text-gray
                    font-size $font-size-medium-x
</style>