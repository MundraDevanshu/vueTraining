import { createStore } from 'vuex'
import axios from "axios";
import { URLS } from "@/constant/Constant.js";
import router from '@/router';

const store = createStore({
    state: () => ({
        products: [],
    
    }),
     
    getters:{
       //allProducts:(state) => state.products,
    
    },
     
    actions : {
        
        async fetchProducts({commit},query=null){
            let search = '';
            if(query !== null){
            search = query?.search || '';
            }
            let url = `${URLS.GET_URL}` ;
            if (search === null) {
            url = `${url}`;
            } else {
            url = `${URLS.SEARCH_URL}${search}`
            }

            const response = await axios.get(url);
            console.log(response.data.products);
            commit('setProducts',response.data.products);
        },


        async deleteProduct({ commit }, id) {
            await axios.delete(`${URLS.DELETE_URL}}/${id}`)
              .then(res => {
                commit('setDeleteProduct', res.data.products.id);
                
              });
          },
        
        addProduct({ commit }, payload) {
            commit("addProduct", payload);
        }
    
    },
     
    mutations : {
       
        setProducts:(state,data) => {
            state.products = data;
            console.log("check",state.products)
        },

        setDeleteProduct: (state, id) => {
            state.products=state.products.filter((x) => x.id !== id);
        },

        addProduct(state, payload) {
            console.log(state);
            state.products = state.products.concat(payload.data);
            router.push("/products")
        }
        
    },

})


 
export default store
