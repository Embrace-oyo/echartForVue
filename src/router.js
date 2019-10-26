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
			name: 'details',
			component: () => import('@/views/pages/details.vue')
		},

	]
})
