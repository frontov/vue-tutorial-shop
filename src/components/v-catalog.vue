<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
  <v-catalog-item
  v-for="product in PRODUCTS"
  :key="product.article"
  :product_data="product"
  @sendDataToParent="showSelectedArticle"/>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  data() {
    return {

    }
  },
  methods:{
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
    showSelectedArticle(data){
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((responce)=>{
      if (responce.data){
        console.log('success');
      }
    })
  },
  computed:{
    ...mapGetters(['PRODUCTS'])
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