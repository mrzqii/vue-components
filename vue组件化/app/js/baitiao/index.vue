<template lang="html">
    <div>
        <Heador/>
        <Bslider/>
        <Welfare/>
        <Moreservice/>


        <Footerr/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footerr from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Bslider from "./bslider.vue"
import Welfare from "./welfare.vue"
import Moreservice from "./moreservice.vue"

export default {
    components: {
        Heador,
        Footerr,
        Navbar,
        Bslider,
        Welfare,
        Moreservice,

    },
}
</script>

<style lang="scss">


</style>
