import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getProduct } from "../api";
import { Product } from "../config";
import { useProductStore } from './cart'

interface IState {
    productList: Product[]
}


export const useProductStore = defineStore('product', {
    state: (): IState => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        async getProductList() {
            this.productList = await getProduct();
        },
        changeProduct(product: Product) {

        }
    }
})
