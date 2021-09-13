<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:heading {"level":6} --><h6>kokot</h6><!-- /wp:heading -->'
        }
    },
    comments: true
}
</script>