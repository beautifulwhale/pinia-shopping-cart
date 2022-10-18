import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        getProductList(state:Product[]) {
            state.productList = getProduct();
        }
    }
})