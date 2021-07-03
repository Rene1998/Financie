<template>
	<div class="default-layout">
		<a-infoBar/>
		<a-navbar/>
		<router-view/>
		<a-footer/>
	</div>
</template>

<script>
export default {
	components: {
		'a-infoBar': () => import('../vis-infoBar/a-infoBar.vue'),
		'a-navbar': () => import('../vis-navbar/a-navbar.vue'),
		'a-footer': () => import('../vis-footer/a-footer.vue')
	}
}
</script>
<style scoped>
.default-layout {
	overflow-x: hidden;
}
</style>
