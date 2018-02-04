<template>
  <div class="my-page">
   	  <div class="n-top"><span @click="jpback()"><</span><span>我的</span></div>
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

   	  <div class="my-location">
   	  	<p>
   	  		<span><i class="icon iconfont icon-dw">&#xe610;</i></span>
   	  		<span>我的地址</span>
   	  	</p>
   	  	<span>></span>
   	  </div>
   	  <ol>
   	  	<li>
   	  		<dl>
   	  			<dt><span><i class="icon iconfont icon-jbsc">&#xe613;</i></span></dt>
   	  			<dd>
   	  				<span>金币商城</span>
   	  				<span>></span>
   	  			</dd>
   	  		</dl>
   	  	</li>
   	  	<li>
   	  		<dl>
   	  			<dt><span><i class="icon iconfont icon-fx">&#xe602;</i></span></dt>
   	  			<dd>
   	  				<span>分享拿5元现金</span>
   	  				<span>></span>
   	  			</dd>
   	  		</dl>
   	  	</li>
   	  </ol>
   	  <ol>
   	  	<li>
   	  		<dl>
   	  			<dt><span><i class="icon iconfont icon-kf">&#xe7e0;</i></span></dt>
   	  			<dd>
   	  				<span>我的客服</span>
   	  				<span>></span>
   	  			</dd>
   	  		</dl>
   	  	</li>
   	  	<li>
   	  		<dl>
   	  			<dt><span><i class="icon iconfont icon-elm">&#xe722;</i></span></dt>
   	  			<dd>
   	  				<span>下载饿了么App</span>
   	  				<span>></span>
   	  			</dd>
   	  		</dl>
   	  	</li>
   	  </ol>
   	  <MainFooter></MainFooter>
  </div>
  

</template>

<script>
export default {
  name: 'Mypage',
  methods: {
      jpback() {
         this.$router.history.push({name:'MainHome', params:{}})
      }
   }  
}
</script>

<style scoped src="../assets/style/mypage.css">

</style>
