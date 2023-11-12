<template>
    <div>
        <div class="w-full flex justify-between gap-6">
            <div class="w-1/3 bg-gray-200 rounded-xl cursor-pointer p-5 shadow-md hover:bg-gray-300 text-[#333]">
                <div class="flex justify-between text-4xl font-semibold">
                    <h1 class="">Orders</h1>
                    <i class='bx bx-cart-add'></i>
                </div>
                <h1 class="text-3xl mt-4">{{ totalOrders }}</h1>
            </div>
            <div class="w-1/3 bg-gray-200 rounded-xl cursor-pointer p-5 shadow-md hover:bg-gray-300 text-[#333]">
                <div class="flex justify-between text-4xl font-semibold">
                    <h1 class="">Sales</h1>
                    <i class='bx bx-purchase-tag'></i>
                </div>
                <h1 class="text-3xl mt-4">${{ totalSales }}K</h1>
            </div>
            <div class="w-1/3 bg-gray-200 rounded-xl cursor-pointer p-5 shadow-md hover:bg-gray-300 text-[#333]">
                <div class="flex justify-between text-4xl font-semibold">
                    <h1 class="">Categories</h1>
                    <i class='bx bx-category-alt'></i>
                </div>
                <h1 class="text-3xl mt-4">3033</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSalesStore } from '../../stores/sales.js';

const { totalSales, totalOrders } = useSalesStore();
</script>