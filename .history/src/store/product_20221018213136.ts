import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
type 
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        getProductList(state) {
            state.productList = getProduct();
        }
    }
})