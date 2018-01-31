//反向代理
import axios from 'axios';
//jquery
import $ from 'jquery';

export default {
	name : "shop",
	data : function(){
		return {
			flage : "0",
			items :[
				{message : "点餐"},
				{message : "评价"},
				{message : "商家"}
			],
			sidebar :["热销","优惠","优惠套餐","精选套餐","精选套餐","单点主餐","甜品小食","配餐小食","串点","汤饮","日式煮锅"]
		}
	},

	methods : {
		tabs: function(index){
			this.flage = index;
		}
	},

	mounted (){
		var wh = document.documentElement.clientHeight;
		var xxk = document.getElementsByClassName("shop-center-bottom")[0]
		xxk.style.height = wh+"px";
	}
}
