<template>
  <form @submit.prevent="submit" >
    <label>Title</label>
    <input type="text" name="title" v-model="title"                
    />
    <label>Description</label>
    <input type="text" name="description" v-model="description"                
    />
    <label>Price</label>
    <input type="text" name="price" v-model="price" 
    />
    <label>Image</label>
    <input type="text" name="image" v-model="image" 
    />
    <button>Save</button>
</form>
</template>
<script>
// import Products from './Products.vue'
  import { onMounted, ref } from 'vue'
  import  axios  from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { URLS } from '/training/api-crud/src/constant/Constant.js'
export default {
    name: "ProductEdit",
    props: ['id'],
    
    setup() {
       const products= ref()
       const title = ref(''); 
       const description = ref(''); 
       const price = ref(''); 
       const image = ref('');
       const router = useRouter();
       const route = useRoute()
       onMounted(async() => {
           const res = await axios.get(`${URLS.GET_URL}/${route.params.id}`);
           console.log(res.data)
           products.value = await res.data;
           console.log(products.value)
           title.value = products.value.title;
           description.value = products.value.description;
           price.value = products.value.price;
           image.value = products.value.image;
       })
       const submit = async () => {
           await axios.put(`${URLS.GET_URL}/${route.params.id}`
           , {
               //method: 'PUT',
               headers: {"Content-type": "application/json"},
               body: 
               JSON.stringify({ 
                   title: title.value,
                   description: description.value,
                   price: price.value,
                   image: image.value
                })
           }
           );
           await router.push('/products');
       }
       
       return {title, description, price, image, submit}
    }
    
}
</script>


<style>
</style>