<template>
    <div>
        <vc-about-us></vc-about-us>
        <vc-two-info-columns></vc-two-info-columns>
        <vc-contact-us></vc-contact-us>
        <vc-partners></vc-partners>
    </div>
</template>

<script>
export default {
    components: {
        'vc-about-us': () => import('@/vis-webcomponents/vc-aboutUs/vc-aboutUs.vue'),
		'vc-two-info-columns': () => import('@/vis-webcomponents/vc-twoInfoColumns/vc-twoInfoColumns.vue'),
		'vc-contact-us': () => import('@/vis-webcomponents/vc-contactUs/vc-contactUs.vue'),
		'vc-partners': () => import('@/vis-webcomponents/vc-partners/vc-partners.vue')
    }
}
</script>