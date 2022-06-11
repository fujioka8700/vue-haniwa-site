<template>
    <div id="root">
        <h1 class="header">Rootコンポーネント</h1>
        <p>これはRootコンポーネントです。</p>
        <foo/>
        <bar/>
        <baz/>
        <qux/>
    </div>
</template>

<script>
import Foo from './foo'
import Bar from './bar'
import Baz from './baz'
import Qux from './qux'
export default {
    components: {
        Foo,
        Bar,
        Baz,
        Qux
    }
}
</script>

<style>
#root {
    border: solid 1px blue;
    margin: 4px;
    padding: 4px;
}
.header {
    font-size: 200%;
}
p {
    text-decoration: underline;
}
.message { color: red; }
</style>