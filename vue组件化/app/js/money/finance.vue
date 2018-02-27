<template lang="html">
    <panel title="理财精选" :cname="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化回报率5.50%</p>
                </div>
                <em>去赚钱></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.50%</p>
                </div>
                <em>去赚钱></em>
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
          color: #ff3232;
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
