<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <h4>${{ price }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      console.log('new product was added')
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;

  .product__data {
    display: flex;

    .product__image {
      margin-right: 1rem;

      img {
        height: 10rem;
        width: 10rem;
        object-fit: cover;
      }
    }

    .product__text {
      h3 {
        margin: 0 0 0.5rem 0;
      }

      h4 {
        margin: 0;
      }
    }
  }

  .product__actions {
    text-align: center;

    button {
      font: inherit;
      cursor: pointer;
      background-color: #45006d;
      color: white;
      border: 1px solid #45006d;
      padding: 0.5rem 1.5rem;
      border-radius: 30px;

      &:hover,
      &:active {
        background-color: #760ab4;
        border-color: #760ab4;
      }
    }
  }
}
</style>
