<template>
    <ul>
        <!-- <li v-for="(item, index) in " :key="index"></li> -->
    </ul>
</template>

<script setup lang="ts">
import { useProductStore } from '../store/product'
const productStore = useProductStore();
productStore.getProductList()
const {} = toRef
</script>

