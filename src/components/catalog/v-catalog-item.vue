<template>
  <div class="v-catalog-item">

    <v-popup
        class="popup"
        v-if="isPopupVisible"
        @closePopup="closeInfoPopup"
        @doubleClick="addToCart">

      <img class="popup__image"
           :src=" require('@/assets/images/' +product_data.image) " alt="img"
      >
    </v-popup>

    <img class="v-catalog-item__image"
         :src=" require('@/assets/images/' +product_data.image) "
         alt="img"
         @click="showInfoInPopup">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} p </p>
    <button class="v-catalog-item__button btn"
            @click="showInfoInPopup"> zoom
    </button>
    <button class="v-catalog-item__button btn"
            @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup"

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    vPopup
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    showInfoInPopup() {
      this.isPopupVisible = true;
    },
    closeInfoPopup() {
      this.isPopupVisible = false;
    }
  },
  data() {
    return {
      isPopupVisible: false
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 $black;
  padding-top: $padding;
  margin: $margin;
  min-width: 300px;
  height: 300px;

  &__image {
    height: 150px;
  }

  &__button {
    margin: $margin*2;
  }
}

.popup {


  &__image {
    height: 450px;
  }
}
</style>