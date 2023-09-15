<template>
    <!-- 1.a Text Interpolation -->
    <!-- 1.c Attribute Bindings [v-bind:id] -->
    <div class="product-item" v-bind:id="product.id">
        <img :src="product.image" alt="Product Image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>\${{ product.price }}</p>
        <!-- 7 Event Handling -->
        <button @click="addToCart">Add to Cart</button>
    </div>
</template>

<script setup>
// 3. Reactivity Fundamentals [ref(), <script setup>]
// 10.a Props
import { defineProps, defineEmits } from 'vue'

const { product } = defineProps();
const emit = defineEmits();

// 2. Methods
const addToCart = () => {
  emit('add-to-cart', product.id)
}
</script>
