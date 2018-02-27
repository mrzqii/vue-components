<template>
    <panel title="下载APP" :class="$style.panel">
        <section :class="$style.content">
            <div></div>
            <p>下载APP</p>
            <span>c2004-2018 JD.com All Rights Reserved</span>
        </section>
    </panel>

</template>

<script>
    import Panel from '../core/panel.vue';
    export default{
        components:{
            Panel,
        }
    }
</script>

<style lang="scss" module>
@import "../../css/element.scss";
body{
    background-color: #fff;
}
.panel{
    @include panel;
    margin: 0!important;
    
    
    >h4{
        display: none;
    }
    .content{
        @include list;
        justify-content: center;
        align-items: center;
        height: 1136px;
        width: 100%;
        
        >div{
            background: url(//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)center center no-repeat;
            width: 670px;
            height: 800px;
            background-size: 100% auto;
            margin-top: -440px;
            
        }
        >p{
            @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:1px,$radius:10px);
            height: 100px;
            width: 471px;
            line-height: 100px;
            font-weight: bold;
            text-align: center;
            background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
            box-shadow: 0 6px 16px 1px rgba(255,159,135,.6);
            position: fixed;
            bottom: 140px;
        }
        >span{
            font-size: 20px;
            color: #eee;
            position: fixed;
            bottom: 10px;
        }

    }
}


</style>

