<template>
<div class="catalog__id">
{{info}}
</div>    
</template>
<script>
export default{
    data(){
        return{
info: this.$route.params
        }
}
}
</script>
<style>
</style>