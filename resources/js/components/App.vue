<template>
    <div>
        <h2>タスク一覧</h2>
        <ul>
            <li v-for="task in tasks" v-bind:key="task.id">
                <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">
                {{ task.name }}
            </li>
        </ul>
        <form v-on:submit.prevent="addTask">
            <input type="text" v-model="newTaskName" placeholder="新しいタスク">
        </form>
        <h2>ラベル一覧</h2>
        <ul>
            <li v-for="label in labels" v-bind:key="label.id">
                {{ label.text }}
            </li>
        </ul>
        <form v-on:submit.prevent="addLabel">
            <input type="text" v-model="newLabelText" placeholder="新しいラベル">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 入力中の新しいタスク名を一時的に保持する
            newTaskName: '',
            newLabelText: ''
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        },
        labels() {
            return this.$store.state.labels;
        }
    },
    methods: {
        // タスクを追加する
        addTask() {
            // addTaskミューテーションをコミット
            this.$store.commit('addTask', {
                name: this.newTaskName
            });

            this.newTaskName = '';
        },

        // タスクの完了状態を更新する
        toggleTaskStatus(task) {
            // toggleTaskStatusミューテーションをコミット
            this.$store.commit('toggleTaskStatus', {
                id: task.id
            });
        },

        addLabel() {
            this.$store.commit('addLabel', {
                text: this.newLabelText
            });

            this.newLabelText = '';
        }
    }
}
</script>

<style scoped>
h2 {
    margin-top: 1em;
}
</style>