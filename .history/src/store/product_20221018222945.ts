import { defineStore } from "pinia";
import { reactive, ref } from "vue";
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
        changeProduct(product: Product) {
            cartStore.appendCart(product);
        }
    }
})
