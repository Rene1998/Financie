<template>
	<div class="default-layout">
		<vl-infoBar/>
		<vl-navbar/>
		<router-view/>
		<vl-footer/>
	</div>
</template>

<script>
export default {
	components: {
		'vl-infoBar': () => import('../vl-infoBar/vl-infoBar.vue'),
		'vl-navbar': () => import('../vl-navbar/vl-navbar.vue'),
		'vl-footer': () => import('../vl-footer/vl-footer.vue')
	}
}
</script>
<style scoped>
.default-layout {
	overflow-x: hidden;
}
</style>
