import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
export const useProductStore = defineStore('product', {
    state: () => ({
        productList: <Product>[]
    }),
    getters: {},
    actions: {
        getProductList(){
            this.productList = getProduct();
        }
    }
})