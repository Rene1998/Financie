<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: ' <!-- wp:heading {"level":2} --><h2>kokot</h2><!-- /wp:heading -->'
        }
    },
    comments: true
}
</script>