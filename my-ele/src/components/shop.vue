<template>
	<!--//最大的盒子-->
	<div class="shop-box">
		<!--头部区域-->
		<div class="shop-top">
			<!--iconfont标签-->
			<div class="shop-top-T">
				<router-link to="/">
					<i class="lt">&lt;</i>
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
		<div class="shop-center-bottom">
			<ul class="shop-center">
				<li v-for="(item,index) in items" @click.stop="tabs(index)">
					<span :class="{spans:flage==index}" >{{item.message}}</span>
				</li>
			</ul>
			<!-- 底部区域 -->
			<div class="shop-bottom">
				<!-- 点餐区域 -->
				<div class="shop-bottom-dc" v-if="flage==0">
					<!-- 点餐模块左边区域 -->
					<div class="shop-bottom-dc-lf">
						<ul>
							<li v-for="(side,index) in sidebar">{{side}}</li>
						</ul>
						<!-- 底部固定区域 -->
						<div class="shop-botton-shop">
							<span class="shoping"></span>
							<div class="ps">
								<span class="jg">￥</span>
								<span class="psf">配送费</span>
							</div>
							<div class="qs">￥<span class="qs1"></span>配送</div>
						</div>
					</div>
					<!-- 点餐模块右边区域 -->
					<div class="shop-bottom-dc-rgh">
						<p class="shop-rgh-p"><span>热销</span></p>
						<dl v-for="">
							<dt></dt>
							<dd></dd>
							<dd>
								
							</dd>
						</dl>
					</div>
				</div>
				<div class="shop-bottom-pj" v-if="flage==1"></div>
				<div class="shop-bottom-sj" v-if="flage==2"></div>
			</div>
		</div>
	</div>
</template>



<script src="../assets/js/shop.js">
	
</script>

<style  scpoed lang="scss" src="../assets/style/shop.scss">

</style>