import { defineStore } from "pinia";
import { getProduct } from "../api";
import { Product } from "../config";
import { useCartStore } from './cart'

interface IState {
    productList: Product[]
}
const cartStore = useCartStore()

export const useProductStore = defineStore('product', {
    state: (): IState => ({
        productList: [] as Product[]
    }),
    getters: {},
    actions: {
        async getProductList() {
            this.productList = await getProduct();
        },
        decrementIn
    }
})
