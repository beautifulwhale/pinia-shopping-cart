<template>
    <ul>
        <li v-for="(item) in productList" :key="item.id">
            <h2>商品名称：{{item.name}}</h2>
            <h2>商品价格：{{item.name}}</h2>
            <h2>商品名称：{{item.name}}</h2>
            <h2>商品名称：{{item.name}}</h2>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store/product'
const productStore = useProductStore();
productStore.getProductList()
const { productList } = storeToRefs(productStore)
</script>

