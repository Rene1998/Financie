<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:heading {"level":5} --><h5>kokot</h5><!-- /wp:heading -->'
        }
    },
    comments: true
}
</script>