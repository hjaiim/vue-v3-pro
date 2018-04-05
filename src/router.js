/**
 * Created by haojun on 2018/4/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './pages/index.vue';
import IndexMain from './pages/index';

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: "首页",
			component: Index,
			beforeEnter: IndexMain
		}
	]
})
