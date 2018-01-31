<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
	
</script>
<script>
export default {
  name: 'App',
  
  boforeCreate:function(){
		var rempx = document.documentgetElement.clentWidth / 6.4;
		document.getElementsByTagName("html")[0].style.fontSize = rempx + "px";
	}
  
}
</script>

<style> 
@import './assets/iconfont/iconfont.css';
html,body,div,nav,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,textarea,figure,i,a,footer{margin:0;padding:0;}
*{box-sizing:border-box;}
h1,h2,h3,h4,h5,h6{font-size:16px;font-weight:100;}
a,u{text-decoration:none;}
ul,ol,li{list-style:none;}
i,em{font-style:normal;}
b,strong{font-weight:100;}
img{
  border:0;
  display:block;
}
html,body{
  width:100%;
  height:100%;
}
body{
  display: flex;
  flex-direction: column; 
}
</style>
