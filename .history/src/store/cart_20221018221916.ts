import { defineStore } from "pinia";
import { Cart } from "../config";
export const useCartStore = defineStore('cart', {
    state: () => ({
        cartList: [] as Cart[]
    }),
    getters: {},
    actions: {
        appendCart(product: Cart) {
            if(product.)
            this.cartList.push(product);
        }
    }
})