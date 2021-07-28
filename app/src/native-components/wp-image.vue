<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:image {"sizeSlug":"large"} --><figure class="wp-block-image size-large"><img src="https://wpbookingplugins.com/wp-content/uploads/2020/08/Wordpress-plugins.jpg" alt=""/></figure><!-- /wp:image -->'
        }
    },
    comments: true
}
</script>