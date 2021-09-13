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
		default: () => import('./plugins/wordpress/web-components-layout/wcl-default/default.vue')
	}
}
</script>
