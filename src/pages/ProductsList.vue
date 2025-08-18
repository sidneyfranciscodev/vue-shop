<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  data(){
    return {
      products: [
        {
          id: 1,
          title: 'product-1',
          image: 'image',
          description: 'description',
          price: 0.99
        },
        {
          id: 2,
          title: 'product-2',
          image: 'image',
          description: 'description',
          price: 2.99
        },
      ]
    }
  },
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>
