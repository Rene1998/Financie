<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '    <!-- wp:heading {"level":3} --><h3>kokot</h3><!-- /wp:heading -->'
        }
    },
    comments: true
}
</script>