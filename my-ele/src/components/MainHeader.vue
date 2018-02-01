<template>
	<header id="mainheader">
		<div class="map">
			<div class="mapp">
				<a class="mapa">
					<i class="icon iconfont iconlocation">&#xe63c;</i>
					<span class="mapspan">{{map}}</span>
				</a>
			</div>
		</div>
		<div class="shopper" :class="searchBarFixed == true ? 'isFixed' :''">
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
			shopper: "搜索商家、商品名称",
			searchBarFixed: false
		}
	},
	mounted(){
		//百度定位
		var geoc = new BMap.Geocoder();
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				geoc.getLocation(r.point, function(rs){
					var addComp = rs.addressComponents;
					var mainmap = addComp.district + addComp.city + addComp.street;
					var mapp = document.getElementsByClassName("mapspan")[0];
					// console.log(addComp)
					mapp.innerText = mainmap;
					//console.log(mainmap)
				});   
				
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true});

		//吸顶效果
		window.addEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			//console.log(scrollTop);
			var offsetTop = document.getElementsByClassName("shopper")[0].offsetTop;
			if(scrollTop > offsetTop){
				this.searchBarFixed = true;
			} else {
				this.searchBarFixed = false;
			}
		}
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
		
	}
}
</script>

<style scoped>
	.map{
		padding: 0.13rem 0.2322rem;
		background-image: linear-gradient(left,#0af,#0085ff);
		color: #000;
		font-size: 0.3rem;
		color: #fff;
	}
	.mapp>a>span{
		display: inline-block;
		height: 0.62rem;
		width: 100%;
		margin: 0 0.35rem;
		line-height: 0.75rem;
		font-weight: 700;
	}
	.shopper{
		position: relative;
		top: 0;
		z-index: 999;
		width: 100%;
		background-image: linear-gradient(left,#0af,#0085ff);
		font-size: 20px;
	}
	.isFixed{
	    position:fixed;
	    top: 0;
	    background-image: linear-gradient(left,#0af,#0085ff);
	    width: 100%;
	    z-index:999;
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
	.iconlocation{
		float: left;
		font-size: 0.27rem;
		position: absolute;
		top: 0.23rem;
	}
	.mapa{
		display: flex;
		justify-content: space-between;
		position: relative;
	}
</style>