<template>
 <span v-html=" content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: ' <!-- wp:wp-bootstrap-blocks/button {"text":"ahoj"} /-->'
        }
    },
    comments: true
}
</script>