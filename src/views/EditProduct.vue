<style src="../assets/style.css"></style>
<template>
  <div>
    <h2>Edit Product</h2>
    <form @submit.prevent="editProduct">
      <label for="title">Title:</label>
      <input type="text" v-model="title" id="title" required />
      <label for="price">Price:</label>
      <input type="number" v-model="price" id="price" required />
      <label for="category">Category:</label>
      <input type="text" v-model="category" id="category" required />
      <button type="submit" class="submit-btn">Update Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      price: '',
      category: ''
    }
  },
  created() {
    this.loadProduct()
  },
  methods: {
    loadProduct() {
      axios
        .get(`https://fakestoreapi.com/products/${this.id}`)
        .then((response) => {
          const product = response.data
          this.title = product.title
          this.price = product.price
          this.category = product.category
        })
        .catch((error) => {
          console.error(error)
        })
    },
    editProduct() {
      const updatedProduct = {
        title: this.title,
        price: this.price,
        category: this.category
      }
      axios
        .put(`https://fakestoreapi.com/products/${this.id}`, updatedProduct)
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
