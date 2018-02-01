<template>
	<footer id="mainfooter">
		<div class="r-mainfooter">
			<ul>
				<router-link to="/" activeClass="foot-this" exact>
					<li>
						<i class="icon iconfont iconfoot1">&#xe722;</i>
						<span class="foot">{{main}}</span>
					</li>
				</router-link>
				<router-link to="/Findlist" activeClass="foot-this">
					<li>
						<i class="icon iconfont iconfoot iconfoot2">&#xe746;</i>
						<span class="foot">{{discover}}</span>
					</li>
				</router-link>
				<router-link to="/Orderlist" activeClass="foot-this">
					<li>
						<i class="icon iconfont iconfoot">&#xe606;</i>
						<span class="foot">{{indent}}</span>
					</li>
				</router-link>
				<router-link to="/Mypage" activeClass="foot-this">
					<li>
						<i class="icon iconfont iconfoot">&#xe6b8;</i>
						<span class="foot">{{mine}}</span>
					</li>
				</router-link>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: "MainFooter",
	data(){
		return{
			main: "首页",
			discover: "发现",
			indent: "订单",
			mine: "我的"
		}
	},
	mounted(){
		
	}
}
</script>

<style scoped>
	.r-mainfooter{
		position: fixed;
		left: 0;
		right: 0;
		bottom: -0.01rem;
		z-index: 999;
		display: flex;
		height: 1rem;
		width: 100%;
		background: #fff;
	}
	.r-mainfooter>ul{
		background: #fff;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.r-mainfooter>ul>a{
		display: block;
		width: 25%;
		height: 100%;
	}
	.r-mainfooter>ul>a>li{
		position: relative;
		width: 25%;
		display: flex;
		text-align: center;
		margin: 0 auto;
		flex-direction: column;
		line-height: 0.5rem;
		align-items: center;
	}
	.r-mainfooter>ul>a>li>.iconfoot{
		display: block;
		font-size: 0.32rem;
		color: #999;
	}
	.r-mainfooter>ul>a>li>.iconfoot1{
		display: block;
		font-size: 0.66rem;	
	}
	.foot{
		color: #999;
		font-size: 0.18rem;
		position: absolute;
		top: 0.34rem;
		white-space: nowrap;
	}
	
	.foot-this *{
		color: #0af;
	}

</style>