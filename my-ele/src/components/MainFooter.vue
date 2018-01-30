<template>
	<footer id="mainfooter">
		<div class="r-mainfooter">
			<ul>
				<li class="foot-this">
					<span><i class="icon iconfont iconfoot1">&#xe722;</i></span>
					<span class="foot footmain">{{main}}</span>
				</li>
				<li>
					<span><i class="icon iconfont iconfoot">&#xe746;</i></span>
					<span class="foot">{{discover}}</span>
				</li>
				<li>
					<span><i class="icon iconfont iconfoot">&#xe606;</i></span>
					<span class="foot">{{indent}}</span>
				</li>
				<li>
					<span><i class="icon iconfont iconfoot">&#xe6b8;</i></span>
					<span class="foot">{{mine}}</span>
				</li>
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
		bottom: 0;
		z-index: 999;
		display: flex;
		height: 1rem;
		background: skyblue;
		width: 100%;
		background: #fff;
		box-shadow: 0 -0.02rem 0.04rem rgba(0,0,0,.1);
	}
	.r-mainfooter>ul{
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}
	.r-mainfooter>ul>li{
		width: 25%;
		display: flex;
		text-align: center;
		flex-direction: column;
	}
	.r-mainfooter>ul>li>span>.iconfoot{
		display: block;
		font-size: 0.32rem;
		color: #999;
	}
	.r-mainfooter>ul>li>span>.iconfoot1{
		display: block;
		font-size: 0.66rem;
		position: absolute;
		top: 0.043rem;
		left: 0.49rem;
		color: #0af;
	}
	.r-mainfooter>ul>li>.foot{
		color: #999;
		font-size: 0.18rem;
		line-height: -1px;
	}
	.r-mainfooter>ul>li>.footmain{
		position: absolute;
		top: 0.54rem;
		left: 0.6rem;
		color: #0af;
	}
	
</style>