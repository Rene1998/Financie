<template>
	<div>
		<a-navbar/>
			<router-view></router-view>
		<a-footer/>
	</div>
</template>

<script>
export default {
	components: {
		"a-navbar": () => import("./a-navbar.vue"),
		"a-footer": () => import("./a-footer.vue")
	}
}
</script>

<style lang="scss" scoped>

</style>