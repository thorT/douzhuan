<template>
    <div id="cashindex">
        <Mheader :title="'提现'" :bgColor="'theme'" :titleColor="'white'"></Mheader>
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
        <Service></Service>
    </div>
</template>

<script type="text/ecmascript-6">
    import Service from "@/components/public/service";
    import Mheader from "@/components/public/mheader";

    export default {
        components: {
            Service,Mheader
        },
        methods: {

        }
    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .accoutDtl
       height 70px
       width 100%
       background $color-background-content
       float: left;
       box-shadow: 0 1px 9px 0 rgba(0,0,0,0.10);


</style>