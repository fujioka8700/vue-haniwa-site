import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // タスクの初期ステート
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                labelIds: [1,2,4],
                done: false
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                labelIds: [1,3],
                done: true
            }
        ],

        // ラベルの初期ステート
        labels: [
            {
                id: 1,
                text: '買い物',
            },
            {
                id: 2,
                text: '食料',
            },
            {
                id: 3,
                text: '本',
            }
        ],

        // 次に追加するタスクのID
        // 実際のアプリではサーバーで生成したり、UUIDを使ったりする
        nextTaskId: 3,
        nextLabelId: 4,

        // フィルタするラベルのID
        filter: null
    },
    mutations: {
        // タスクを追加する
        addTask(state, { name, labelIds }) {
            console.log(labelIds)
            state.tasks.push({
                id: state.nextTaskId,
                name,
                labelIds,
                done: false
            });
            
            // 次に追加されるタスクに付与するIDを更新する
            state.nextTaskId++;
        },

        // タスクの完了状態を変更する
        toggleTaskStatus(state, { id }) {
            const filtered = state.tasks.filter(task => {
                return task.id === id;
            });

            filtered.forEach(task => {
                task.done = !task.done;
            });
        },

        // ラベルを追加する
        addLabel(state, { text }) {
            state.labels.push({
                id: state.nextLabelId,
                text
            });

            // 次に追加されるラベルに付与するIDを更新する
            state.nextLabelId++;
        },

        // フィルタリング対象のラベルを変更する
        changeFilter(state, { filter }) {
            state.filter = filter;
        }
    },

    getters: {
        // フィルター後のタスクを返す
        filterdTasks(state) {
            // ラベルが選択されていなければそのまま一覧を返す
            if (state.filter === null) {
                return state.tasks
            }

            // 選択されているラベルでフィルタリングする
            return state.tasks.filter(task => {
                return task.labelIds.indexOf(state.filter) >= 0;
            });
        }
    }
});

export default store;