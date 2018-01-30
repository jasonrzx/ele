import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome'
import shop from '@/components/shop'

Vue.use(Router)

export default new Router({
	mode : "hash",
	 routes: [
    {
      path: '/',
      name: 'MainHome',
      component: MainHome
    },
    {
    	path : '/shop',
    	name : 'shop',
    	component : shop
    }
  ]
})
