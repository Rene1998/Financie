<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:heading {"level":4} --><h4>kokot</h4><!-- /wp:heading -->'
        }
    },
    comments: true
}
</script>