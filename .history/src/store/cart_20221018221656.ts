import { defineStore } from "pinia";
import { Cart } from "../config";
export const useProductStore = defineStore('cart', {
    state: () => ({
        cartList: [] as C
    }),
    getters: {},
    actions: {
        appendCart(product:Cart){
            this.cartList.push(product);
        }
    }
})