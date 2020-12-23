import Vuex from "vuex";
import Axios from "axios";
export default Vuex.createStore({
    state: {
        products:[]
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products)=>{
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return Axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        }
    }
});