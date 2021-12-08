<template>
  <div :class="{
    'c-checkbox': true,
    'active': isChecked
  }" @click="checkHandler">
    <div class="c-checkbox__box"></div>
    <div class="c-checkbox__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "CCheckBox",
  props: {
    label: String,
    value: null,
    check: {
      default: false
    }
  },
  data(){
    return  {
      isChecked: false
    }
  },
  methods: {
    checkHandler() {
      this.isChecked = !this.isChecked
      this.$emit('update:check', this.isChecked ? this.value : '')
    }
  },
}
</script>

<style scoped lang="sass">
  .c-checkbox
    display: flex
    align-items: center

    &__box
      width: 15px
      height: 15px
      border: 1px solid black
      border-radius: 2px
      background-color: white

    &.active &__box
      background-color: black

</style>