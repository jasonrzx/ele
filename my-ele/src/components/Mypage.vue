<template>
  <div class="my-page">
   	  <div class="n-top"><span><</span><span>我的</span></div>
   	  <div class='nav-top'>
   	  		<dl>
	   	  			<dt>
	   	  					<span><i class="icon iconfont icon-user">&#xe604;</i></span>
	   	  			</dt>
	   	  			<dd>
		   	  				<h4>登录/注册</h4>
		   	  				<span>登录后享受更多特权</span>
	   	  			</dd>
   	  		</dl>
   	  		<span>></span>
   	  </div>
   	  <ul>
   	  	<li>
   	  		<span><i class="icon iconfont icon-hb">&#xe61b;</i></span>
   	  		<span>红包</span>
   	  	</li>
   	  	<li>
   	  		<span><i class="icon iconfont icon-jb">&#xe64a;</i></span>
   	  		<span>金币</span>
   	  	</li>
   	  </ul>
  </div>
</template>

<script>
export default {
  name: 'Mypage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-page{
	width: 100%;
	overflow: hidden;
}
.n-top{
		width: 100%;
		display: flex;
		font-size:20px;
		height: 0.8rem;
		background: #0085ff;
		line-height: 0.8rem;
		justify-content: space-between;
		color: #fff;
		border-bottom: 1px solid #fff;
}
.n-top>span:nth-of-type(1){
	margin-left: 0.5rem;
}
.n-top>span:nth-of-type(2){
	margin-right: 2.8rem;
}

.nav-top{
	font-size: 10px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 1.88rem;
	padding: 0 0.2rem;
	align-items: center;
	background: #0085ff;
	color: #fff;
}
.nav-top>dl{
	display: flex;
}
.nav-top>dl>dt{
	padding-right: 0.2rem;
}
.nav-top>dl>dt>span>.icon-user{
	font-size: 45px;
	color: #fff;
	background: #999;
	border-radius: 50%;
}
.nav-top>dl>dd>h4{
	font-size: 20px;
	font-weight: bold;
}
.nav-top>dl>dd>span{
	font-size: 10px;
}

.my-page>ul{
	width: 100%;
	display: flex;
	flex: 2;
	font-size: 12px;
}
.my-page>ul>li{
	flex: 1;
	height: 1.43rem;
	display: flex;
	justify-content: center;
	text-align: center;
	flex-direction:column ;
}
.my-page>ul>li:nth-of-type(1)>span:nth-of-type(1){
	width: 20px;
	height: 20px;
	border-radius: 50%;
}
.my-page>ul>li:nth-of-type(2)>span:nth-of-type(2){
	
}
</style>
