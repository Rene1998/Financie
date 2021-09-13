<template>
	<div class="default-layout">
		<wcl-infoBar/>
		<wcl-navbar/>
		<router-view/>
		<wcl-footer/>
	</div>
</template>

<script>
export default {
	components: {
		'wcl-infoBar': () => import('../wcl-infoBar/wcl-infoBar.vue'),
		'wcl-navbar': () => import('../wcl-navbar/wcl-navbar.vue'),
		'wcl-footer': () => import('../wcl-footer/wcl-footer.vue')
	}
}
</script>
<style scoped>
.default-layout {
	overflow-x: hidden;
}
</style>
