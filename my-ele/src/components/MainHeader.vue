<template>
	<header id="mainheader">
		<div class="map">
			<div class="mapp">
				<span>{{map}}</span>
			</div>
		</div>
		<div class="shopper">
			<div class="shop">
				<a>
					<i class="icon iconfont iconmain">&#xe6ac;</i>
					<span>{{shopper}}</span>
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "MainHeader",
	data(){
		return{
			map: "",
			shopper: "搜索商家、商品名称"
		}
	},
	mounted(){
		// //百度定位
		// var geoc = new BMap.Geocoder();
		// var geolocation = new BMap.Geolocation();
		// geolocation.getCurrentPosition(function(r){
		// 	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		// 		geoc.getLocation(r.point, function(rs){
		// 			var addComp = rs.addressComponents;
		// 			var mainmap = addComp.district + addComp.city;
		// 			var map = document.getElementsByClassName("map")[0];
		// 			console.log(map)
		// 			map.innerHtml = mainmap;
		// 			console.log(mainmap)
		// 		});   
				
		// 	}
		// 	else {
		// 		alert('failed'+this.getStatus());
		// 	}        
		// },{enableHighAccuracy: true})
	}
}
</script>

<style scoped>
	.map{
		padding: 0 0.2322rem;
		background-image: linear-gradient(left,#0af,#0085ff);
		color: #000;
		font-size: 36px;
		color: #fff;
	}
	
	.mapp>span{
		display: inline-block;
		height: 0.62rem;
		width: 100%;
	}
	.shopper{
		position: sticky;
		top: 0;
		z-index: 999;
		background-image: linear-gradient(left,#0af,#0085ff);
		font-size: 20px;
	}
	.shop{
		padding: 0.13rem 0.2322rem;
	}
	.shop>a{
		display: flex;
		height: 0.62rem;
		justify-content: center;
		align-items: center;
		background: #fff;
		width: 100%;
		color: #999;
		font-size: 0.27rem;
		border-radius: 0.03rem;
	}
	.iconmain{
		margin-right: 0.1rem;
		font-size: 0.25rem;
		font-weight: 700;
	}
</style>