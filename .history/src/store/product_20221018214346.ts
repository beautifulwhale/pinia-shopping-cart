import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getProduct } from "../api";
import { Product } from "../config";


export const useProductStore = defineStore('product', {
    state: () => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        async getProductList(state) {
            state.productList = await getProduct();
        }
    }
})
