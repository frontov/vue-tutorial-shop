<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('@/assets/images/' +product_data.image) " alt="img">
    <div class="v-cart-item__info">
      <p>{{ product_data.name }}</p>
      <p>Price: {{ product_data.price }} p </p>
      <p>{{ product_data.article }}</p>
    </div>

    <div>
      <p>quantity</p>
      <p>
        <span class="v-cart-item__quantity">
          <span class="v-cart-item__quantity__btn" @click="decrement">-</span>
          {{ product_data.quantity }}
          <span class="v-cart-item__quantity__btn" @click="increment">+</span>
        </span>
      </p>
    </div>
    <button class="btn"
            @click="deleteFromCard">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {


    deleteFromCard() {
      this.$emit('deleteFromCard')
    },
    increment(){
      this.$emit('increment')
    },
    decrement(){
      this.$emit('decrement')
    }
  },
  mounted() {
    // eslint-disable-next-line vue/no-mutating-props
    // this.product_data.quantity= 1;
  }
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #000000;
  padding: $padding*2;
  margin-bottom: $margin*2;

  &__image {
    max-width: 400px;
  }
  &__quantity{
    font-size: 20px;
    color: #aa0000;
    &__btn{
      cursor: pointer;
    }
  }


}
</style>