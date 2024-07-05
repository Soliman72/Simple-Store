<style src="../assets/style.css"></style>
<template>
  <div>
    <h1>Product Store</h1>
    <button @click="navigateToAddProduct" class="add-btn">Add Product</button>
    <table class="products-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>
            <button @click="navigateToEditProduct(product.id)" class="edit-btn">Edit</button>
            <button @click="confirmDelete(product.id)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      page: 1,
      limit: 5
    }
  },
  created() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios
        .get(`https://fakestoreapi.com/products?limit=${this.limit}&page=${this.page}`)
        .then((response) => {
          this.products = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    navigateToAddProduct() {
      this.$router.push({ name: 'AddProduct' })
    },
    navigateToEditProduct(id) {
      this.$router.push({ name: 'EditProduct', params: { id } })
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.deleteProduct(id)
      }
    },
    deleteProduct(id) {
      axios
        .delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => {
          this.loadProducts()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    prevPage() {
      if (this.page > 1) {
        this.page--
        this.loadProducts()
      }
    },
    nextPage() {
      this.page++
      this.loadProducts()
    }
  }
}
</script>
