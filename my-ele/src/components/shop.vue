<template>
	<!--//最大的盒子-->
	<div class="shop-box">
		<!-- 遮罩层 -->
		<div class="mask" v-if="masks" @click.self="hide()">
			<!-- 点击商品显示商品信息 -->
				<dl>
					<dt>
						<img :src="goods_img[0].childNodes[0].currentSrc"/>
					</dt>
					<dd>{{goods_text[0].innerText}}</dd>
					<dd>{{goods_text[1].innerText}}</dd>
					<dd>{{goods_text[3].childNodes[0].innerText}}<span>{{goods_text[3].childNodes[4].innerText}}</span></dd>
				</dl>
		</div>
		<!--头部区域-->
		<div class="shop-top">
			<!--iconfont标签-->
			<div class="shop-top-T">
				<router-link to="/">
					<i class="lt">&lt;</i>
				</router-link>
				<!--商店logo-->
				<div class="shop-top-imgbox" v-if="list"><img :src="imgs[0]" /></div>
				<!--商店信息-->
				<div class="shop-top-p" v-if="list">
					<p class="pp1">
						<span class="p-sp1">品牌</span>
						<span class="p-sp2">{{list.name}}</span>
					</p>
					<p class="pp2"><span class="pf">{{list.rating}}</span>  月销<span class="xl">{{list.rating_count}}</span>单  蜂鸟专送 约<span calss="sj">{{list.order_lead_time}}</span>分钟  距离<span calss="jl">{{parseInt(list.distance*0.001)}}</span>km</p>
					<p class="pp3">{{list.promotion_info}}</p>
					<p class="pp4"><span class="sd">{{list1[0].icon_name}}</span>{{list1[0].description}}<span class="yh">{{list.activities.length}}</span>个优惠</p>
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
				<div class="shop-bottom-dc" v-show="flage==0">
					<!-- 点餐模块左边区域 -->
					<div class="shop-bottom-dc-lf">
						<ul>
							<li v-for="(data,index) in data_il" @click="stairs(index)">{{data.name}}</li>
						</ul>
						<!-- 底部固定区域 -->
						<div class="shop-botton-shop">
							<div>
								<span class="shoping">
									<i class="icon iconfont">&#xe698;</i>
								</span>
							</div>
							<div class="ps">
								<span class="jg">￥</span>
								<span class="psf">配送费</span>
							</div>
							<div class="qs">￥<span class="qs1">20</span>配送</div>
						</div>
					</div>
					<!-- 点餐模块右边区域 -->
					<div class="shop-bottom-dc-rgh">
						<div class="rgh_s" v-for="(act,index) in data_il">
							<p class="shop-rgh-p"><span>{{data_il[index].name}}</span>{{data_il[index].description}}</p>
							<dl v-for="(data,ind) in data_il[index].foods" class="dl">
								<dt @click="mask(ind)"><img :src="img[ind]" /></dt>
								<dd>
									<ul>
										<li class="ul_li1">{{data.name}}</li>
										<li>{{data.tips}}</li>
										<li></li>
										<li class="ul_li4">
											<span>￥{{data.specfoods[0].price}}</span>
											<span class="span2" @click="add_goods(ind)">+</span>
											<span class="amount">0</span>
											<span class="delete_goods" @click.stop="delete_goods(ind)">-</span>
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				</div>
				<div class="shop-bottom-pj" v-show="flage==1"></div>
				<div class="shop-bottom-sj" v-show="flage==2"></div>
			</div>
		</div>
	</div>
</template>



<script src="../assets/js/shop.js">
	
</script>

<style  scpoed lang="scss" src="../assets/style/shop.scss">

</style>