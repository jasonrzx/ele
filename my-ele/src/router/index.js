import Vue from 'vue'
import Router from 'vue-router'
import Findlist from '@/components/Findlist'
import shop from '@/components/shop'

Vue.use(Router)

export default new Router({
	mode : "hash",
	 routes: [
    {
      path: '/Findlist',
      name: 'Findlist',
      component: Findlist
    },
	{
    	path : '/shop',
    	name : 'shop',
    	component : shop

    }
  ]
})
