import Vue from 'vue'
import Router from 'vue-router'
import Findlist from '@/components/Findlist'
import MainHome from '@/components/MainHome'
import shop from '@/components/shop'
import Mypage from '@/components/Mypage'
import Orderlist from '@/components/Orderlist'
import MainSearch from '@/components/MainSearch'

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
      path: '/Findlist',
      name: 'Findlist',
      component: Findlist
    },
    {
      path: '/shop/:fid',
      name: 'shop',
      component: shop
    },
    {
    	path: '/Mypage',
     	name: 'Mypage',
      	component: Mypage
    },
    {
    	path: '/Orderlist',
     	name: 'Orderlist',
      	component: Orderlist
    },
    {
      path: '/MainSearch',
      name: 'MainSearch',
        component: MainSearch
    },
  ]
})
