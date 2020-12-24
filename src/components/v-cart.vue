<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :product_data="item"
        @deleteFromCard="deleteFromCard(index)"/>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'
export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    ...mapActions([
        'DELETE_FROM_CARD'
    ]),
    deleteFromCard(index){
      this.DELETE_FROM_CARD(index)
    }
  }
}
</script>

<style>

</style>