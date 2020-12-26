<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'v-main-wrapper',
  components: {},
  props: {},

  data() {
    return {
      title: 'main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log('main-wrapper created')
  }
}
</script>

<style>
.v-main-wrapper {
  margin: 0 auto;
}
</style>