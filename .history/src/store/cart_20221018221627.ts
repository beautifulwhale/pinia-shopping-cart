import { defineStore } from "pinia";
import {}
export const useProductStore = defineStore('cart', {
    state: () => ({
        cartList: []
    }),
    getters: {},
    actions: {
        appendCart(product){
            this.cartList.push(product);
        }
    }
})