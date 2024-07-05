<style src="../assets/style.css"></style>
<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <label for="title">Title:</label>
      <input type="text" v-model="title" id="title" required />
      <label for="price">Price:</label>
      <input type="number" v-model="price" id="price" required />
      <label for="category">Category:</label>
      <input type="text" v-model="category" id="category" required />
      <button type="submit" class="submit-btn">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      price: '',
      category: ''
    }
  },
  methods: {
    addProduct() {
      const newProduct = {
        title: this.title,
        price: this.price,
        category: this.category
      }
      axios
        .post('https://fakestoreapi.com/products', newProduct)
        .then(() => {
          this.$router.push({ name: 'Products' })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
