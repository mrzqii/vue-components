<template lang="html">
    <div>
        <Heador/>
        <Mslider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>

        <Footerr cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footerr from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Mslider from "./mslider.vue"
import Ada from "./ad-a.vue"
import Money from "./money.vue"
import Adb from "./ad-b.vue"
import Finance from "./finance.vue"
import Adc from "./ad-c.vue"

export default {
    components: {
        Heador,
        Footerr,
        Navbar,
        Mslider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc,
    },
}
</script>

<style lang="scss">
.mfooter {
  ul{
      li{
        &:first-child{
          display: none;
      }
    }

  }
}


</style>
