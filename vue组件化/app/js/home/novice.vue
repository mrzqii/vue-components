<template lang="html">
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送880元礼品</span> </h4>
                <p :class="$style.grey">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.grey">立即开通</p>
                    </li>
                    <li>
                        <!-- 注意这里img标签放到前面和后面的区别 -->
                      <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                      <h4>打白条<span :class="$style.red">享免息</span></h4>
                      <p :class="$style.grey">立即开通享豪礼</p>
                    </li>
                </ul>

            </div>
        </section>
</panel></template>

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
  .panel{
    @include panel;
    >h4{
      border-bottom: 1px solid #ddd;
    }
    .content{
      @include flex(row);
      .item{
        width: 50%;
        box-sizing: border-box;
        &:first-child{
          text-align: center;
          padding: 32px 20px 0;
          border-right: 1px solid #ddd;
          img{
            width: 132px;
            height: 132px;
            margin: 20px auto 28px;
          }
        }
        h4{
          font-size: 28px;
          line-height: 40px;

        }
        .red{
          color: red;
        }
        .grey{
          color: #999;
          font-size: 24px;
        }
        p{
          font-size: 24px;
        }
        ul{
          width: 100%;
          li{
            height: 144px;
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            &:first-child{
              border-bottom: 1px solid #ddd;
            }
            h4{
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            img{
              width: 80px;
              height: 80px;
              float: right;
            }
          }

          }

        }

    }
  }





</style>
