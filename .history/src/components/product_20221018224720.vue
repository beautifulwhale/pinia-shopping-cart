<template>
    <ul>
        <li  v-for="(item) in productStore.productList" :key="item.id">
            <h3>商品名称：{{item.name}}</h3>
            <h3>商品价格：{{item.price}}</h3>
            <h3>商品库存：{{item.inventory}}</h3>
            <button @click="appendCart(item)">添加到购物车</button>
        </li>
    </ul>


</template>

<script setup lang="ts">
import { useProductStore } from '../store/product'
import { useCartStore } from '../store/cart'
import { Product } from '../config/index'
const productStore = useProductStore();
const cartStore = useCartStore()
productStore.getProductList()

const appendCart = (item: Product) => {
    cartStore.appendCart(item)
}
</script>

