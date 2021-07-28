<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"width":"25%"} --><div class="wp-block-column" style="flex-basis:25%"></div><!-- /wp:column --><!-- wp:column {"width":"50%"} --><div class="wp-block-column" style="flex-basis:50%"></div><!-- /wp:column --><!-- wp:column {"width":"25%"} --><div class="wp-block-column" style="flex-basis:25%"></div><!-- /wp:column --></div><!-- /wp:columns -->'
        }
    },
    comments: true
}
</script>