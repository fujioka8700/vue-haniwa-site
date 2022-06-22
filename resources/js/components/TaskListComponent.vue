<template>
    <div>
        {{ tasks }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        getTasks() {
            axios.get('/api/tasks').then((res)=>{
                this.tasks = res.data;
            })
        }
    },
    mounted() {
        this.getTasks();
    }
}
</script>