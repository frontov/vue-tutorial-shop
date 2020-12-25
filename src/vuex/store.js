import Vuex from "vuex";
import Axios from "axios";

export default Vuex.createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let isProductExists = false;
            state.cart.map(function (item) {
                if (item.article === product.article) {
                    isProductExists = true;
                    item.quantity++;
                }
            })
            isProductExists || state.cart.push({...product, quantity: 1})

        },
        DEL_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return Axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('DEL_FROM_CART', index);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});