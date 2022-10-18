import { defineStore } from "pinia";
import { getProduct } from "../api";
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: []
    }),
    getters: {},
    actions: {
        async getProductList(){
            this.productList = 
        }
    }
})