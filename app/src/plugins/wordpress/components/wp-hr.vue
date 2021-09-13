<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:separator --><hr class="wp-block-separator"/><!-- /wp:separator -->'
        }
    },
    comments: true
}
</script>