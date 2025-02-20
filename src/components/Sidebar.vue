<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h4>Nombre: {{ registrarStore.nombre }}</h4>
        <h4>Email: {{ registrarStore.email }}</h4>

        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
            <li><router-link to="/registrar">Registrar</router-link></li>
        </ul>
    </div>
</template>


<script setup>
    import { useRegistrarStore } from '@/modules/registro/stores/registrarStore.js'
    // import { ref, watch } from 'vue' 
    
    const registrarStore = useRegistrarStore()
    // const nombre = ref(registrarStore.nombre.value)
    // const email = ref(registrarStore.email.value)

    // watch(() => registrarStore.nombre, (newValue) => {
    //     nombre.value = newValue
    // })
    // watch(() => registrarStore.email, (newValue) => {
    //     email.value = newValue
    // })
</script>


<style>
    .sidebar{
        width: 250px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>