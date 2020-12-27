<template>
  <div class="v-popup__wrapper" ref="popup_wrapper">
  <div class="v-popup"
  @dragenter="closePopup">
    <div class="v-popup__header">
      <span>
<!--    <i class="material-icons"-->
<!--       @click="closePopup">close</i>-->
    </span>
    </div>
    <div class="v-popup__content">
      <slot ref="popup"></slot>
    </div>
    <div class="v-popup__footer">

    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    doubleClick(){
      this.$emit('doubleClick')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item){
      if (item.target===vm.$refs['popup_wrapper']){
        vm.closePopup();
      }
    })
    document.addEventListener('dblclick', function (item){
      console.log(item)
      //todo not working =(
      if (item.target!==vm.$refs['popup_wrapper']){
        vm.doubleClick();
      }
    })

  }
}
</script>

<style lang="scss">
.v-popup {
  box-shadow: 0 0 50px 10px $black;


  &__wrapper{
    background: rgba(64, 64, 64, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>