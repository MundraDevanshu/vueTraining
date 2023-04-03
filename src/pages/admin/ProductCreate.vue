<template>
  <form>
    <label>Title</label>
    <input
      type="text"
      class="form-control"
      placeholder="Title"
      name="title"
      v-model="title"
    />
    <label>Description</label>
    <input
      type="text"
      class="form-control"
      placeholder="Description"
      name="description"
      v-model="description"
    />
    <label>Price</label>
    <input
      type="text"
      class="form-control"
      placeholder="Price"
      name="price"
      v-model="price"
    />
    <label>Image</label>
    <input
      type="text"
      class="form-control"
      placeholder="Image Url"
      name="image"
      v-model="image"
    />
    <button type="button" class="btn btn-success" @click.prevent="addProduct()">Save</button>
  </form>
</template>

<script>
//import { mapActions, mapGetters } from "vuex";
import { useRouter } from 'vue-router'
export default {
  name: "ProductCreate",
  data() {
    return {
      title: "",
      description: "",
      price: "",
      image: ""
    };
  },
  methods:{
    addProduct() {
      this.$store.dispatch("addProduct", {
        data: {
          title: this.title,
          description: this.description,
          price: this.price,
          image: this.image
        }
        
      });
    }
  }
  // data: function () {
  //   return {
  //     product: {
  //       id: 0,
  //       title: "",
  //       description: "",
  //       price: "",
  //       image: "",
  //     },
  //   };
  // },
  // methods: {
  //   ...mapActions(["addProduct"]),
  //   save: function () {
  //     this.addProduct(this.product);
  //     this.resetProduct();
  //   },
  //   resetProduct: function () {
  //     this.product = {
  //       id: 0,
  //       title: "",
  //       description: "",
  //       price: "",
  //       image: "",
  //     };
  //   },
  // },
  // computed: {
  //   ...mapGetters(["allProducts"]),
  // },
};
</script>

<style></style>
