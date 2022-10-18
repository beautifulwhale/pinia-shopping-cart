<template>
    <div v-for="(item, index) in cartStroe." :key="index">

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStroe = useCartStore();
</script>