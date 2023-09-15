<template>
    <div>
      <h1>Checkout</h1>
      <!-- 4. Computed Properties -->
      <p>Total Amount: \${{ totalAmount }}</p>
      <!-- 7. Event Handling -->
      <button @click="placeOrder">Place Order</button>
    </div>
  </template>
  
  <script setup>
  // 3. Reactivity Fundamentals [ref(), <script setup>]
  // 4. Computed Properties
  import { ref, computed } from 'vue'
  
  const cart = ref([])
  
  const totalAmount = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0))
  
  // 2. Methods
  // 7b. Method Handlers
  const placeOrder = () => {
    alert('Order placed successfully!')
    cart.value = []
  }
  </script>
  
