<template>
    <div v-for="(item) in cartStroe.cartList" :key="item.id">

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStroe = useCartStore();
</script>