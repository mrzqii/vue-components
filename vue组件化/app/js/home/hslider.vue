<template lang="html">
    <article class="">
        <!-- $style.slider"只在当前组件内有效 ，是一个局部作用域-->
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16213/283/2014672290/33503/a5e64858/5a785d99N5cd3136f.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19342/207/437037473/41615/a77ec600/5a785db6N33b8cc7d.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14554/107/2216340839/36640/ecbf2d05/5a785d72Nec40e2bb.jpg?width=750&height=320",
            }],
            enters: [{
                href: "download",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠卷",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
                title: "零金豆",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },

}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top:120px;
  }
  img{
    //个别设置在当前业务组件做修改，不要再抽象组件内做修改
    width:100%;
    // height: 272px;

  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
