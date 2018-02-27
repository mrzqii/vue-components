<template lang="html">
    <panel title="白条福利" :cname="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额></em>
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
    @include flex;
    .item{
      @include flex(row);
      height: 140px;
      align-items: center;
      &:after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #eee;
        margin-left: 150px;
      }
      &:last-child{
        &:after{
          background-color: #fff;
        }
      }
      img{
        width: 88px;
        height: 88px;
        display: block;
        margin: 16px 32px 0;
      }
      >div{
        width: 335px;
        h4{
          font-size: 32px;
          color: #333;
          line-height: 1.8;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        p{
          font-size: 24px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      em{
        font-size: 28px;
        color: #FF801A;

      }
    }
  }
}
</style>
