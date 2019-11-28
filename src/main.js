import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import App from './App.vue'
import router from './router/router'

axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI)

router.beforeEach((to,from,next) => {
    if(to.matched.some(record => record.meta.requireAuth)){ //判断该路由是否需要登录权限
        /*if(sessionStorage.getItem('userId')){
            next();
        }else{
            next({
                path: '/'
            })
        }*/
        //www.monolog7.com//localhost
        axios.get('http://www.monolog7.com:8080/blogs/checkLogin',{}).then(resp => {
            if(resp.data.code !== 0){
                console.log("未登录，跳转到首页")
                router.push({path:'/'});
            }else{
                /*this.$message({
                    message:resp.data.message,
                    type:'success'
                })
                /!*this.sessionStorage.setItem('userId',resp.data.userId)*!/
                this.$router.push({path:'/blogsAdmin'});*/
                next();
            }
        }).catch(err => {
            console.log(err)
        })
    }else{
        next();
    }
})


var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})
