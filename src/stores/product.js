import { defineStore } from 'pinia';
import { createToaster } from "@meforma/vue-toaster";
import { set, ref, onValue, child, push, update } from "firebase/database";
import db from '../firebase/firebaseInit';

const toaster = createToaster({ /* options */ });

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        singleProduct: {}
    }),
    getters: {
        productsGetter(state) {
          const productsStock = state.products.filter(el => {
                if(el.quantity > 10) {
                  return el.stock = "In stock"
                } else if(el.quantity < 10 && el.quantity > 0){
                  return el.stock = "Low stock"
                } else if(el.quantity == '0'){
                  return el.stock = 'Out of stock';
                }
          });
          return productsStock;
        }
    },
    actions: {
       async addProductAction(product) {
        
            console.log('product ', product)
            set(ref(db, 'product/' + product.id), product);

            await toaster.success(`Product added successfully`, {
                position: "top",
                duration: 2000
            });
        },
        async getProductAction() {
            this.products.length = 0;
            const dataRef = ref(db, 'product'); 

            onValue(dataRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
          
                const dataArray = Object.keys(data).map((key) => 
                this.products.push(data[key]),);

                }

        })
    },
      async updateProductAction(singleProduct) {
  
        await toaster.success(`Product updated successfully`, {
          position: "top",
          duration: 2000
      });
    const updates = {};
    updates['/product/' + singleProduct.id] = singleProduct;
  
    return update(ref(db), updates);
      }
}
})