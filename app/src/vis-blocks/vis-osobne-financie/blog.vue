<template>
	<div>
		<vc-blog/>
		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Najlepšie produkty na našom trhu
			</h4>
			<p>
				Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...
			</p>
		</div>
		<div class="container mb-5">
			<vc-imgCard/>
		</div>
		<div class="container">
			<div class="row center mb-5">
				<vc-linkCards/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {
		'vc-blog': () => import('@/vis-webcomponents/vc-blog/vc-blog.vue'),
		'vc-imgCard': () => import('@/vis-webcomponents/vc-imgCard/vc-imgCard.vue'),
		'vc-linkCards': () => import('@/vis-webcomponents/vc-linkCards/vc-linkCards.vue')
	}
}
</script>
