<template>
    <div>
        <div class="product" v-for="(item) in cartStore.cartList" :key="item.id">
            <h5>商品名称：{{item.name}}</h5>
            <h5>商品价格：{{item.price}}</h5>
            <h5>商品数量：{{item.count}}</h5>
        </div>

        <h1>商品总价：{{cartStore.totalPrice}}</h1>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
const cartStore = useCartStore();
</script>
<style scoped>
.product {
    border: 2px solid #bfa;
}
</style>