<template>
    <div>
        <p>resize....(test for useEventListener hook)</p>
    </div>
</template>

<script>
    import useEventListener from "../hooks/useEventListener";

    export default {
        name: "resize",
        setup(){
            useEventListener('resize', ()=>console.log('is resizing'));
        }
    }
</script>

<style scoped>

</style>