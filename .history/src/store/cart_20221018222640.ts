import { defineStore } from "pinia";
import { Cart,Product } from "../config";
export const useCartStore = defineStore('cart', {
    state: () => ({
        cartList: [] as Cart[]
    }),
    getters: {},
    actions: {
        appendCart(product: Product) {

            
            this.cartList.push(product);
            product.inventory -= 1;
        }
    }
})