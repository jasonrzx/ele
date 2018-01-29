<template>
	<div id="mainhome">
		<div>
			<MainHeader></MainHeader>
		</div>
		<div>
			<MainFooter></MainFooter>
		</div>
	</div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
export default {
	name: "MainHome",
	components: {
		MainHeader,
		MainFooter
	}
}
</script>

<style scoped>
	
</style>