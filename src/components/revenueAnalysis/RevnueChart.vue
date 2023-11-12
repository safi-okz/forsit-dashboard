<template>
    <div>
      <div class="card border-0 shadow-sm mt-3 p-3">
        <div class="flex justify-between">
          <h5 class="text-2xl font-bold dark:text-white">Revenue</h5>
        </div>
        <canvas ref="chartRef"></canvas>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import Chart from 'chart.js/auto';
  
  const selectedInterval = ref('Weekly');
  const chartRef = ref(null);
  let chartInstance = null;
  
  const updateChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
    
    const ctx = chartRef.value.getContext('2d');
   return chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue 2021',
            data: [28, 48, 40, 19, 34,56,43,56,12,34,23,21,56,34,45,78],
            fill: true,
            borderColor: '#333',
            tension: 0.4,
            backgroundColor: '#999',
          },
          {
            label: 'Revenue 2022',
            data: [65, 59, 80, 81,34,56,67,78,90,12,23,34,46,67,45,34,45,6,56,67,89,90,1],
            fill: false,
            borderColor: '#666666CC',
            tension: 0.4,
          },
        ],
      }, 
      options: basicOptions,
    });
  };
  
  const basicOptions = {
    // Your existing chart options
  };
  
  onMounted(() => {
    updateChart();
  });
  
  // Watch for changes in selectedInterval and update the chart
  watch(selectedInterval, () => {
    updateChart();
  });
  </script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  