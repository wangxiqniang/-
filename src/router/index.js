import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: {
				path: '/HelloWorld'
			}
		},
		{
			path: '/HelloWorld',
			component: HelloWorld
		},

		{
			path: '/dashboard',
			name: 'dashboard',
			component: resolve => require(['@/components/login/dashboard.vue'], resolve),
			children: [{
				path: '/order/orderInfo',
				name: 'orderInfo',
				component: resolve => require(['../components/order/orderInfo.vue'], resolve),
			},
			{
				path: "/homepage/adv/pc",
				name: 'advpc',
				component: resolve => require(['../components/homepage/advpc.vue'], resolve),
			},{
				path: "/homepage/zone/pc",
				name: 'advpc',
				component: resolve => require(['../components/homepage/zonepc.vue'], resolve),
			},{
				path: "/homepage/website/navBar",
				name: 'advpc',
				component: resolve => require(['../components/homepage/websitenavBar.vue'], resolve),
			},{
				path: "/homepage/website/websiteNav",
				name: 'advpc',
				component: resolve => require(['../components/homepage/websitewebsiteNav.vue'], resolve),
			},{
				path: "/homepage/website/websiteLink",
				name: 'advpc',
				component: resolve => require(['../components/homepage/websitewebsiteLink.vue'], resolve),
			},{
				path: "/course/course/course",
				name: 'advpc',
				component: resolve => require(['../components/course/course.vue'], resolve),
			},{
				path: "/course/course/audit",
				name: 'advpc',
				component: resolve => require(['../components/course/audit.vue'], resolve),
			},{
				path: "/course/category/category",
				name: 'advpc',
				component: resolve => require(['../components/course/category.vue'], resolve),
			},{
				path: "/lecturer/lecturer/lecturer",
				name: 'advpc',
				component: resolve => require(['../components/lecturer/lecturer.vue'], resolve),
			},{
				path: "/lecturer/lecturer/audit",
				name: 'advpc',
				component: resolve => require(['../components/lecturer/audit.vue'], resolve),
			},{
				path: "/lecturer/profit/profit",
				name: 'advpc',
				component: resolve => require(['../components/lecturer/profit.vue'], resolve),
			},{
				path: "/user/ext",
				name: 'advpc',
				component: resolve => require(['../components/user/ext.vue'], resolve),
			},{
				path: "/sys/pms/user",
				name: 'advpc',
				component: resolve => require(['../components/sys/pmsuser.vue'], resolve),
			},{
				path: "/sys/pms/role",
				name: 'advpc',
				component: resolve => require(['../components/sys/pmsrole.vue'], resolve),
			},{
				path: "/sys/pms/menu",
				name: 'advpc',
				component: resolve => require(['../components/sys/pmsmenu.vue'], resolve),
			},{
				path: "/sys/website/website",
				name: 'advpc',
				component: resolve => require(['../components/sys/website.vue'], resolve),
			},{
				path: "/sys/website/sys",
				name: 'advpc',
				component: resolve => require(['../components/sys/sys.vue'], resolve),
			},{
				path: "/sys/platform/platform",
				name: 'advpc',
				component: resolve => require(['../components/sys/platform.vue'], resolve),
			},{
				path: "/sys/log/sys",
				name: 'advpc',
				component: resolve => require(['../components/sys/logsys.vue'], resolve),
			},{
				path: "/sys/log/orderPay",
				name: 'advpc',
				component: resolve => require(['../components/sys/logorderPay.vue'], resolve),
			}
			]
		},

	]
})
