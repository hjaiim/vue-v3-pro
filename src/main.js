import Vue from 'vue'
import App from './App.vue'

//引入路由
import vueRouter from 'vue-router'
import router from '../src/router'

//引入插件
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(mint)
Vue.use(element)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
