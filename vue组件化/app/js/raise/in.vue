<template lang="html">
    <panel title="In货推荐" :cname="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="it in items" :key="it.titleImg">
                <img :src="it.titleImg" alt="">
                <section :class="$style.list">
                    <div :class="$style.productWrapper" v-for="product in it.products" :key="product.tips">
                        <div :class="$style.product">
                            <img :src="product.img" alt="">
                            <h4>{{ product.title }}</h4>
                            <p :class="$style.price"><em>{{ product.price }}</em>起</p>
                            <div>
                                <div :class="$style.wrapper">
                                    <div :class="$style.inner" :style="{width:product.rate+'%'}"/>
                                </div>
                                <p>{{ product.rate }}%</p>
                            </div>
                            <label v-if="product.tips">精选</label>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                titleImg: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                products: [{
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t16897/179/5503620/136988/48118941/5a57290bN52e19f82.jpg",
                    title: "微型摄像机",
                    price: "49.00",
                    rate: "328",
                    tips: true,
                }, {
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t19180/119/103841930/89625/55994449/5a5d59f9N01432fde.jpg",
                    title: "智能手表D1",
                    price: "99.00",
                    rate: "785",
                    tips: false,
                }],
            }, {
                titleImg: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                products: [{
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
                    title: "智能后视镜",
                    price: "90.00",
                    rate: "777",
                    tips: true,
                }, {
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t17917/186/321392651/99329/32c1ae84/5a6c0e2cNdcabeb5c.jpg",
                    title: "RELX雾化电子烟",
                    price: "69.00",
                    rate: "515",
                    tips: false,
                }],
            }, {
                titleImg: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                products: [{
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg",
                    title: "雪花酥",
                    price: "29.00",
                    rate: "341",
                    tips: true,
                }, {
                    img: "//img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg",
                    title: "华礼脸茶",
                    price: "99.00",
                    rate: "79",
                    tips: false,
                }],
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  .content{
    @include list;
    .item{
      margin-bottom: 30px;
      >img{
        width: 100%;
      }
      .list{
        @include list(row);
        .product-wrapper{
          position: relative;
        padding: 0 10px 0 20px;
        width: 50%;
        box-sizing: border-box;
        label{
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          text-align: center;
          padding: 4px 8px;
          color: #ff0000;
          background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);

        }
        &:nth-child(2){
          margin-left: -10px;
        }
        .product{
            text-align: center;
            background: rgba(0,0,0,.02);
            img{
              width: 180px;
              height: 180px;
              display: inline-block;
              margin: 44px auto 20px;
            }
            h4{
              font-size: 28px;
              font-weight: 700;
              height: 40px;
              line-height: 40px;
            }
            .price{
              font-family: PingFangSC-Semibold;
              font-size: 24px;
              color: #999;
              height: 48px;
              line-height: 48px;

              em{
                font-weight: 700;
                font-size: 36px;
                color: #FF3232;
                margin-right: 4px;
                // vertical-align: 1;
                &:before{
                  content: "￥";
                  font-size: 28px;
                  font-weight: 400;
                }
              }

            }
            >div{
              @include list(row);
              align-items: center;
              justify-content: space-around;
              padding: 0 24px 18px;
              height: 30px;
              margin-top: 20px;
              p{
                font-weight: 700;
                font-size: 24px;
                color: #999;
              }
              .wrapper{
                width: 60%;
                height: 10px;
                margin-top: 10px;
                background: #F6E6E6;
                border-radius: 22px;
                .inner{
                  max-width: 100%;
                  font-weight: 700;
                  height: 10px;
                  background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                  border-radius: 22px;
                }

              }

            }
          }
        }

      }
    }
  }

}
</style>
