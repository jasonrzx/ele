<template>
  <!--<div id="app">-->
    <router-view/>
  <!--</div>-->
</template>

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

</style>
