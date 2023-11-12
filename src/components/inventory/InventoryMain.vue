<template>
  <div>
    <div class="searchBar">
      <!-- Filter Search -->
      <!-- <img :src="filteredCategory[0].image" alt=""> -->
      <div class="mb-5">
        <input
          type="search"
          class="w-full rounded-xl border-gray-200 focus:ring-0 focus:border-gray-400"
          v-model="searchQuery"
          placeholder="Search product...."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        id="tableComponent"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th
              v-for="field in fileds"
              :key="field"
              @click="sortTable(field)"
              scope="col"
              class="px-6 py-3"
            >
              {{ field }} <i class="bx bx-sort-z-a" aria-label="Sort Icon"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) of filteredProduct"
            :key="product.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ product.name }}</td>
            <td class="px-6 py-4">{{ product.price }}</td>
            <td class="px-6 py-4">{{ product.quantity }}</td>
            <td
              class="px-6 py-4"
              :class="[
                product.stock === 'In stock' ? 'text-green-500' : '',
                product.stock === 'Low stock' ? 'text-amber-400' : '',
                product.stock == 'Out of stock' ? 'text-red-600' : '',
              ]"
            >
              {{ product.stock }}
            </td>
            <td class="px-6 py-4">{{ product.description }}</td>
            <td class="px-6 py-4">
              <img
                :src="product.image"
                class="w-[4rem] h-[4rem] rounded-lg"
                alt=""
              />
            </td>
            <td class="px-6 py-4">
              <button
                @click="singleProductFunc(product)"
                class="bg-teal-500 py-3 px-5 rounded-lg text-white"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <UpdateOverlay
      v-if="overlay"
      :singleProduct="singleProduct"
      @hideOverlay="overlay = false"
      class="fixed top-0"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { sortBy } from "lodash";
import { useProductStore } from "../../stores/product.js";
import UpdateOverlay from "./UpdateOverlay.vue";

const productStore = useProductStore();
const { productsGetter } = storeToRefs(productStore);

const overlay = ref(false);
const singleProduct = ref(null);
let sort = ref(false);
let updatedList = ref([]);
let searchQuery = ref("");

const router = useRouter();
const fileds = ref([
  "S. NO",
  "Name",
  "Price",
  "Quantity",
  "Stock",
  "Description",
  "Image",
  "Action",
]);

// Define a reactive ref for the current sorting column
const currentSortColumn = ref("");

// Function to sort the table
const sortTable = (field) => {
  // Toggle the sorting order if the same column is clicked
  if (field === currentSortColumn.value) {
    sort.value = !sort.value;
  } else {
    sort.value = true;
  }

  currentSortColumn.value = field;

  updatedList.value = !sort.value
    ? sortBy(productsGetter.value, [field])
    : sortBy(productsGetter.value, [field]).reverse();
};

const sortedList = computed(() => {
  if (sort.value) {
    return updatedList.value;
  } else {
    return productsGetter.value;
  }
});

const filteredProduct = computed(() => {
  return sortedList.value.filter((product) => {
    return (
      product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
    );
  });
});

const singleProductFunc = (product) => {
  overlay.value = true;
  singleProduct.value = product;
};

onMounted(() => productStore.getProductAction());
// await productStore.getProductAction();
</script>
