import { defineStore } from "pinia";
import { Cart, Product } from "../config";
export const useCartStore = defineStore('cart', {
    state: () => ({
        cartList: [] as Cart[],
    }),
    getters: {},
    actions: {
        appendCart(product: Product) {
            // 判断是否存在库存
            if (product.inventory < 1) {
                console.log('该商品已经没有库存了')
                return;
            };
            // 判断是否存在该商品
            const cartItem = this.cartList.find(item => item.id === product.id);
            if(cartItem) {
                cartItem.count++;
            } else {
                this.cartList.push({
                    id:product.id,
                    name:product.name,
                    price:product.price,
                    count:1
                });
            }
            product.inventory--;

        }
    }
})