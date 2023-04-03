<template>
  <div class="row justify-content-center mt-2 mb-2">
      <div class="col-8">
        <h4 class="text-left mb-2">All Products</h4>
      </div>
      <div class="col-4">
        <input
          type="text"
          class="form-control"
          placeholder="Search Products..."
          @input="searchProducts"
          v-model="query.search"
        />
      </div>
    </div>
  <table>
    <thead>
      <tr>
        <th>#Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>
          <img :src="product.images[2] || product.images  " :alt="product.title" width="90" />
        </td>
        <td>
          <router-link
            :to="{ name: 'ProductEdit', params: { id: product.id } }"
            class="btn btn-primary"
            >Edit</router-link
          >
          <!-- <button @click="del(product.id)" class="btn btn-danger">
            Delete
          </button> -->
          <button
            class="btn btn-danger "
            title="Delete Product"
            @click="deleteProductModal(product.id)">Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//import { onMounted, ref } from 'vue';

import {mapActions,mapGetters} from "vuex";

export default {
  name: "Products",
  data(){
    return{
      query:{
        search:""
      }
    }
  },

  methods:{
   ...mapActions(['fetchProducts']),
   //...mapActions([`$store.dispatch('fetchProducts')`]),
   //...mapActions(['deleteProduct']),
    deleteProductModal(id) {
            this.$store.dispatch('deleteProduct','id')
            //this.deleteProduct(id);
            this.fetchProducts({
              search: ''
            });
          
          },
  
   searchProducts() {
      this.fetchProducts(this.query);
    },

  },
  computed:{
    //...mapGetters(["allProducts"]),
    products(){
      //console.log(this.$store.state.products)
      return this.$store.state.products
    }
    
  
  },
  created(){
    this.fetchProducts(this.query);
    //console.log("mounts",this.$store.state.products)
  },
 
 
  }
  
      
    
  


</script>

<style>

</style>