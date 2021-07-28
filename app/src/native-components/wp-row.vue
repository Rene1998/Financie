<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:wp-bootstrap-blocks/row --><!-- /wp:wp-bootstrap-blocks/row -->'
        }
    },
    comments: true
}
</script>