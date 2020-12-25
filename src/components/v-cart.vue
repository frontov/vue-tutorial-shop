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
        @deleteFromCard="deleteFromCard(index)"/>
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
      'DELETE_FROM_CART'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CART(index)
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style lang="scss">
.v-cart {
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
}
</style>