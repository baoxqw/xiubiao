<style>
    .wh_slide {
        width: 100%;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        z-index: 10;
        min-height: 100px;
    }
    .wh_slide dl {
      display: inline-block;
    }
    .wh_slide img {
        display: block;
    }
</style>
<template>
    <div class="wh_slide" @click="clickSlide">
        <slot/>
    </div>
</template>
<script>
    export default {
        methods: {
            clickSlide() {
                this.$emit('click')
                console.log('00')
            }
        }
    }
</script>
