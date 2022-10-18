import { defineStore } from "pinia";
im
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