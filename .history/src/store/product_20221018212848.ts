import { defineStore } from "pinia";
import { getProduct } from "../api";
im
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: []
    }),
    getters: {},
    actions: {
        getProductList(){
            this.productList = getProduct();
        }
    }
})