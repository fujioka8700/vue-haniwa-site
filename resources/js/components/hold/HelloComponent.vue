<template>
    <p class="message">メッセージ：{{ msg }}</p>
</template>

<script>
export default {
    data: function() {
        return {
            msg: 'こんにちは'
        }
    }
}
</script>

<style>
    .message { color: #42b983; }
</style>