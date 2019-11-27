import VueRouter from "vue-router";

import BlogsAdmin from "../page/BlogsAdmin.vue"
import WriteBlog from "../page/WriteBlog.vue";
import UserIndex from "../page/user/UserIndex.vue"
import UserLogin from "../page/user/Login.vue"
import UserRegister from "../page/user/Register.vue"
import HomeMainBlog from "../page/HomeMainBlog.vue"
import BlogPage from "../page/BlogPage.vue"
import HomeWork from "../page/HomeWork.vue"
import HomeAbout from "../page/HomeAbout.vue"

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
            meta: {
                requireAuth: true
            },
            redirect:'/homeMain',
            children: [
                {
                    path: '/homeMain',
                    component: HomeMainBlog,
                    meta: {
                        requireAuth: true
                    },
                },
                {
                    path: '/blogPage/:id',
                    component: BlogPage,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/homeWork',
                    component: HomeWork,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/writeBlog',
                    component: WriteBlog,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/homeAbout',
                    component: HomeAbout,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        }
    ]
})
module.exports = router

