<template>
  <div class="order-list">
    <div class="order-top">
    	<span><</span><span>订单</span>
    </div>
    <div class="order-center">
    		<p> <img src="../assets/images/dd.png" /></p>
    		<p>登录后查看外卖订单</p>
    		<button>立即登录</button>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
export default {
  name: 'Orderlist',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-list{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.order-top{
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
.order-top>span:nth-of-type(1){
	margin-left: 0.5rem;
}
.order-top>span:nth-of-type(2){
	margin-right: 2.8rem;
}
.order-center{
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	align-items: center;
}
.order-center>p>img{
	width: 3rem;
}
.order-center>p{
	font-size: 16px;
}

.order-center>button{
	margin-top: 0.15rem;
	font-size: 16px;
	width: 2.2rem;
	border: none;
	background: yellowgreen;
	padding: 0.15rem 0;
	color: #fff;
	outline: none;
}
</style>
