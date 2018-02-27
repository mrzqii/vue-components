<template lang="html">
    <div>
        <Heador/>
        <Hslider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footerr/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footerr from "../public/footer.vue"
import Hslider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
import Navbar from "../public/navbar.vue"


export default {
    components: {
        Heador,
        Hslider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footerr,
        Navbar,

    },
}
</script>

<style lang="scss" module>


</style>
