export default {
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
    },
    INCREMENT_CART_ITEM_QUANTITY: (state, index) =>{
        state.cart[index].quantity++;
    },
    DECREMENT_CART_ITEM_QUANTITY: (state, index) =>{
        if (state.cart[index].quantity>1) {
            state.cart[index].quantity--;
        }
        else {
            state.cart.splice(index, 1);
        }
    }
}