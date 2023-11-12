import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, toggleDark }
})
