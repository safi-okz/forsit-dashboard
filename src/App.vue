<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>

</style>
