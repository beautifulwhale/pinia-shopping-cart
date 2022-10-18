import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getProduct } from "../api";
import { Product } from "../config";

interface IState {

}

export const useProductStore = defineStore('product', {
    state: () => ({
         : [] as Product[]
    }),
    getters: {},
    actions: {
        async getProductList(state) {
            state.productList = await getProduct();
        }
    }
})
