<template>
    <div v-for="(item) in cartStroe.cartList" :key="item.id">
        <h5>商品名称：{{}}}</h5>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStroe = useCartStore();
</script>