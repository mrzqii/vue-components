<template lang="html">
    <panel title="每日签到" :cname="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
        </section>
    </panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  margin-top: 0px;
  padding-bottom: 40px;
  >h4{
    position: relative;
    &:after{
      content: "不抢白不抢";
      position: absolute;
      top: 0;
      right: 32px;;
      font-size: 28px;
      color: #999;

    }
  }
  .content{
    @include list(row);
    img{
      width: 320px;
      height: 136px;
    }
  }
}
</style>
