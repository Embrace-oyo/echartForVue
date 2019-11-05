import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
		{
			path: '/',
			name: '旅',
			redirect: '/brigade'
		},
		{
			path: '/brigade',
			name: '旅',
			component: () => import('@/views/pages/brigade.vue')
		},
		{
			path: '/group',
			name: '团',
			component: () => import('@/views/pages/group.vue')
		},
		{
			path: '/camp',
			name: '营',
			component: () => import('@/views/pages/camp.vue')
		},
		{
			path: '/commander',
			name: '连',
			component: () => import('@/views/pages/commander.vue')
		},
		{
			path: '/row',
			name: '排',
			component: () => import('@/views/pages/row.vue')
		},
		{
			path: '/details',
			name: '详情',
			component: () => import('@/views/pages/details.vue')
		},
		{
			path: '/baiduMap',
			name: 'echarts_baiduMap',
			component: () => import('@/views/pages/baiduMap.vue')
		},
		{
			path: '/mapBox',
			name: 'echarts_mapBox',
			component: () => import('@/views/pages/mapBox.vue')
		},
		{
			path: '/newIndex',
			name: 'newIndex',
			component: () => import('@/views/pages/newIndex.vue')
		},
		{
			path: '/body',
			name: 'body',
			component: () => import('@/views/pages/body.vue')
		},

	]
})
