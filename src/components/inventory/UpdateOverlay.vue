<template>
  <div
    class="fixed z-50 top-0 left-0 h-screen w-full bg-[#000] bg-opacity-60 dark:bg-opacity-100 p-3"
  >
    <div
      class="min-w-6xl mx-auto my-auto rounded-xl opacity-100 p-5 bg-[#ffffff] dark:bg-[#111927]"
    >
      <div>
        <div class="flex justify-between">
          <h2 class="text-2xl font-semibold dark:text-white">Update product</h2>
          <i
            class="bx bx-x text-[2rem] dark:text-[white] cursor-pointer"
            @click="disableOverlay"
          ></i>
        </div>
        <form>
          <div class="mb-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Name</label
            >
            <input
              v-model="singleProduct.name"
              type="text"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="flex gap-5">
            <div class="w-1/2 mb-4">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Price</label
              >
              <input
                v-model="singleProduct.price"
                type="number"
                id="password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div class="w-1/2 mb-4">
              <label
                for="repeat-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Stock</label
              >
              <input
                v-model="singleProduct.quantity"
                type="text"
                id="repeat-password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Image</label
            >
            <input
              type="file"
              @change="onChange"
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Description</label
            >
            <textarea
              v-model="singleProduct.description"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-0 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            @click.prevent="updateProduct"
            type="submit"
            class="bg-teal-500 py-3 px-5 rounded-lg text-white"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storage } from "../../firebase/firebaseInit";
import { v4 as uuidv4 } from "uuid";
import { useProductStore } from "../../stores/product.js";
import { uploadBytes, ref as imagRef, getDownloadURL } from "firebase/storage";

const productStore = useProductStore();
const props = defineProps(["singleProduct"]);

const emits = defineEmits(["hideOverlay"]);

const image = ref(null);
const imageUrl = ref(null);

const onChange = (event) => {
  image.value = event.target.files[0];
  uploadImage(image.value);
};
const uploadImage = (image) => {
  const name = `image${uuidv4()}`;
  const stroageRef = imagRef(storage, `product/${name}`);
  uploadBytes(stroageRef, image)
    .then((snapshot) => console.log("image upload", snapshot))
    .then(() => {
      getDownloadURL(imagRef(storage, `product/${name}`)).then((url) => {
        imageUrl.value = url;
      });
    });
};

const updateProduct = () => {
  if (imageUrl.value) {
    props.singleProduct.image = imageUrl.value;
    delete props.singleProduct.stock;
    productStore.updateProductAction(props.singleProduct);
  } else {
    delete props.singleProduct.stock;
    productStore.updateProductAction(props.singleProduct);
  }
  emits("hideOverlay");
};

const disableOverlay = () => {
  emits("hideOverlay");
};
</script>
