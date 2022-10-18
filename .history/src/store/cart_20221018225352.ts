import { defineStore } from "pinia";
import { Cart, Product } from "../config";
import { useProductStore } from './product'
export const useCartStore = defineStore('cart', {
    state: () => ({
        cartList: [] as Cart[],
    }),
    getters: {
        totalPrice(){
            this.cartList.reduce((pre,item)=>{
                return pre + item.
            },0)
        }
    },
    actions: {
        appendCart(product: Product) {
            // 判断是否存在库存
            if (product.inventory < 1) {
                console.log('该商品已经没有库存了')
                return false;
            };
            // 判断是否存在该商品
            const cartItem = this.cartList.find(item => item.id === product.id);
            if (cartItem) {
                cartItem.count++;
            } else {
                this.cartList.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    count: 1
                });
            }
            // 更新库存
            const productStore = useProductStore();
            productStore.decrementInventory(product)
        }
    }
})