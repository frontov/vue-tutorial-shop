<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
  <v-catalog-item
  v-for="product in products"
  :key="product.article"
  :product_data="product"
  @sendDataToParent="showSelectedArticle"/>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  data() {
    return {
      products: [{
        image: "1.jpg",
        name: "T-shirt 6",
        price: 8700,
        article: "T6",
        available: true,
        category: "Женские"
      },{
        image: "6.jpg",
        name: "T-shirt 6",
        price: 700,
        article: "T5",
        available: true,
        category: "Женские"
      }]
    }
  },
  methods:{
    showSelectedArticle(data){
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>