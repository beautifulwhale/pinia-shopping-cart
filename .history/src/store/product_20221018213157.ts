import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
type IState = {
    productList:Product[]
}
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        getProductList(state:IState) {
            state.productList = getProduct();
        }
    }
})