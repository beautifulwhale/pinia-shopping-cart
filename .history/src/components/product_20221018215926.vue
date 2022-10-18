<template>
    <ul>
        <li v-for="(item) in productList" :key="item.id">
            <h3>商品名称：{{item.name}}</h3>
            <h3>商品价格：{{item.price}}</h3>
            <h3>商品库存：{{item.inventory}}</h3>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store/product'
const productStore = useProductStore();
productStore.getProductList()
// const { productList } = storeToRefs(productStore)
</script>

