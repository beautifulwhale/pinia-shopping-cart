import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getProduct } from "../api";
import { Product } from "../config";


// export const useProductStore = defineStore('product', {
//     state: () => ({
//         productList: [] as Product[]
//     }),
//     getters: {},
//     actions: {
//         getProductList(state) {
//             state.productList = getProduct();
//         }
//     }
// })

export const useProductStore = defineStore('product', () => {
    const productList = reactive([] as Product[]);
    function getProductList(){
        productList = getProduct()
    }
})