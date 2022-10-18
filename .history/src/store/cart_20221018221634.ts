import { defineStore } from "pinia";
import { Cart } from "../config";
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