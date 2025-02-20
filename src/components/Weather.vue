<template>
    {{ weatherStore.temperatura }}
</template>


<script setup>
    import { useWeather } from '../composables/useWeather'
    import { onMounted } from 'vue';
    import { useWeatherStore } from '../stores/weatherStore.js'

    const weatherStore = useWeatherStore()

    onMounted(() => {
        useWeather()
    })
</script>


<style>

</style>