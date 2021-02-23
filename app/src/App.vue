<template>
	<div id="app">
		<default>
			<router-view/>
		</default>

	</div>
</template>

<script>
export default {
	components: {
		"default": () => import('./plugins/financie/_layout/default.vue')
	}
}
</script>