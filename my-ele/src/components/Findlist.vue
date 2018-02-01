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
   		  					<li v-for="item in lists3" >
			   		  			<dl @click="jump(item.food.restaurant_id)">
			   		  				<dt><img :src="item.food.image_path" /></dt>
			   		  				<dd>{{item.food.name}}</dd>
			   		  				<dd><span>月售{{item.food.month_sales}}份</span><span>好评率{{item.food.satisfy_rate}}%</span></dd>
			   		  				<dd><span>￥{{item.food.price}}</span>
			   		  					<s v-if="flag" >{{item.food.original_price}}</s>
			   		  					<span v-if="fg">{{item.food.discount_activity}}</span>
			   		  				</dd>
			   		  				<dd>{{item.food.restaurant_name}}</dd>
			   		  			</dl>
   		  				</li>
   		  			</ul>
   		  		</div>
   		  	<div class="btn1"><button>查看更多  ></button></div>
   		  </div>
   		  <div class="time_limit recommend">
   		  		<h5>--限时好礼--</h5>
   		  		<p>金币换豪礼</p> 
   		  		<div class="Tlist">
	   		  			<ol>
	   		  					<li v-for="item in lists4">
				   		  			<dl>
				   		  				<span>{{item.corner_marker}}</span>
				   		  				<dt><img :src="item.image_hash"/></dt>
				   		  				<dd>{{item.title}}</dd>
				   		  				<dd><span>{{item.points_required}}金币</span><s>￥{{item.original_price}}</s></dd>
				   		  			</dl>
	   		  				  </li>
	   		  			</ol>
   		  		</div>
   		  		<div class="btn1"><button>查看更多  ></button></div>
   		  </div>
   		 <MainFooter></MainFooter>
  </div>
</template>
<script src="../assets/js/findlist.js" ></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/style/Findlist.css">

</style>
