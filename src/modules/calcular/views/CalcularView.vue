<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    <!-- {{ valorCalculado }} -->
    <resultadoSection :resultado="valorCalculado"></resultadoSection>
</template>


<script setup>
    import { ref, computed } from 'vue'
    import ResultadoSection from '../components/ResultadoSection.vue';

    const valor = ref('')
    const valorCalculado = computed(() => {
        return valor.value * 3
    })
</script>


<style>

</style>