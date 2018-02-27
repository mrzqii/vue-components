<template lang="html">
    <div>
        <Heador/>
        <Rslider/>
        <Daily/>
        <In/>


        <Footerr cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footerr from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Rslider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"

export default {
    components: {
        Heador,
        Footerr,
        Navbar,
        Rslider,
        Daily,
        In,

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
