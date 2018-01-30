<template>
	<!--//最大的盒子-->
	<div class="shop-box">
		<!--头部区域-->
		<div class="shop-top">
			<!--iconfont标签-->
			<div class="shop-top-T">
				<router-link to="/">
					<i class="icon iconfont">&#xe697;</i>
				</router-link>
				<!--商店logo-->
				<div class="shop-top-imgbox"><img /></div>
				<!--商店信息-->
				<div class="shop-top-p">
					<p class="pp1">
						<span class="p-sp1">品牌</span>
						<span class="p-sp2">南街小店</span>
					</p>
					<p class="pp2"><span class="pf">4.7</span>  月销<span class="xl"></span>单  蜂鸟专送 约<span calss="sj"></span>分钟  距离<span calss="jl"></span>km</p>
					<p class="pp3">欢迎观临，用餐高峰期请提前下单，谢谢。</p>
					<p class="pp4"><span class="sd">首单</span>新用户下单立减17元(不与其他活动同享)  <span class="yh">优惠</span></p>
				</div>
			</div>
		</div>
		<!--选项卡区域   点餐 评价 商家-->
		<!--使用mint-ui插件-->
			<!--<mt-navbar v-model="selected">
			  <mt-tab-item id="1">选项一</mt-tab-item>
			  <mt-tab-item id="2">选项二</mt-tab-item>
			  <mt-tab-item id="3">选项三</mt-tab-item>
			</mt-navbar>-->
		<!--底部区域、点击选项卡切换不同的内容-->
		<div class="shop-bottom">
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<div class="shop-bottom-t">
			  		<div class="shop-bottom-t1"></div>
			  		<div class="shop-bottom-t2">
			  			<span class="shop-left"></span>
			  			<div class="shop-center"></div>
			  			<a class="shop-right"></a>
			  		</div>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	asdf
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			  	asdg
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>



<script src="../assets/js/shop.js">
	
</script>

<style  scpoed lang="scss" src="../assets/style/shop.scss">

</style>