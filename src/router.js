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
			name: 'newIndex',
			component: () => import('@/views/version/newIndex.vue')
		},
		{
			path: '/camp',
			name: 'camp',
			component: () => import('@/views/version/camp.vue')
		},
		{
			path: '/commander',
			name: 'commander',
			component: () => import('@/views/version/commander.vue')
		},
		{
			path: '/row',
			name: 'row',
			component: () => import('@/views/version/row.vue')
		},
		{
			path: '/bodys',
			name: 'bodys',
			component: () => import('@/views/version/bodys.vue')
		},
		{
			path: '/migration',
			name: 'migration',
			component: () => import('@/views/version/migration.vue')
		},
/*		{
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
		},*/

	]
})
