<template>
  <div class="v-cart">

    <router-link :to="{name: 'catalog'}">
      <div class="v-cart__link">back to catalog</div>
    </router-link>

    <h1>Cart</h1>
    <p v-if="!CART.length">no products</p>
    <v-cart-item
        class="v-cart__list"
        v-for="(item, index) in CART"
        :key="item.article"
        :product_data="item"
        @deleteFromCard="deleteFromCard(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"/>
  </div>
  <div class="v-cart__total">
    <p>Total: </p>
    <p>{{ cartTotalCost }}</p>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {},
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    }
  },
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      let result = 0;
      for (let item of this.CART) {
        result += (item.price * item.quantity);
      }
      return result;
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aa0000;
  }
  &__total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding;
    display: flex;
    justify-content: center;
    background: #f0f0f0;
    color: #aa0000;
    //margin: $margin;
    font-size: 20px;
  }
}
</style>