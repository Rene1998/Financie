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
			<b-row class="border center mb-5">
				<z-linkCards/>
			</b-row>
		</b-container>
	</div>
</template>
<script>
export default {
	components: {
		'z-blog': () => import('../_components/z-blog'),
		'z-imgCard': () => import('../_components/card/z-imgCard'),
		'z-linkCards': () => import('../_components/card/z-linkCards')
	}
}
</script>
