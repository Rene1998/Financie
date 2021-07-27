<template>
    <span v-html="kokot"></span>
</template>

<script>
export default {
    data () {
        return {
            kokot: '<!-- wp:heading {"level":1} --> <h1>Toto je nadpis</h1> <!--/wp:heading -->'
        }
    },
    comments: true
}
</script>