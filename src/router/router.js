import VueRouter from "vue-router";

import BlogsAdmin from "../page/BlogsAdmin.vue"
import WriteBlog from "../page/WriteBlog.vue";

var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:BlogsAdmin,
            redirect:'/writeBlog',
            children: [
                {
                    path: '/writeBlog',
                    component: WriteBlog
                }
            ]
        }
    ]
})
module.exports = router

