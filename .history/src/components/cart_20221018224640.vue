<template>
    <div>
        <div class="" v-for="(item) in cartStroe.cartList" :key="item.id">
            <h5>商品名称：{{item.name}}</h5>
            <h5>商品价格：{{item.price}}</h5>
            <h5>商品数量：{{item.count}}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStroe = useCartStore();
</script>