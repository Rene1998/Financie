<template>
	<div>
		<z-blog/>
		<b-container class="text-center mt-5 mb-5 hardcode-text">
			<h4>
				Najlepšie produkty na našom trhu
			</h4>
			<p>
				Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...
			</p>
		</b-container>
		<b-container class="mb-5">
			<z-imgCard/>
		</b-container>
		<b-container>
			<b-row class="center mb-5">
				<z-linkCards/>
			</b-row>
		</b-container>
	</div>
</template>
<script>
export default {
	components: {
		'z-blog': () => import('@/vis-webcomponents/vis-blog/z-blog.vue'),
		'z-imgCard': () => import('@/vis-webcomponents/vis-imgCard/z-imgCard.vue'),
		'z-linkCards': () => import('@/vis-webcomponents/vis-linkCards/z-linkCards.vue')
	}
}
</script>
