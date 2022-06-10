<template>
    <div>
        <p :class="$style.message">こんにちは!</p>
        <p class="message">こんにちは!</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('css modules:$style', this.$style);
    }
}
</script>

<style module>
.message { color: #42b983; }
</style>