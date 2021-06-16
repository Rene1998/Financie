<template>
	<div class="default-layout">
		<a-infoBar>

		</a-infoBar>
		<a-navbar/>
		<router-view></router-view>
		<a-footer/>
	</div>
</template>

<script>
export default {
	components: {
		'a-infoBar': () => import('./a-infoBar.vue'),
		'a-navbar': () => import('./a-navbar.vue'),
		'a-footer': () => import('./a-footer.vue')
	}
}
</script>
<style scoped>
.default-layout {
	overflow-x: hidden;
}
</style>
