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
		default: () => import('./vis-layout-webcomponents/vl-default/default.vue')
	}
}
</script>
