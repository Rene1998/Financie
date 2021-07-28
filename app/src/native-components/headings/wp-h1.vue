<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:heading {"level":1} --> <h1>Toto je nadpis</h1> <!--/wp:heading -->'
        }
    },
    comments: true
}
</script>