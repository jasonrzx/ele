<template>
	<section id="mainsection">
		<div class="newuser">
			<img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/">
		</div>
		<div class="shoplist-title">{{business}}</div>
		
		<div class="shoplist">
			<div class="shop-listcontent" v-for="item in buslists" @click="jump(item.id)">
				<div class="shop-every">
					<div class="shop-img"><img :src="item.restaurant.image_path"></div>
					<div class="shop-details">
						<div class="shop-first">
							<div class="shop-name">
								<span class="shop-brand" v-if="item.restaurant.is_premium">品牌</span>
								<span class="shoplist-name">{{item.restaurant.name}}</span>
							</div>
							<div class="shop-score">
								<div>
									<span class="shop-scorenum">{{item.restaurant.rating}}</span>
									<span class="shop-copies">月售{{item.restaurant.recent_order_num}}单</span>
								</div>
								<div>
									<span class="shop-courier"></span>
								</div>
							</div>
							<div class="shop-distance">
								<div>
									<span>￥{{item.restaurant.float_minimum_order_amount}}起送</span>
									<span></span>
									<span>配送费￥{{item.restaurant.float_delivery_fee}}</span>
								</div>
								<div>
									<span>{{item.restaurant.order_lead_time}}分钟</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
import axios from 'axios';
import { Loadmore } from 'mint-ui'; 
export default {
	name: "MainSection",
	data(){
		return{
			business: "推荐商家",
			buslists: [],
			page: 0
		}
	},
	mounted(){
		axios.get(`/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset=${this.page+1}&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=e3f3c3f8aceb47f99b78130161d25723&terminal=h1`)
		.then((response)=> {
		    console.log(response);
		    this.buslists = response.data.items;
		    var l = this.buslists.length;
		    for(var i=0; i<l; i++){
		    	this.buslists[i].restaurant.image_path = this.splace(this.buslists[i].restaurant.image_path);
		    	// if(this.buslists[i].restaurant.delivery_mode.text=="undefine"){
		    	// 	this.buslists[i].restaurant.delivery_mode.text = null;
		    	// }
		    }
		    window.addEventListener("scroll", this.bomScroll);
		})
		.catch(function (response) {
		    console.log(response);
		})
	},
	methods :{
		stu: function  (str,sr,index){
			var nstr = "";
			var s1 = str.substring(0,index);
			var s2 = str.substring(index,str.length);
			var nstr = s1+sr+s2;
			return(nstr);
		},
		splace : function (s){
			var a = this.stu(s,"\/",0);
			var b= this.stu(a,"\/",2);
			var c = this.stu(b,"\/",5);
			var ret = (c.substring(c.length-2)=='eg')? ".jpeg":".png";
			var result = "https://fuss10.elemecdn.com"+c+ret;
			return(result);
		},
		jump: function(id){
			this.$router.history.push({name:'shop', params:{fid: id}})
		},
		loadBottom() {
			//...// 加载更多数据
			//this.allLoaded = true;// 若数据已全部获取完毕
			this.$refs.loadmore.onBottomLoaded();
		}
		// bomScroll: function(){
		// 	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		// 	var top = scrollTop-10;
		// 	if(scrollTop > top){
		// 		this.look();
		// 	}
		// }
	}
}
</script>

<style scoped>
	#mainsection{
		background: #fff;
	}
	.newuser{
		padding: 0 0.18rem;
		height: 1.6rem;
	}
	.newuser>img{
		width: 100%;
		height: 100%;
	}
	.shoplist-title{
		display: flex;
		height: 0.64rem;
		color: #000;
		background: #fff;
		align-items: center;
		justify-content: center;
		font-size: 0.25rem;
		margin-top: 0.3rem;
	}
	.shoplist-title:before, .shoplist-title:after{
		display: block;
		content: "";
		width: 0.35rem;
		height: 0.02rem;
		background: #999;
	}
	.shoplist-title:before{
		margin-right: 0.25rem;
	}
	.shoplist-title:after{
		margin-left: 0.25rem;
	}
	.shop-listcontent{
		border-bottom: 0.01rem solid #eee;
		background: #fff;
		color: #666;
		padding: 0.27rem 0.1rem;
		font-size: 0.2rem;
	}
	.shop-listcontent>.shop-every{
		display: flex;
		justify-content: space-around;
	}
	.shop-listcontent>.shop-every>.shop-img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.shop-listcontent>.shop-every>.shop-img>img{
		width: 100%;
		height: 100%;
	}
	.shop-listcontent>.shop-every>.shop-details{
		text-align: left;
		width: 75%;
	}
	.shop-name, .shop-score, .shop-distance{
		margin-bottom: 0.1rem;
	}
	.shop-score, .shop-score{
		font-size: 0.2rem;
	}
	.shop-brand{
		background: yellow;
		font-size: 0.2rem;
		font-weight: 700;
	}
	.shoplist-name{
		color: #333;
		font-weight: 700;
		font-size: 0.28rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.shop-distance{
		display: flex;
		justify-content: space-between;
	}
</style>