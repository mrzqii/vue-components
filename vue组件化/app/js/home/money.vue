<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
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
                title: "定期理财",
                sub: "理财首选",
                rate: "5.60%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "7日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
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
    @include flex(row);
    justify-content: space-around;
    box-sizing: border-box;
    &:after{
      content: " ";
      display: block;
      width: 100%;
      height: 0;
      border-bottom: 1px solid #eee;
      position: relative;
      top:-220px;
    }

    dl{
      width: 50%;
      box-sizing: border-box;
      padding: 34px 16px;
      position: relative;
      &:nth-child(2n+1){
        &:after{
          content: "";
          width: 1px;
          height: 136px;
          position: absolute;
          top:50%;
          right: 0;
          margin-top: -68px;
          border-right: 1px solid #eee;
        }
      }
      dt{
        color: #333;
        font-weight: 700;
        font-size: 30px;
        height: 42px;
        line-height: 42px;
        span{
          margin-left: 5px;
          vertical-align: 1px;
          font-size: 22px;
          padding: 0 8px;
          color: #FF5155;
          border: 1px solid #FF5155;
        }
      }
    }
    dd{
      &:nth-child(2){
        font-weight: 700;
        font-size: 44px;
        height: 58px;
        line-height: 58px;
        color: #FF5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:nth-child(3){
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
