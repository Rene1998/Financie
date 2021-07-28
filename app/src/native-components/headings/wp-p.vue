<template>
    <span v-html="content"></span>
</template>

<script>
export default {
    data () {
        return {
            content: '<!-- wp:paragraph --><p>Nullam scelerisque nec dui quis condimentum. Cras feugiat ex diam, ut elementum tortor condimentum non. Donec non risus at nulla aliquam vestibulum ac id ligula. In euismod facilisis faucibus. In lobortis lobortis orci, id auctor magna bibendum a. Aenean quis sapien pulvinar, tincidunt ante placerat, malesuada quam. Nunc quis consequat turpis, nec sodales massa donec auctor sollicitudin urna, quis sodales ante auctor et Donec non risus at nulla aliquam vestibulum.</p><!-- /wp:paragraph -->'
        }
    },
    comments: true
}
</script>