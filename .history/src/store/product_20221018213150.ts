import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
type IState = {
    productList:
}
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