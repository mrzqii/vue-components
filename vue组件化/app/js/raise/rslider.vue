<template lang="html">
    <panel title="众筹垂直轮播" :cname="$style.panel">
        <section :class="$style.content">
            <swiper :options="options" class="my-slider-content">
                <swiper-slide class="my-slider-item"><span>签到领流量，1元500M！ </span><em> ></em> </swiper-slide>
                <swiper-slide class="my-slider-item"><span>百万白条券免费送，速来领取！！</span><em> ></em></swiper-slide>
            </swiper>
        </section>
    </panel>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                autoplay: true,
                loop: true,
                direction: "vertical",

            },
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-bottom: 0;
  
  >h4{
    display: none;
  }
  .content{
    margin-top: 120px;
    height: 72px;
    line-height: 72px;
  }
}
</style>


<style lang="scss">
  @import '~swiper/dist/css/swiper.css';
  .my-slider-content{
    height: 72px;
    padding-left: 178px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    position: relative;
    overflow: hidden;
    &:after{
      content: "";
      position: absolute;
      left: 20px;
      bottom: 0;
      width: 120px;
      height: 1px;
      background-color: #ddd;
    }
    .my-slider-item{
      font-size: 28px;
      font-weight: 400;
      overflow: hidden;
      span{
        float: left;
        width: 398px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      em{
        float: right;
        margin-right: 25px;
      }
    }
  }
</style>

