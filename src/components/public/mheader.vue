<template>
    <div>
        <div id="mheader" :style="{ background: bgColorArr[bgColor],color:titleColor}">
            <div class="topBlank"></div>
            <div class="content">
                <i class="icon iconfont" @click="back">&#xe617;</i>
                {{title}}
                <router-link :to="subpath" class="subtitle" :style="{color:titleColor}" v-if="subtitle">
                    {{subtitle}}
                </router-link>
            </div>

        </div>
        <div class="empty"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            title: {
                type: String,
                required: true
            },
            bgColor: {
                type: String,
                default:'themeWhite'
            },
            titleColor: {
                type: String,
            },
            subtitle: {
                type: String,
            },
            subpath: {
                type: String,
            },
            topath: {
                type: String,
            }
        },
        data(){
            return {
                bgColorArr: {
                    theme: ' linear-gradient(to right, #FD7049 , #FDA86A,#FDA990)',
                    themeWhite: 'white',
                },

            }
        },
        methods: {
            back(){
                this.topath ? this.$router.push(this.topath) : this.$router.back()

            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    #mheader
        position: fixed
        width: 100%
        font-size: $font-size-medium-x
        z-index: 200
        font-weight: bold
        .topBlank
            height: $nav-blank
        .content
            height: $nav-height
            line-height: $nav-height
            text-align: center
            i
                position: absolute
                left: 0
                font-size: $font-size-large-x
                display: inline-block
                width: 50px
                font-weight: 900

    .empty
        height: $nav;
        width: 100%;
        box-sizing: border-box;

    .subtitle
        display inline-block
        font-size $font-size-medium
        position fixed
        right 10px
        top: 20px

</style>