import { defineStore } from "pinia";
import { Cart } from "../config";
export const useCartStore = defineStore('cart', {
    state: () => ({
        cartList: [] as Cart[]
    }),
    getters: {},
    actions: {
        appendCart(product: Cart) {
            // 判断是否存在库存
            if(!product.inventory) {
                console.log('该商品已经没有库存了')
            }
            product.count 
            this.cartList.push(product);
        }
    }
})