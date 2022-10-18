<template>
    <div v-for="(item, index) in cr" :key="index">

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStroe = useCartStore();
</script>