import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Baitiao from "../baitiao/index.vue"
import Raise from "../raise/index.vue"
import Mine from "../mine/index.vue"
import Download from "../special/download.vue"

import "../../css/reset.scss"
import "../../css/style.scss"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/baitiao",
            name: "baitiao",
            component: Baitiao,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/mine",
            name: "mine",
            component: Mine,
        },
        {
            path: "/download",
            name: "download",
            component: Download,
        },
    ],
})
