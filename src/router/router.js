import VueRouter from "vue-router";

import BlogsAdmin from "../page/BlogsAdmin.vue"
import WriteBlog from "../page/WriteBlog.vue";
import UserIndex from "../page/user/UserIndex.vue"
import UserLogin from "../page/user/Login.vue"
import UserRegister from "../page/user/Register.vue"

var router = new VueRouter({
    routes:[
        {
            path: '/',
            component: UserIndex,
            redirect: '/userLogin',
            children:[
                {
                    path: '/userLogin',
                    component: UserLogin
                },{
                    path: '/userRegister',
                    component: UserRegister
                }
            ]
        },
        {
            path:'/blogsAdmin',
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

