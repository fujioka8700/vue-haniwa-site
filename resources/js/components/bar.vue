<template>
    <div class="bar">
        <h1>Barコンポーネント</h1>
        <p>これはBarコンポーネントです。</p>

		<!-- .headerにマッチする要素が当初想定しないところまで波及する。 -->
		<!-- こうした影響があるため、コンポーネントに対してclass属性をコンポーネント外から与えるときは注意が必要 -->
        <foo class="header"/>
    </div>
</template>

<script>
import Foo from './foo'
export default {
    components: {
        Foo
    }
}
</script>

<style scoped>
    .bar {
        border: 1px solid red;
        margin: 4px;
        padding: 4px;
    }
    .header { font-size: 125%; }
</style>