<template>
    <div>
        <z-blog></z-blog>
    </div>
    
</template>
<script>
export default {
    components: {
    "z-blog": () => import("../_components/z-blog"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    
  }
}
</script>
<style lang="scss" scoped>

</style>