 <template>
	<div id="mainhome">
		<div>
			<MainHeader></MainHeader>
		</div>
		<div>
			<MainSlideshow></MainSlideshow>
		</div>
		<div>
			<MainSection></MainSection>
		</div>
		<div>
			<MainFooter></MainFooter>
		</div>
	</div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import MainSection from './MainSection'
import MainSlideshow from './MainSlideshow'
export default {
	name: "MainHome",
	components: {
		MainHeader,
		MainSlideshow,
		MainSection,
		MainFooter
	}
}
</script>

<style scoped>
	
</style>