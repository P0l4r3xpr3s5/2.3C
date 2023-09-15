<template>
    <div>
        <h1>Cart</h1>
        <!-- 6.a v-for with an Object -->
        <ul>
            <li v-for="item in cart" :key="item.id">{{ item.name }}</li>
        </ul>
        <!-- 11. Router -->
        <router-link to="/checkout">Proceed to Checkout</router-link>
    </div>
</template>

<script setup>
// 3. Reactivity Fundamentals [ref(), <script setup>]
import { ref } from 'vue'

const cart = ref([])
</script>
