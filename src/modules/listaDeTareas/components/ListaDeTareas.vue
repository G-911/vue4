<script setup lang="ts">
    import { ref } from 'vue';
    const tareas = ref([])
    const nuevaTarea = ref('')
    const addTarea = () => {
        tareas.value.push(nuevaTarea.value)
        nuevaTarea.value = ''
    }
    const borrarTarea = (index) => {
        tareas.value.splice(index,1)
    }

</script>

<template>
    <div>
        <h2>lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea">borrar</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
