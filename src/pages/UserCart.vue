<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
    <ul>
      <cart-item
        v-for="item in cart.items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script setup>
import CartItem from '../components/cart/CartItem.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { useShopStore } from '@/stores/store';
import { computed } from 'vue'

const store = useShopStore()
const cart = store.cart
const cartTotal = computed(() => cart.total.toFixed(2))
</script>

<style lang="scss" scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;

  h2 {
    color: #292929;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
  }

  h3 {
  text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
