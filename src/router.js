import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
		{
			path: '/',
			name: '旅',
			redirect: '/newIndex'
		},
		{
			path: '/newIndex',
			name: '首页',
			component: () => import('@/views/version/newIndex.vue')
		},
		{
			path: '/camp',
			name: '营',
			component: () => import('@/views/version/camp.vue')
		},
		{
			path: '/commander',
			name: '排',
			component: () => import('@/views/version/commander.vue')
		},
		{
			path: '/row',
			name: '班',
			component: () => import('@/views/version/row.vue')
		},
		{
			path: '/bodys',
			name: '个人信息',
			component: () => import('@/views/version/bodys.vue')
		},
		{
			path: '/migration',
			name: '士兵外出趋势',
			component: () => import('@/views/version/migration.vue')
		},
		{
				path: '/upLoad',
				name: '士兵外出趋势',
				component: () => import('@/views/version/upLoad.vue')
		},
	]
})
