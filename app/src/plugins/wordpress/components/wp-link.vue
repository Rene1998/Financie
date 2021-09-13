<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:paragraph --><p><a href="#">link</a></p><!-- /wp:paragraph -->'
        }
    },
    comments: true
}
</script>