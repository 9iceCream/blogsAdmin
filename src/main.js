import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import App from './App.vue'
import router from './router/router'

Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI)




var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})