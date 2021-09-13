<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:wp-bootstrap-blocks/container --><!-- /wp:wp-bootstrap-blocks/container -->'
        }
    },
    comments: true
}
</script>