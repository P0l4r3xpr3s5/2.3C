<template>
    <div>
        <h1>Products</h1>
        <!-- 6.a v-for with an Object -->
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>

        <!-- 6.e v-for with a Component -->
        <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        
        @add-to-cart="addToCart"
        ></product-item><!-- 10.b Events [$emit] -->
    </div>
</template>

<script setup>
// 3. Reactivity Fundamentals [ref(), <script setup>]
import { ref } from 'vue'
import ProductItem from '../components/ProductItem.vue'

const products = ref([
    { id: 1, name: 'Product A', price: 50},
    { id: 2, name: 'Product B', price: 150},
])

const cart = ref([])

// 2. Methods
// 7b. Method Handlers
const addToCart = (productId) => {
  const product = products.value.find(p => p.id === productId)
  cart.value.push(product)
}
</script>
