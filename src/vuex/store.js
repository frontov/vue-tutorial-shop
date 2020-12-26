import Vuex from "vuex";
import innerActions from "@/vuex/actions/actions";
import apiRequests from "@/vuex/actions/api-requests"
import mutations from "@/vuex/mutatuions/mutations";
import getters from "@/vuex/getters/getters";

const actions = {...apiRequests, ...innerActions}

export default Vuex.createStore({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters
});