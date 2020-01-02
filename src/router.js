import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const routes = [
		{
			path: '/',
			name: '旅',
			redirect: '/login'
		},
		/** 新 **/
		{
				path: '/login',
				name: '首页',
				component: () => import('@/views/version/login.vue')
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
				path: '/people',
				name: '个人信息',
				component: () => import('@/views/version/peopleInfo.vue')
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
		{
				path: '/gis',
				name: 'gis',
				component: () => import('@/views/version/gis.vue')
		},
		{
				path: '/search',
				name: 'search',
				component: () => import('@/views/version/search.vue')
		},
		{
				path: '/list',
				name: '列表',
				component: () => import('@/views/version/list.vue')
		},
		{
				path: '/rank',
				name: '排名',
				component: () => import('@/views/version/rank.vue')
		},
		{
				path: '/analysis',
				name: '分析',
				component: () => import('@/views/version/analysis.vue')
		},
		{
				path: '/vacation',
				name: '休假情况',
				component: () => import('@/views/version/vacation.vue')
		},
		{
				path: '/physical',
				name: '休假情况',
				component: () => import('@/views/version/physical.vue')
		},
		{
				path: '/oldBrigade',
				name: '首页',
				component: () => import('@/views/pages/brigade.vue')
		},
		{
				path: '/hls',
				name: 'hls',
				component: () => import('@/views/version/HLS.vue')
		},
		/** 新 **/
		/** 旧 **/
/*		{
			path: '/oldBrigade',
			name: '首页',
			component: () => import('@/views/pages/brigade.vue')
		},
		{
			path: '/oldCamp',
			name: '营',
			component: () => import('@/views/pages/camp.vue')
		},
		{
			path: '/oldGroup',
			name: '团',
			component: () => import('@/views/pages/group.vue')
		},
		{
			path: '/oldCommander',
			name: '连',
			component: () => import('@/views/pages/commander.vue')
		},
		{
			path: '/oldRow',
			name: '排',
			component: () => import('@/views/pages/row.vue')
		},
		{
			path: '/details',
			name: '士兵详情',
			component: () => import('@/views/pages/details.vue')
		},
		{
			path: '/oldPeople',
			name: '士兵详情',
			component: () => import('@/views/pages/peopleInfo.vue')
		},*/
		/** 旧 **/
	
	]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
