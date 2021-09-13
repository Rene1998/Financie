<template>
    <div>
        <wc-about-us></wc-about-us>
        <wc-two-info-columns></wc-two-info-columns>
        <wc-contact-us></wc-contact-us>
        <wc-partners></wc-partners>
    </div>
</template>

<script>
export default {
    components: {
        'wc-about-us': () => import('@/plugins/wordpress/web-components/wc-aboutUs/wc-aboutUs.vue'),
		'wc-two-info-columns': () => import('@/plugins/wordpress/web-components/wc-twoInfoColumns/wc-twoInfoColumns.vue'),
		'wc-contact-us': () => import('@/plugins/wordpress/web-components/wc-contactUs/wc-contactUs.vue'),
		'wc-partners': () => import('@/plugins/wordpress/web-components/wc-partners/wc-partners.vue')
    }
}
</script>