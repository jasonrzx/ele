<template>
	<div id="mainsearch">
		<div class="search">
			<div class="back" @click="jpback()"><span><</span></div>
			<form class="searchall">
				<input class="searchshop" type="text" placeholder="输入商家、商品名称">
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainSearch",
	data(){
		return{
			
		}
	},
	methods: {
		jpback() {
			this.$router.history.push({name:'MainHome', params:{}})
		}
	}	
}
</script>

<style scoped>
	span{
		display: inline;
	}

	.search{
		background: #fff;
		display: flex;
	}
	.back{
		width: 0.62rem;
		height: 0.62rem;
		font-size: 24px;
		padding: 0.09rem 0.09rem 0.09rem 0;
	}
	.searchshop{
		position: absolute;
		padding: 0.12rem 0.26rem 0.12rem 0.6rem;
		background: 
	}
</style>