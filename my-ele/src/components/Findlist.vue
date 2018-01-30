<template>
  <div class="find_list">
			  <div class="n_top"><span><</span><span>发现</span></div>
		   	<div class="f_top">
			   		<ul>
			   			<li v-for="item in lists1">
			   				<dl>
			   					<dt><img :src="item.main_pic_hash" /></dt>
			   					<dd>{{item.title}}</dd>
			   					<dd>{{item.subtitle}}</dd>
			   				</dl>
			   			</li>
			   		</ul>
   		  </div>
   		  <div class="z_img">
   		  		<p v-for="item in lists2"><img :src="item.sub_pic_hash"/></p>
   		  </div>
   		  <div class="recommend">
   		  		<h5>--为你推荐--</h5>
   		  		<p>你的口味，我都懂得</p> 
   		  		<div class="rec_list">
   		  			<ul>
   		  					<li v-for="item in lists3">
			   		  			<dl>
			   		  				<dt><img :src="item.food.image_path" /></dt>
			   		  				<dd>{{item.food.name}}</dd>
			   		  				<dd><span>月售{{item.food.month_sales}}份</span><span>好评率{{item.food.satisfy_rate}}%</span></dd>
			   		  				<dd><span>￥{{item.food.price}}</span>
			   		  					<s v-if="flag" >{{item.food.original_price}}</s><span v-if="fg" class="spp">{{item.food.discount_activity}}</span></dd>
			   		  				<dd>{{item.food.restaurant_name}}</dd>
			   		  			</dl>
   		  				</li>
   		  	</ul>
   		  		</div>
   		  	
   		  </div>
   		 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Findlist',
  data () {
    return {
      	lists1:[],
      	lists2:[],
      	lists3:[],
      	flag:true,
      	fg:false
    }
  },
  methods :{
  	 stu: function  (str,sr,index){
				var nstr = "";
				var s1 = str.substring(0,index);
				var s2 = str.substring(index,str.length);
				var nstr = s1+sr+s2;
				return(nstr)
		},
		splace : function (s){
			var a = this.stu(s,"\/",0)
			var b= this.stu(a,"\/",2)
			var c = this.stu(b,"\/",5)
			var ret = (c.substring(c.length-2)=='eg')? ".jpeg":".png"
			var result = "https://fuss10.elemecdn.com"+c+ret;
			return(result);
		}
  },
  mounted(){
 		axios.get("/restapi/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173")
  	.then((res)=>{
  			console.log(res);
  			var list1 = res.data[1]; 
  			for(var i=0,l=list1.length;i<l;i++){
  					list1[i].main_pic_hash = this.splace(list1[i].main_pic_hash);
  			}	
  			this.lists1 = list1;
  			
  			var list2 = res.data[2];
  			for(var j=0,l=list2.length;j<l;j++){
  					list2[j].sub_pic_hash = this.splace(list2[j].sub_pic_hash);
  			}
  			this.lists2 = list2;
  	})
  	
  	axios.get("/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6")
  	.then((res)=>{
  			console.log(res);
  			var list3 = res.data.items;
  			for(var k=0,l=list3.length;k<l;k++){
  					list3[k].food.image_path = this.splace(list3[k].food.image_path);
  					
  					if(list3[k].food.discount_activity!=""){
  						this.fg = true;	
  				
  					}
  					if(list3[k].food.original_price){
  						this.flag = true;
  						list3[k].food.original_price = "￥"+list3[k].food.original_price
  					}
  			}
  			this.lists3 = list3;
  			
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.find_list{
		width: 100%;
		padding-top: 0.8rem;
	}
	.n_top{
		width: 100%;
		display: flex;
		font-size:20px;
		height: 0.8rem;
		background: #0085ff;
		line-height: 0.8rem;
		justify-content: space-between;
		color: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	.n_top>span:nth-of-type(1){
		margin-left: 0.5rem;
	}
	.n_top>span:nth-of-type(2){
		margin-right: 2.8rem;
	}
	.f_top{
		width: 100%;
		display: flex;
	}
	.f_top>ul{
		width: 100%;
	}
	.f_top>ul>li{
		width: 50%;
		font-size: 14px;
		display: flex;
		float: left;
	}
	.f_top>ul>li>dl{
		width: 100%;
		padding: 0.3rem;
		border-bottom:1px solid #999;
	}
	.f_top>ul>li{
		height: 1.2rem;
		overflow: hidden;
	}
	.f_top>ul>li:nth-of-type(1){
		height: 2.4rem;
	}
	.f_top>ul>li:nth-of-type(1)>dl{
		border-right:1px solid #999;
	}
	.f_top>ul>li:nth-of-type(4)>dl{
		border-right:1px solid #999;
	}
	.f_top>ul>li>dl>dt{
		float: right;
	}
	.f_top>ul>li:nth-of-type(1)>dl>dt>img{
		width: 1.14rem;
		margin-top:0.8rem ;
	}
	.f_top>ul>li>dl>dt>img{
		width: 0.74rem;
		display: block;
	}
	.f_top>ul>li:nth-of-type(1)>dl>dd{
		width: 1.44rem;
	}
	.f_top>ul>li>dl>dd:nth-of-type(2){
		font-size: 12px;
		color: #999;
	}
	.f_top>ul>li:nth-of-type(2)>dl>dd:nth-of-type(1),.f_top>ul>li:nth-of-type(4)>dl>dd:nth-of-type(1){
		color: rgb(245, 120, 93);
	}
	.f_top>ul>li:nth-of-type(1)>dl>dd:nth-of-type(1),.f_top>ul>li:nth-of-type(5)>dl>dd:nth-of-type(1){
		color: rgb(255, 153, 0);
	}
	.f_top>ul>li:nth-of-type(3)>dl>dd:nth-of-type(1){
		color: rgb(27, 169, 225);
	}
	.z_img>p{
		padding: 0.2rem 0;
		background: #eee;
	}
	.z_img>p>img{
		width: 100%;
		display: block;
	}
.recommend{
		font-size: 12px;
		display: compact;
		padding-top: 0.1rem;
	}
.recommend>h5{
	width: 100%;
	display: flex;
	justify-content: space-around;
	font-size: 16px;
}
.recommend>p{
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding-bottom: 0.1rem;
	color: #999;
}
.rec_list{
	width: 100%;
}
.rec_list>ul{
	width: 100%;
	display: flex;
	flex-wrap:wrap;
}
.rec_list>ul>li{
	width: 50%;
	display: flex;
}
.rec_list>ul>li:nth-of-type(2n-1)>dl{
	margin-right: 0.1rem;
	padding-left: 0.2rem;
}
.rec_list>ul>li:nth-of-type(2n)>dl{
	margin-left: 0.1rem;
	padding-right: 0.2rem;
}
.rec_list>ul>li>dl{
	width: 100%;
}
.rec_list>ul>li>dl>dt{
	
}
.rec_list>ul>li>dl>dt>img{
	width: 100%;
	height: 3.45rem;
}	

.rec_list>ul>li>dl>dd:nth-of-type(1){
	font-size: 16px;
	font-weight: bold;
	width: 90%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.rec_list>ul>li>dl>dd:nth-of-type(3){
	display: flex;
}
.rec_list>ul>li>dl>dd:nth-of-type(3)>span:nth-of-type(1){
	font-size: 14px;
	font-weight: bold;
	color: orange;
}
.rec_list>ul>li>dl>dd:nth-of-type(3)>span:nth-of-type(2){
	font-size: 12px;
	color: red;
	display: block;
	padding: 0.05rem;

}
.rec_list>ul>li>dl>dd:nth-of-type(3)>s{
	color: #999;
}
.rec_list>ul>li>dl>dd:nth-of-type(4){
	padding-bottom: 0.1rem;
	width: 90%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
