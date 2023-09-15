<template>
  <div id="app">
    <!-- 11. Router -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </nav>
    <!-- 11. Router -->
    <router-view></router-view>
  </div>
</template>

<script> 
export default {
  name: 'App'
}
</script>

<style>
</style>
